import { useState, useRef } from 'react';

const VideoPlayer = ({ videoSource }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

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
            <source src={videoSource.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button onClick={handlePlayPause} className='border-none border-black sm:w-[350px] w-[200px] mx-auto block rounded-md text-center text-bold cursor-pointer font-bold my-1 bg-blue-600 text-white  '>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;