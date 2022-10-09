import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import bgVideo from '../assets/beachVid.mp4';

const Hero = () => {

  const [place, setPlace] = useState("Unjha")
  
  const onChangePlace = (event)=>{
    setPlace(event.target.value)
  }
  let om='/newpage';
  return (
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


       
        <form
          action=''
          className='flex-col border p-1 rounded-md text-black bg-gray-100/90 max-w-[700px] w-[30%] mx-auto h-40'
        >
          <div>
            <label className='text-2xl'>Place:</label>
          <input
            type='text'
            placeholder='Search Destinations'
            className='bg-slate-800 text-white ml-3 justify-start mb-2 mt-2 px-3 py-2'
            onChange={onChangePlace}
          />
          </div>
        
          <div className='flex justify-center mb-3'>
            <input type="date" className='bg-slate-800 rounded-xl text-white pl-5 pr-3 pb-1' name="StartDate"/>
            <p className='mx-4 mt-2 pb-2'>To</p>
            <input type="date" className='bg-slate-800 rounded-xl text-white pl-5 pr-3 pb-1' name="StartDate"/>
          </div>

          <div>
          <Link to={{
            pathname: "/dest",
            state: place
          }}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >Start</Link>
          </div>

          {/* <Link className='w-11 btn--form ml-4' >
              <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </Link> */}
          
        </form>
      </div>
    </header>
  );
};

export default Hero;
