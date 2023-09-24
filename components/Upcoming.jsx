'use client'
import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import AnimeCard from './AnimeCard'
import { url } from './config/apiUrl'

const Upcoming = () => {

    const [upcomingData, setUpcomingData] = useState([])
    const [isExpand, setIsExpand] = useState(false)

    const fetchUpcoming=async()=>{
        const res=await fetch(`${url}/seasons/upcoming`)
        const data= await res.json()
        console.log(data)
        setUpcomingData(data)   
    }

    useEffect(() => {
        setTimeout(() => {
            fetchUpcoming()
        }, 3000);
      
    }, [])
    
  return (
    <>
    <Heading title={'Top Upcoming'}/>
        <div className={`flex flex-wrap gap-10 justify-center overflow-hidden w-full ${isExpand?'max-h-full':'max-h-[1290px]'} my-10 py-10 `}>
            {upcomingData && upcomingData.data && upcomingData.data.length>0?
            < >
                {upcomingData?.data?.map((item)=>(
                    <AnimeCard isNormal={true} key={item.mal_id} name={item?.title_english || item?.title} img={item.images.jpg.large_image_url}/>
                ))}
            </>:<span className='relative loader'/>}
        </div>
        <div className=' text-lg text-center font-semibold cursor-pointer' onClick={()=>{setIsExpand(!isExpand)}}>{isExpand?"< View Less":"View More >"}</div>

    </>
  )
}

export default Upcoming