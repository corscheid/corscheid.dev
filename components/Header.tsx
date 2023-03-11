'use client'

import { NAME, TAGLINE } from '../utils/constants'

import Image from 'next/image'
import Navigation from './Navigation'

export default function Header() {
  const name = NAME
  const tagline = TAGLINE
  return (
    <header className="flex flex-col justify-center items-center sm:flex-row">
      {/*
        preserve aspect ratio while still using next/image
        code adapted from GitHub issue comment by @7ruth
        https://github.com/vercel/next.js/issues/18497#issuecomment-762397599
      */}
      <div className="h-24 w-24">
        <div className="relative max-w-full h-full">
          <Image
            className="p-0 my-4 mx-0 self-center rounded-full"
            src={'/images/profile.jpg'}
            alt={name}
            width={96}
            height={96}
            loading="eager"
            priority
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col mt-8 ml-8 pl-0 leading-8 justify-center items-center sm:mt-4 sm:pl-0 sm:justify-start sm:items-start">
        <h1 className="mb-0 font-sans font-bold">{name}</h1>
        <small>{tagline}</small>
        <Navigation />
      </div>
    </header>
  )
}
