'use client'
import GetStartedBtn from '@/components/GetStartedBtn/GetStartedBtn'
import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Home() {
  const component = useScrollAnimation('.animate-home')

  return (
    <div
      className="relative h-[90vh] w-full bg-primary "
      ref={component}>
      <div className="absolute right-0 h-screen w-[60%] scale-x-[-1] bg-[url('/images/background.webp')] bg-cover bg-center" />
      <div className="absolute right-0 h-screen w-[65%] bg-gradient-to-r from-[#112331] via-transparent to-[#112331]" />
      {/* <div className="absolute top-0 h-screen w-full bg-gradient-to-b from-[#112331] via-transparent to-[#112331]"></div> */}
      <div className="z-30 mx-auto w-[95%] pt-80 text-white">
        <div className="animate-home rounded-[32px] bg-opacity-70 bg-none max-lg:w-[70%] max-lg:p-4 lg:w-[35%] lg:p-12">
          <h1 className="max-lg:text-xs">Your guide to the NFT world!</h1>
          <h5 className="text-[48px] font-bold lg:my-4">
            <span className="text-secondary max-lg:text-3xl">UTOPIARA</span>
          </h5>
          <GetStartedBtn />
        </div>
      </div>
    </div>
  )
}
