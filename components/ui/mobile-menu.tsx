'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import clsx from 'clsx'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      if (
        !isOpen ||
        menuRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return
      }

      closeMenu()
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, closeMenu])

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={triggerRef}
        className={clsx('hamburger', {
          active: isOpen,
        })}
        aria-controls="mobile-nav"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Menu</span>

        <svg
          className="h-6 w-6 fill-current text-gray-900"
          viewBox="0 0 24 24"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/* Mobile Navigation */}
      <div ref={menuRef}>
        <Transition
          show={isOpen}
          as="nav"
          id="mobile-nav"
          className="absolute left-0 top-full z-20 h-screen w-full overflow-scroll bg-white pb-16"
          enter="transition duration-200 ease-out transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition duration-200 ease-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link
                href="/signin"
                className="flex w-full justify-center py-2 font-medium text-gray-600 hover:text-gray-900"
                onClick={closeMenu}
              >
                Sign in
              </Link>
            </li>

            <li>
              <Link
                href="/signup"
                className="btn-sm my-2 w-full bg-gray-900 text-gray-200 hover:bg-gray-800"
                onClick={closeMenu}
              >
                <span>Sign up</span>

                <svg
                  className="ml-2 mr-1 h-3 w-3 shrink-0 fill-current text-gray-400"
                  viewBox="0 0 12 12"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}
