import Community from '@/components/Community'
import React from 'react'

export default function Footer() {
  return (
    <div className="flex h-[300px]  w-full flex-row items-center justify-between bg-[#112331] px-20 text-white">
      <div className="basis-[25%] text-[28px] font-bold">
        UTOPIARA
        <h1 className="text-[16px] font-thin">Innovator in the field of NFTs.</h1>
      </div>
      <div className="flex w-[70%] basis-[75%] flex-row items-center justify-between">
        <div className="basis-20% flex w-full flex-col items-start justify-between text-gray-500">
          <h1 className="mb-4 text-[16px] text-white">MARKETPLACE</h1>
          <h5 className="text-[12px]">ALL NFTs</h5>
          <h5 className="text-[12px]">Virtual World</h5>
          <h5 className="text-[12px]">Art</h5>
        </div>
        <div className="basis-20% flex w-full flex-col items-start justify-between text-gray-500">
          <h1 className="mb-4 text-[16px] text-white">STATISTIC</h1>
          <h5 className="text-[12px]">Rankings</h5>
          <h5 className="text-[12px]">Activity</h5>
          <h5 className="text-[12px]">Activity</h5>
        </div>
        <div className="basis-20% flex w-full flex-col items-start justify-between text-gray-500">
          <h1 className="mb-4 text-[16px] text-white">RESOURCES</h1>
          <h5 className="text-[12px]">Help Center</h5>
          <h5 className="text-[12px]">Newsletter</h5>
          <h5 className="text-[12px]">System Tokens</h5>
        </div>
        <div className="basis-20% flex w-full flex-col items-start justify-between text-gray-500">
          <h1 className="mb-4 text-[16px] text-white">COMPANY</h1>
          <h5 className="text-[12px]">Home</h5>
          <h5 className="text-[12px]">Marketplace</h5>
          <h5 className="text-[12px]">Top Creator</h5>
        </div>
        <div className="basis-20% flex w-full flex-row items-center justify-center text-gray-500">
          <Community />
        </div>
      </div>
    </div>
  )
}
