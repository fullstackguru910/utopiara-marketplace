import Navbar from '@/layout/Navbar'
import React from 'react'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen w-full bg-[url('/images/about_back.webp')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-[#112331] opacity-85"></div>
        <div className="relative z-10 mx-auto flex w-[80%] flex-row items-center justify-between text-white">
          <div className="basis-[30%]">
            <h1 className="text-[36px]">
              ABOUT <br></br>
              <span className="text-[#01eaf9]">PROJECT</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
