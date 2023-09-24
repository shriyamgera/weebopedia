import MainCrousel from '@/components/MainCrousel'
import Seasonal from '@/components/Seasonal'
import TopAnime from '@/components/TopAnime'
import React from 'react'

const page = () => {
  return (
    <>
      <MainCrousel/>
      <TopAnime/>
      <Seasonal homepage={true}/>
    </>
  )
}

export default page