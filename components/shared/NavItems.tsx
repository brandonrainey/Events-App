'use client'

import React from 'react'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemsProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavItems({ setOpen }: NavItemsProps) {
  const pathname = usePathname()

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route

        return (
          <li
            className={`${
              isActive && 'text-primary-500'
            } flex-center sm:p-medium-16 p-medium-20 whitespace-nowrap`}
            key={link.label}
          >
            <Link href={link.route} onClick={() => setOpen && setOpen(false)}>
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
