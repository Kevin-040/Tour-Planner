import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import bgVideo from '../assets/beachVid.mp4';
// import { BiSearch } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const Detail01 = () => {

  // Get Current Date
  let newDate = new Date();

  // Function to Format date in yyyy-mm-dd format
  function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear()
  }
    return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
  }

  // Function to add days from date
  // Used to set minimum days for Tour
  Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  const [place, setPlace] = useState("Unjha")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const onChangePlace = (event)=>{
    setPlace(event.target.value)
  }

  const hadleStartDate = (event)=>{
    setStartDate(event.target.value)
  }

  const hadleEndDate = (event)=>{
    setEndDate(event.target.value)
  }

  return (
    <header className='w-screen h-screen relative '>
      <video
        src={bgVideo}
        className='w-full h-full object-cover'
        autoPlay
        loop
        muted
      />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center'>
        <h1 className='text-white mb-2'>Adventures are the best way to learn...</h1>
        {/* <h2 className='text-white mb-4'>Top 1% Locations Worldwide</h2> */}
<br></br>

       
        <form
          action=''
          className='flex-col border p-1 rounded-md text-black bg-gray-100/90 max-w-[700px] w-[30%] mx-auto h-40'
        >
          <div className='searchDestination'>
            <label className='text-2xl'>Place:</label>
          <input
            type='text'
            placeholder='Search Destinations'
            className='bg-slate-800 text-white ml-3 rounded-xl justify-start mb-2 mt-2 px-3 py-2 '
            onChange={onChangePlace}
          /><span><BiSearch/></span>
          </div>
          <div className='flex justify-center mb-3'>
            <input type="date" placeholder="yyyy-mm-dd" min={formatDate(newDate,"yyyy-mm-dd")} className='bg-slate-800 rounded-xl text-white pl-5 pr-3 pb-1 date' name="StartDate" onChange={hadleStartDate}/>
            <p className='mx-4 mt-2 pb-2'>To</p>
            <input type="date" placeholder="yyyy-mm-dd" min={formatDate(newDate.addDays(2),"yyyy-mm-dd")} className='bg-slate-800 rounded-xl text-white pl-5 pr-3 pb-1 date' name="StartDate" onChange={hadleEndDate}/>
          </div>

          <div>
          <Link to= "/location" state={{ place: place, startdate:startDate, enddate:endDate}}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >Show Places</Link>
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

export default Detail01;
