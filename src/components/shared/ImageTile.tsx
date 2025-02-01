import Image, { StaticImageData } from 'next/image'

export type ImageTileProps = {
  image: StaticImageData
  title: string
  description: string
}

export const ImageTile = ({ image, title, description }: ImageTileProps) => {
  return (
    <div className="flex items-center gap-8">
      <Image src={image} alt={title} className="w-16" />
      <div>
        <h3 className="mb-1 text-sm uppercase tracking-widest">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
