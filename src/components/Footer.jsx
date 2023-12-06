import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-evenly py-[8rem] md:py-[40px]'>
      <span className='text-[3.85rem] md:text-[18px] gilroy'>DrJetnik</span>
      <Link href={'https://github.com/ksunwy/krasnodar'} className="relative w-[18.66rem] h-[18.66rem] md:w-[108px] md:h-[108px]
        hover:opacity-80 transition-all duration-300">
        <Image src="/github.svg" alt='github' fill />
      </Link>
      <span className='text-[3.85rem] md:text-[18px] gilroy'>ksunnwy</span>
    </div>
  )
}

export default Footer