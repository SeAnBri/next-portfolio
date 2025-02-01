import Image from 'next/image'
import profilePic from '@/app/public/assets/me.jpg'
import { HeaderSocials } from './HeaderSocials'

export const Header = () => {
  return (
    <header className="flex h-[90vh] lg:h-[100vh]">
      <div className="m-auto flex w-11/12 flex-col justify-center gap-8 md:w-10/12 lg:w-3/4 lg:flex-row lg:gap-16">
        <Image
          src={profilePic}
          alt="me"
          className="h-[16rem] w-[16rem] self-center rounded-full sm:h-[20rem] sm:w-[20rem] lg:h-[25rem] lg:w-[25rem]"
        />
        <div className="flex max-w-lg flex-col items-center justify-center gap-5 self-center text-center lg:items-start lg:text-start">
          <h1 className="hyphens-none text-3xl leading-[2rem] sm:text-4xl sm:leading-[2.5rem] md:text-5xl md:leading-[3.5rem]">
            <span className="animate-text bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text font-black text-transparent">
              Hallo,
            </span>{' '}
            ich bin <br /> Sebastian Britner.
          </h1>
          <p>
            Nach meinem Informatikstudium und dem Trainee-Programm bei BAUHAUS
            arbeite ich nun als begeisterter Frontend-Softwareentwickler.
          </p>
          <HeaderSocials />
        </div>
      </div>
    </header>
  )
}
