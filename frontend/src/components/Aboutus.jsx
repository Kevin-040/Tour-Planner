import React from "react";
import maldives1 from '../assets/maldives1.jpg';
import maldives2 from '../assets/maldives2.jpg';
import maldives3 from '../assets/maldives3.jpg';

const About = () => {
  return (
    <div>
      <h1 className="text-center mt-4">
        About US</h1>
        <br></br>
        <br></br>
        
<div className=" grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-black" >
    <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 ">KEVIN PATEL</h3>
            <p className="my-4 font-light"></p>
        </blockquote>
        <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={maldives1} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="text-black">kevinconcept550@gmail.com</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">+91 9016422281</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 ">YASH MEVADA</h3>
            <p className="my-4 font-light"></p>
        </blockquote>
        <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={maldives2} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="text-black">yashmevada@gmail.com</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">+91 9328352150</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 ">KAVA JAY</h3>
            <p className="my-4 font-light"></p>
        </blockquote>
        <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={maldives3} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="text-black">jaykava64@gmail.com</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">+91 9328352150</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 "> Demo User</h3>
            <p className="my-4 font-light"></p>
        </blockquote>
        <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={maldives3} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="text-black">demo123@gmail.com</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">+91 1234567890</div>
            </div>
        </figcaption>    
    </figure>
    
    
</div>


        
  
    </div>
  );
};
  
export default About;