'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Carousel from '@/components/Carousel'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Top() {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [swiperInstance] = useState<SwiperType | null>(null)
  const component = useScrollAnimation('.animate-top')

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.navigation.destroy()
      swiperInstance.navigation.init()
      swiperInstance.navigation.update()
    }
  }, [swiperInstance])

  return (
    <section
      id="top"
      className="relative h-screen w-full"
      ref={component}>
      <div className="absolute inset-0 bg-primary "></div>
      <div className="relative z-10 mx-auto flex w-[70%] flex-col items-center justify-between text-white">
        <div className="animate-top mt-32 basis-[30%]">
          <h1 className="font-bold max-lg:text-2xl lg:text-[36px]">
            TOP
            <span className="ml-8 font-bold text-secondary">COLLECTIONS</span>
          </h1>
        </div>
      </div>
      <Carousel />
    </section>
  )
}
