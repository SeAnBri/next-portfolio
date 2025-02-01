import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { GITHUB, LINKED_IN } from '@/fixtures/socials'

export const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 py-12 text-center">
      <div className="mb-10 flex justify-center gap-8">
        <Link href={LINKED_IN} target="_blank" prefetch={false}>
          <BsLinkedin className="text-2xl transition-all hover:text-green-500" />
        </Link>
        <Link href={GITHUB} target="_blank" prefetch={false}>
          <BsGithub className="text-2xl transition-all hover:text-green-500" />
        </Link>
      </div>
      <div className="text-base text-slate-500">
        <small>
          Copyright &copy; {new Date().getFullYear()} Sebastian Britner
        </small>
      </div>
    </footer>
  )
}
