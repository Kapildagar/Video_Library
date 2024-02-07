import VideoPlayer from "../Videoplayer/Videoplayer"


const Videonav = ({ dataArray }) => {
    console.log(dataArray)
    return (
        <>
          <div className="sm:flex  sm:flex-row sm:gap-4  sm:flex-wrap sm:justify-center rounded-md border-white m-[40px] p-4 border-[2px bg-gray-200">
            {
                dataArray?.map((itm, index) => {
                    return (<div key={index} >
                        <VideoPlayer key={index} videoSource={itm} />
                    </div>  )
            })
            }
            </div>
        </>
    )
}

export default Videonav