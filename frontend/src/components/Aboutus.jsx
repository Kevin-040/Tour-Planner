import React from "react";
import kevin from '../assets/kevin.png';
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
    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-800 rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-white ">Very easy this was to integrate</h3>
            <p className="my-4 font-light">If you care for your time, I hands down would go with this.</p>
        </blockquote>
        <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={kevin} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>KEVIN PATEL</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">kevinconcept550@gmail.com</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-800 rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-white ">Solid foundation for any project</h3>
            <p className="my-4 font-light">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!</p>
        </blockquote>
        <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={maldives1} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div >YASH MEVADA</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">yashmevada@gmail.com</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-800 rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-white ">Mindblowing workflow</h3>
            <p className="my-4 font-light">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.</p>
        </blockquote>
        <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={maldives2} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>KAVA JAY</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">jaykava64@gmail.com</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-800 rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-white ">Efficient Collaborating</h3>
            <p className="my-4 font-light">You have many examples that can be used to create a fast prototype for your team.</p>
        </blockquote>
        <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={maldives3} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div >Demo User</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">demo123@gmail.com</div>
            </div>
        </figcaption>    
    </figure>
    
    
</div>


        
  
    </div>
  );


};
  
export default About;