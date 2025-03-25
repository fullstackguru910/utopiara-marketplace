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
      <div className="mx-auto w-[90%] pt-80 text-white">
        <div className="animate-home w-[35%] rounded-[32px] bg-black bg-opacity-70 p-12">
          <h1>Your guide to the NFT world!</h1>
          <h5 className="my-4 text-[48px] font-bold">
            <span className="text-secondary">UTOPIARA</span>
          </h5>
          <GetStartedBtn />
        </div>
      </div>
    </div>
  )
}
