'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";


const coruselData = [
  {
    img: "/assets/onePiece.png",
    desc: "Discover everything about your favorite animes on our website! We have detailed information on anime shows, characters, and more.",
  },
  { img: "/assets/bleach.jpg", desc: "Explore anime like never before with us. Get info on animes, connect with fans, and enjoy your anime journey!" },
  {
    img: "/assets/naruto.png",
    desc: "Join our anime-loving community! Discuss your favorite animes, meet fellow fans, and share your thoughts in our community section.",
  },
];



const MainCrousel = () => {

    
    

    const [currentIndex, setCurrentIndex] = useState(0)
    
    const prevCoursel=()=>{
        const isFirstindex=currentIndex===0
        const newIndex=isFirstindex?coruselData.length-1:currentIndex-1
        setCurrentIndex(newIndex)
    }
    const forwardCoursel=()=>{
        // const isLastindex=currentIndex===coruselData.length-1
        const newIndex=(currentIndex+1)%(coruselData.length)
        setCurrentIndex(newIndex)
    }
    
    useEffect(() => {
      const IntervalId=setInterval(() => {
        forwardCoursel()
      }, 5000);
    
      return () => {
        clearInterval(IntervalId)
      }
    }, [currentIndex])
    

  return <div className="w-full flex justify-end group">

    <div style={{ backgroundImage: `url(${coruselData[currentIndex].img})` }} className='soft_image w-[1200px] h-[603px] rounded-2xl duration-500'></div>
    <div className="tracking-wider leading-snug max-w-2xl absolute flex font-bold md:text-4xl text-2xl px-10 w-auto self-center left-[15%]">
           {coruselData[currentIndex].desc}
        </div>
        <HiChevronLeft size={60} className="lg:hidden group-hover:block absolute lg:top-[50%] lg:left-0 lg:translate-x-[200%] bottom-0 left-[35%] hover:scale-[1.5] duration-200 opacity-75"  onClick={()=>{prevCoursel()}}/>
        <HiChevronRight size={60} className="lg:hidden group-hover:block absolute lg:top-[50%] lg:right-0 lg:translate-x-[-200%] bottom-0 right-[35%] hover:scale-[1.5] duration-200 opacity-75"  onClick={()=>{forwardCoursel()}}/>
        
     
    
  </div>;
};

export default MainCrousel;
