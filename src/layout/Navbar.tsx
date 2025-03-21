import Button from '@/components/Button/Button'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="flex h-[70px] w-full flex-row items-center justify-between bg-[#112331] px-20 text-white">
      <div className="basis-[40%] text-[28px] font-bold">UTOPIARA</div>
      <div className="flex w-[70%] basis-[60%] flex-row items-center justify-between">
        <Link
          href="/"
          className="hover:text-[#01eaf9]">
          HOME
        </Link>
        <Link
          href="/market"
          className="hover:text-[#01eaf9]">
          MARKET
        </Link>
        <Link
          href="/top"
          className="hover:text-[#01eaf9]">
          TOP
        </Link>
        <Link
          href="/about"
          className="hover:text-[#01eaf9]">
          ABOUT
        </Link>
        <Link
          href="/faq"
          className="hover:text-[#01eaf9]">
          FAQ
        </Link>
        <Link
          href="/contact"
          className="hover:text-[#01eaf9]">
          CONTACT
        </Link>

        <Button />
      </div>
    </div>
  )
}
