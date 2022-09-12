import React from 'react';
import bgVideo from '../assets/beachVid.mp4';
import { Link } from 'react-router-dom';


export default function Start() {
  return (
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
      <Link to="/hero"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >Start</Link>
      </div>
      
    </div>
    <div className='flex items-center justify-center'>
        
    </div>
  </header>
    </>
  )
}