'use client'

import Image, { StaticImageData } from 'next/image'
import { TouchEvent, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

type SlideshowProps = {
  slides: Slide[]
  className?: string
  hideTitle?: boolean
}

type Slide = {
  title: string
  image: StaticImageData
}

export const Slideshow = ({
  slides,
  className,
  hideTitle = false,
}: SlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((currentSlide + slides.length - 1) % slides.length)
  }

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStart(event.touches[0].clientX)
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const touchEnd = event.changedTouches[0].clientX
    if (touchStart - touchEnd > 50) {
      nextSlide()
    } else if (touchEnd - touchStart > 50) {
      prevSlide()
    }
  }

  const { title } = slides[currentSlide]

  return (
    <div
      className="flex flex-col items-center gap-4"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {!hideTitle && <h4 className="text-center">{title}</h4>}
      <div className={`relative ${className}`}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <div className="flex content-around items-center text-4xl">
        <a onClick={prevSlide} className="cursor-pointer hover:text-green-500">
          <MdKeyboardArrowLeft />
        </a>
        <div className="flex content-center gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`inline-block h-2 w-2 transform cursor-pointer rounded-full transition-all duration-500 ease-in-out ${index === currentSlide ? 'scale-125 bg-green-500' : 'scale-100 bg-slate-600'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <a onClick={nextSlide} className="cursor-pointer hover:text-green-500">
          <MdKeyboardArrowRight />
        </a>
      </div>
    </div>
  )
}
