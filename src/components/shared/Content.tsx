type ContentProps = {
  title: string
  description: string
  mediaContent: React.ReactNode
  section?: string
  isReversed?: boolean
}

export const Content = ({
  title,
  description,
  mediaContent,
  section,
  isReversed = false,
}: ContentProps) => {
  return (
    <div
      className={`mx-auto flex max-w-[930px] flex-col items-center justify-evenly px-8 sm:px-0 md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="my-8 flex flex-col items-start sm:w-[50%]">
        {section && (
          <h3 className="mb-1 text-sm uppercase tracking-widest">{section}</h3>
        )}
        <h2 className="mb-4 text-xl">{title}</h2>
        <p>{description}</p>
      </div>
      {mediaContent}
    </div>
  )
}
