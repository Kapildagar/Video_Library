import { useEffect, useState } from "react"
import axios from "axios"
import VideoPlayer from "./Videop";
import { Link } from "react-router-dom";
import routes from "../../../Routes/Routes";
import { Blocks } from 'react-loader-spinner'
const Bookmark = () => {

    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        (async () => {
            setloading(true);
            const res = await axios.get(`${routes}/Allvideo`)
            console.log(res);
            const ndata = res.data.data;
            const bookdata = ndata.filter((it) => it.bookmark)
            setdata(bookdata);
            setloading(false)
            console.log(bookdata)
        })()
    }, [])

    return (
        <>
            <div className='bg-gray-700 p-1 mb-[40px] flex justify-between'>
                <Link to='/'> <h1 className='text-[30px] font-bold  text-white mx-[10px]'>Video Library</h1></Link>

            </div>

            <h1 className="text-[40px] font-bold w-fit mx-auto">BookMark</h1>
            {loading?
            <div className='sm:flex w-fit mx-auto items-center'>
                <Blocks
                    height="120"
                    width="120"
                    color="#4fa94d"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    visible={true}
                />
                <h1 className='text-[30px] font-bold text-cyan-500'>Loading...</h1></div>
                :
            <div className="sm:flex  sm:flex-row sm:gap-4  sm:flex-wrap sm:justify-center rounded-md border-white m-[40px] p-4 border-[2px bg-gray-200">
                {data?.map((itm, index) => {
                    return (
                        <div key={index}>
                            <VideoPlayer videoSource={itm} />
                        </div>
                    )
                })}
            </div>}
        </>
    )
}

export default Bookmark