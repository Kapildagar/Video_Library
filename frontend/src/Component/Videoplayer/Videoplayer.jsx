import { useState, useRef } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import routes from '../../../Routes/Routes';
const VideoPlayer = ({ videoSource }) => {
  console.log(videoSource)
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [book, setbook] = useState(videoSource?.bookmark)
  const navigate=useNavigate();

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleClick = async (id) => {
    console.log(id)
    console.log(book);
    const res = await axios.post(`${routes}/addBook/${id}`);
    if (res.data.success) {
      setbook(res.data.data.bookmark)
    }
    console.log(res);

  }
  const handleDelete = async (id) => {
    console.log(id)
    console.log(book);
    const res = await axios.delete(`${routes}/deleteVideo/${id}`);
    console.log(res)
    if (res.data.success) {
      window.location.reload();
    }
    console.log(res);

  }
  console.log(book)

  return (
    <>
      <div className='border-[2px] border-white   rounded-md bg-white my-[20px]'>
        <div className='text-[20px] font-bold text-center'>{videoSource?.name}</div>
        <div className="p-1 flex flex-col items-center">
          <video
            ref={videoRef}
            controls
            width="400"
            height="250"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={videoSource?.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button className='border-none border-black sm:w-[350px] w-[200px] mx-auto block rounded-md text-center text-bold cursor-pointer font-bold my-1 bg-blue-600 text-white  ' onClick={handlePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button to="" className='border-none border-black sm:w-[350px] w-[200px] mx-auto block rounded-md text-center text-bold cursor-pointer font-bold my-1 bg-blue-600 text-white ' onClick={() => handleClick(videoSource._id)}>{book?"Remove From BookMark":"Add to Bookmark"}</button>
          <button to="" className='border-none border-black sm:w-[350px] w-[200px] mx-auto block rounded-md text-center text-bold cursor-pointer font-bold my-1 bg-blue-600 text-white ' onClick={() => handleDelete(videoSource._id)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;