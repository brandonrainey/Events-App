'use client'

import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import NavItems from './NavItems'

export default function MobileNav() {
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <nav className="md:hidden">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger className="align-middle">
          <Image
            src={'/assets/icons/menu.svg'}
            alt="Events App Logo"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image
            src={'/assets/images/logo.svg'}
            alt="Events App Logo"
            width={128}
            height={38}
          />
          <Separator className="border border-gray-50" />
          <NavItems setOpen={setSheetOpen}/>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
