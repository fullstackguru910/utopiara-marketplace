'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Carousel from '@/components/Carousel'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Top() {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const component = useScrollAnimation('.animate-top')
  const swiperComponent = useScrollAnimation('.animate-swiper', {
    y: 100,
    opacity: 0,
    duration: 1.2
  })

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.navigation.destroy()
      swiperInstance.navigation.init()
      swiperInstance.navigation.update()
    }
  }, [swiperInstance])

  const images = [
    '/images/1.webp',
    '/images/2.webp',
    '/images/3.webp',
    '/images/4.webp',
    '/images/5.webp',
    '/images/6.webp',
    '/images/3.webp',
    '/images/1.webp',
    '/images/2.webp',
    '/images/3.webp',
    '/images/4.webp',
    '/images/5.webp'
  ]

  return (
    <div
      className="relative h-screen w-full"
      ref={component}>
      <div className="absolute inset-0 bg-primary "></div>
      <div className="relative z-10 mx-auto flex w-[70%] flex-col items-center justify-between text-white">
        <div className="animate-top mt-32 basis-[30%]">
          <h1 className="text-[36px] font-bold">
            TOP
            <span className="ml-8 font-bold text-secondary">COLLECTIONS</span>
          </h1>
        </div>
      </div>
      {/* <button
        ref={prevRef}
        className="animate-top absolute bottom-0 left-32 z-10 -translate-y-1/2 rounded-full bg-gray-800 p-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 font-bold text-secondary">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button> */}

      {/* <span className="animate-top absolute bottom-6 left-48 z-10 text-[36px] text-white opacity-100">
        <span id="current-slide">1</span>/{images.length}
      </span>
      <span className="animate-top absolute bottom-6 left-96 z-10 text-[36px] text-white opacity-100">BIO-CODE &ldquo;BESTIA&rdquo;</span> */}
      {/* <button
        ref={nextRef}
        className="animate-top absolute bottom-0 left-[278px] z-10 -translate-y-1/2 rounded-full bg-gray-800 p-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 font-bold text-secondary">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button> */}
      <Carousel />
      {/* <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={7}
        spaceBetween={4}
        loop={true}
        speed={700}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 7 }
        }}
        centeredSlides={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => {
          const currentSlide = document.getElementById('current-slide')
          if (currentSlide) {
            currentSlide.textContent = (swiper.realIndex + 1).toString()
          }
        }}
        className="animate-swiper relative mt-20 h-[400px] w-full overflow-visible overflow-x-hidden text-center"
        style={{ zIndex: 0 }}
        ref={swiperComponent}>
        {images.map((src, index) => (
          <SwiperSlide
            key={`slide-${index}`}
            className="group h-full !overflow-visible duration-300"
            style={{ overflow: 'visible' }}>
            <div className="relative h-full w-full overflow-visible">
              <Image
                src={src}
                alt={`Collection item ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-all duration-500 group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:z-50 group-hover:scale-125 group-hover:border-[2px] group-hover:border-secondary group-hover:blur-none"
                priority={index < 3}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  )
}
