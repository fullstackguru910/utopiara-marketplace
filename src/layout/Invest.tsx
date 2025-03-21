'use client'

import Image from 'next/image'
import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

// Sample NFT image - you can replace this with your own image
const nftImage = '/images/1.webp'

export default function Invest() {
  const component = useScrollAnimation('.animate-invest')
  const titleComponent = useScrollAnimation('.animate-title', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)'
  })
  const imageComponent = useScrollAnimation('.animate-image', {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
  const leftStepsComponent = useScrollAnimation('.animate-step-left', {
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  })
  const rightStepsComponent = useScrollAnimation('.animate-step-right', {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  })

  return (
    <div
      className="relative min-h-screen w-full bg-[#112331] py-16 text-white"
      ref={component}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#112331] opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        {/* Title */}
        <h1
          className="animate-title mb-12 text-center text-4xl font-bold tracking-wide md:text-5xl"
          ref={titleComponent}>
          <span className="text-[#01eaf9]">HOW IT</span> WORKS:
        </h1>

        {/* Grid Layout: Steps on Left/Right, Image in Center */}
        <div className="flex flex-col gap-8  md:grid-cols-3">
          {/* Left Side Steps */}
          <div
            className="flex flex-row "
            ref={leftStepsComponent}>
            {/* Step 1 */}
            <div className="animate-step-left relative flex h-[200px] items-start gap-4 border-b-[1px] border-l-[1px] border-dashed border-[#01eaf9]">
              <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#01eaf9] bg-[#112331] p-2 text-xl font-bold text-[#01eaf9]">
                <div className="w-full rounded-full bg-[#01eaf9] text-center text-[#112331]">1</div>
              </div>
              <div className="ml-12 w-1/2">
                <h3 className="text-xl font-semibold">CHOOSE A WALLET</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Select and set up a cryptocurrency wallet that supports the blockchain on which the NFTs are issued.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="animate-step-left relative flex h-[200px] items-start gap-4 border-b-[1px] border-l-[1px] border-dashed border-[#01eaf9]">
              <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#01eaf9] bg-[#112331] p-2 text-xl font-bold text-[#01eaf9]">
                <div className="w-full rounded-full bg-[#01eaf9] text-center text-[#112331]">2</div>
              </div>
              <div className="ml-12 w-1/2">
                <h3 className="text-xl font-semibold">CHOOSE A WALLET</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Select and set up a cryptocurrency wallet that supports the blockchain on which the NFTs are issued.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="animate-step-left relative flex h-[200px] items-start gap-4 border-b-[1px] border-l-[1px] border-dashed border-[#01eaf9]">
              <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#01eaf9] bg-[#112331] p-2 text-xl font-bold text-[#01eaf9]">
                <div className="w-full rounded-full bg-[#01eaf9] text-center text-[#112331]">3</div>
              </div>
              <div className="ml-12 w-1/2">
                <h3 className="text-xl font-semibold">CHOOSE A WALLET</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Select and set up a cryptocurrency wallet that supports the blockchain on which the NFTs are issued.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div
            className="relative flex flex-row justify-end"
            ref={imageComponent}>
            <div className="animate-image absolute -left-28 h-[200px] w-2/3 basis-2/3">
              <Image
                src={nftImage}
                alt="NFT Example"
                layout="fill"
                objectFit="cover"
                className="absolute rounded-lg shadow-lg "
              />
            </div>

            {/* Step 4 */}
            <div className="animate-step-left relative flex h-[200px] basis-1/3 items-start gap-4 border-b-[1px] border-l-[1px] border-r-[1px] border-dashed border-[#01eaf9]">
              <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#01eaf9] bg-[#112331] p-2 text-xl font-bold text-[#01eaf9]">
                <div className="w-full rounded-full bg-[#01eaf9] text-center text-[#112331]">4</div>
              </div>
              <div className="ml-12 w-1/2">
                <h3 className="text-xl font-semibold">CHOOSE A WALLET</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Select and set up a cryptocurrency wallet that supports the blockchain on which the NFTs are issued.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Steps */}
          <div
            className="flex flex-row "
            ref={rightStepsComponent}>
            {/* Step 5 */}
            <div className="animate-step-left relative flex h-[200px] items-start gap-4 border-b-[1px] border-l-[1px] border-dashed border-[#01eaf9]">
              <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#01eaf9] bg-[#112331] p-2 text-xl font-bold text-[#01eaf9]">
                <div className="w-full rounded-full bg-[#01eaf9] text-center text-[#112331]">5</div>
              </div>
              <div className="ml-12 w-1/2">
                <h3 className="text-xl font-semibold">CHOOSE A WALLET</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Select and set up a cryptocurrency wallet that supports the blockchain on which the NFTs are issued.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="animate-step-left relative flex h-[200px] items-start gap-4 border-b-[1px] border-l-[1px] border-dashed border-[#01eaf9]">
              <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#01eaf9] bg-[#112331] p-2 text-xl font-bold text-[#01eaf9]">
                <div className="w-full rounded-full bg-[#01eaf9] text-center text-[#112331]">6</div>
              </div>
              <div className="ml-12 w-1/2">
                <h3 className="text-xl font-semibold">CHOOSE A WALLET</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Select and set up a cryptocurrency wallet that supports the blockchain on which the NFTs are issued.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="animate-step-left relative flex h-[200px] items-start gap-4 border-b-[1px] border-l-[1px] border-r-[1px] border-dashed border-[#01eaf9]">
              <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#01eaf9] bg-[#112331] p-2 text-xl font-bold text-[#01eaf9]">
                <div className="w-full rounded-full bg-[#01eaf9] text-center text-[#112331]">7</div>
              </div>
              <div className="ml-12 w-1/2">
                <h3 className="text-xl font-semibold">CHOOSE A WALLET</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Select and set up a cryptocurrency wallet that supports the blockchain on which the NFTs are issued.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
