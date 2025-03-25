'use client'
import Button from '@/components/Button/Button'
import Checkbox from '@/components/Checkbox'
import Link from 'next/link'
import Login from '@/components/Login'
import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import Register from '@/components/Register'

export default function Navbar() {
  const [isShowing, setIsShowing] = useState(false)
  const [isShowing1, setIsShowing1] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsShowing(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  useEffect(() => {
    const html = document.querySelector('html')

    if (html) {
      if (isShowing) {
        html.style.overflowY = 'hidden'

        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        const modal = document.querySelector('#modal')

        if (!modal) return

        const firstFocusableElement = modal.querySelectorAll(focusableElements)[0] as HTMLElement
        const focusableContent = modal.querySelectorAll(focusableElements)
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement

        if (!firstFocusableElement || !lastFocusableElement) return

        document.addEventListener('keydown', function (e: KeyboardEvent) {
          if (e.keyCode === 27) {
            setIsShowing(false)
          }

          const isTabPressed = e.key === 'Tab' || e.keyCode === 9

          if (!isTabPressed) {
            return
          }

          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus()
              e.preventDefault()
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus()
              e.preventDefault()
            }
          }
        })

        firstFocusableElement.focus()
      } else {
        html.style.overflowY = 'visible'
      }
    }
  }, [isShowing])

  return (
    <div className="flex h-[70px] w-full flex-row items-center justify-between bg-primary px-20 text-white">
      <div className="basis-[40%] text-[28px] font-bold">UTOPIARA</div>
      <div className="flex w-[70%] basis-[60%] flex-row items-center justify-between">
        <Link
          href="/"
          className="hover:text-secondary">
          HOME
        </Link>
        <Link
          href="/market"
          className="hover:text-secondary">
          MARKET
        </Link>
        <Link
          href="/top"
          className="hover:text-secondary">
          TOP
        </Link>
        <Link
          href="/about"
          className="hover:text-secondary">
          ABOUT
        </Link>
        <Link
          href="/faq"
          className="hover:text-secondary">
          FAQ
        </Link>
        <Link
          href="/contact"
          className="hover:text-secondary">
          CONTACT
        </Link>

        <Button onClick={() => setIsShowing(true)} />
      </div>
      {isShowing && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            <Login
              setIsShowing={setIsShowing}
              setIsShowing1={setIsShowing1}
              isShowing={isShowing}
            />,
            document.body
          )
        : null}
      {isShowing1 && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            <Register
              isShowing={isShowing1}
              setIsShowing={setIsShowing1}
              setIsShowing1={setIsShowing}
            />,
            document.body
          )
        : null}
    </div>
  )
}
