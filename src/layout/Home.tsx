'use client'
import GetStartedBtn from '@/components/GetStartedBtn/GetStartedBtn'
import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Home() {
  const component = useScrollAnimation('.animate-home')

  return (
    <div
      className="h-[90vh] w-full bg-[url('/images/background.webp')] bg-cover bg-center bg-no-repeat"
      ref={component}>
      <div className="mx-auto w-[95%] pt-80 text-white">
        <div className="animate-home rounded-[32px] bg-black bg-opacity-70 max-lg:w-[70%] max-lg:p-4 lg:w-[35%] lg:p-12">
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
