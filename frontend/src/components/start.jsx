import React from 'react';
import bgVideo from '../assets/beachVid.mp4';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Start({isLoggedIn}) {
  const navigate = useNavigate();
  
  const handleEntry = ()=>{
    if(isLoggedIn === false){
      window.alert("Your Session is Expired! Please Login again")
      navigate('/signup')
      return(<></>)
    }
    else{
      navigate('/d1')
    }
  }
  
  return (
    // <h6>Authentication Token: {localStorage.getItem("Token")}</h6>
      <>
    <header className='w-screen h-screen relative'>
    <video
      src={bgVideo}
      className='w-full h-full object-cover'
      autoPlay
      loop
      muted
    />
    <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>
    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center'>
      <h1 className='text-white mb-2'>First Class Travel</h1>
      <h2 className='text-white mb-4'>Top 1% Locations Worldwide</h2>
      <div className='btnton' >
      {/* <Link to="/d1"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >Start</Link> */}
      <button onClick={handleEntry} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >Start</button>
      </div>
      
    </div>
    <div className='flex items-center justify-center'>
        
    </div>
  </header>
    </>
  )
}
