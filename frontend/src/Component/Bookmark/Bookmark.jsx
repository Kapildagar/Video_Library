import { useEffect, useState } from "react"
import axios from "axios"
import VideoPlayer from "./Videop";
import { Link } from "react-router-dom";

const Bookmark = () => {

    const [data, setdata] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await axios.get("http://localhost:3000/api/v1/Allvideo")
            console.log(res);
            const ndata = res.data.data;
            const bookdata = ndata.filter((it) => it.bookmark)
            setdata(bookdata);
            console.log(bookdata)
        })()
    }, [])

    return (
        <>
           <div className='bg-gray-700 p-1 mb-[40px] flex justify-between'>
           <Link to='/'> <h1 className='text-[30px] font-bold  text-white mx-[10px]'>Video Library</h1></Link>
     
      </div>
      
            <h1 className="text-[40px] font-bold w-fit mx-auto">BookMark</h1>
            <div className="sm:flex  sm:flex-row sm:gap-4  sm:flex-wrap sm:justify-center rounded-md border-white m-[40px] p-4 border-[2px bg-gray-200">
                {data?.map((itm, index) => {
                    return (
                        <div key={index}>
                            <VideoPlayer videoSource={itm} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Bookmark