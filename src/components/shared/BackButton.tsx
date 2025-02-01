import Link from 'next/link'
import React from 'react'
import { MdArrowBack } from 'react-icons/md'

type BackButtonProps = {
  href: string
}

export const BackButton = ({ href }: BackButtonProps) => {
  return (
    <Link
      href={href}
      className="flex size-[60px] items-center justify-center rounded-full bg-[#202020] text-2xl transition-all hover:scale-95 hover:text-green-500"
    >
      <MdArrowBack />
    </Link>
  )
}
