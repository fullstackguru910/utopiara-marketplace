import GetStartedBtn from '@/components/GetStartedBtn/GetStartedBtn'
import React from 'react'

export default function Browse() {
  return (
    <div className="relative flex min-h-screen w-full flex-row items-center justify-center py-24">
      <div className="absolute inset-0 bg-primary"></div>
      <div className="z-10 mb-16 max-w-2xl text-center">
        <h1 className="font-bold text-white max-lg:text-2xl md:text-6xl lg:text-5xl">
          <p>BROWSE</p>
          <p className="my-4 text-secondary">EXCLUSIVE NFT</p>
          <p>COLLECTIONS</p>
        </h1>
        <p className="my-6 text-base text-white/80 max-lg:text-sm lg:text-lg">
          Choose us as your NFT marketplace and embark on an exciting journey into the world of digital collectibles, where creativity,
          security, and opportunity converge.
        </p>
        <GetStartedBtn />
      </div>
    </div>
  )
}
