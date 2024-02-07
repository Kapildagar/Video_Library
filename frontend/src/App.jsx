
import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import { data } from 'autoprefixer';
import Videonav from './Component/Videonav/Videonav';
import { Link } from 'react-router-dom';
import routes from '../Routes/Routes';
function App() {
 
  const [loading,setloading]=useState(false);
  const[videoData,setvideoData]=useState([]);
  const [Data,setData]=useState({
    name:"",
    filename:""
  });
  // const [name,setname]=useState('');

  useEffect(()=>{
         (async()=>{
          const res=await axios.get(`${routes}/Allvideo`);
          if(res.data.success){
            setvideoData(res.data.data);
          }
          console.log(res);
         })()
  },[Data])

  console.log(videoData)

 const handleChange=(e)=>{
    const {name,value,files}=e.target;
    console.log(value);
    console.log(files)
       setData((prev)=>(
        {...prev,[name]:files?files[0]:value}
       ))
       
 }
 const handelClick=async()=>{
  try{
  console.log(Data);
      const fd=new FormData();
      console
      setloading(true)
      fd.append("name",Data.name)
      fd.append("videofile",Data.filename);
      const res=await axios.post(`${routes}/createvideo`,fd)    ;
      if(res.data.success){
          setloading(false);
      }
      setData({
        name:"",
         filename:""
      })
  }
  catch(err){
    setloading(false);
  }

 }

  return (
    <>
      <div className='bg-gray-700 p-1 mb-[40px] flex justify-between'>
      <h1 className='text-[30px] font-bold  text-white mx-[10px]'>Video Library</h1>
      <Link to="/bookmark" className='text-white flex items-center mx-[10px] border-[2px] border-white p-1 rounded-md transition ease-in-out hover:scale-110'>BookMark</Link>
      </div>
      
      <div className='flex flex-col  border-[2px] border-black gap-2 p-2 sm:w-[400px] md:w-[600px] mx-auto rounded-md mb-[60px]  '>
      <h1 className='text-[30px] font-bold text-center'>Add Videos</h1>
      <input  className='border-[2px] border-black rounded-md p-1' type='text' value={data.name} name="name" onChange={handleChange} placeholder='Enter the tittle' />
      <input  className='border-[2px] border-black rounded-md '  type='file' accept='video/*' name="filename" onChange={handleChange} />
      <button  className='border-none border-black rounded-md bg-blue-600 text-white font-bold text-[20px]'  type='submit'onClick={handelClick}>{loading?"Uploading...":"Submit"}</button>
      </div>
      <Videonav  dataArray={videoData}/>
    </>
  )
}

export default App
