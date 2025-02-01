import { GITHUB, LINKED_IN } from '@/fixtures/socials'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className="mt-2 flex gap-4 text-2xl">
      <Link
        href={LINKED_IN}
        target="_blank"
        prefetch={false}
        className="text-white transition-all hover:text-green-500"
      >
        <BsLinkedin />
      </Link>
      <Link
        href={GITHUB}
        className="text-white transition-all hover:text-green-500"
        target="_blank"
        prefetch={false}
      >
        <BsGithub />
      </Link>
    </div>
  )
}
