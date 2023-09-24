'use client'
import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import { Space_Mono } from 'next/font/google'
import AnimeCard from './AnimeCard'

const Seasonal = ({homepage}) => {

    const [seasonalData, setSeasonalData] = useState([])

    

    const fetchSeason=async()=>{

        try {
            const res= await fetch('https://api.jikan.moe/v4/seasons/now')
            const data= await res.json()
            console.log(data);
            setSeasonalData(data)
        } catch (error) {
            console.log("Error Fetching Seasonals", error);
        }
    }

    useEffect(() => {
      

      setTimeout(() => {
        fetchSeason()
      }, 2000);
    }, [])
    

  return (
    <>
        <Heading title={'This Season'}/>

        {seasonalData && seasonalData.data && seasonalData.data.length>0?<>{seasonalData?.data?.map((item)=>(
            <AnimeCard key={item.mal_id} name={item.title_english} img={item.images.jpg.large_image_url} isNormal={true}/>
        ))}</>: <span className='relative left-1/2 loader'/>}
    </>
  )
}

export default Seasonal