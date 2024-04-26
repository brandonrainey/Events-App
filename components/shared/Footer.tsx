import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href={'/'}>
          <Image src={'/assets/images/title.webp'} alt='Events App Logo' width={128} height={38} />
        </Link>
        <p>2024 Events App. All Rights Reserved</p>
      </div>
    </footer>
  )
}
