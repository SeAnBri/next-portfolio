'use client'

import React, { useState } from 'react'
import { Job } from '../types'
import { Highlighter } from '../shared/Highlighter'
import { formatTimePeriod } from '@/helpers/date.helper'

type JobItemProps = {
  job: Job
}

export const JobItem = ({
  job: { title, startDate, endDate, location, employmentType, description },
}: JobItemProps) => {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  const timePeriod = startDate && formatTimePeriod(startDate, endDate)
  const subtitleParts = [timePeriod, location, employmentType].filter(Boolean)
  const subtitle = subtitleParts.map((part, index) => (
    <React.Fragment key={index}>
      {index > 0 && <span className="px-2 font-bold">•</span>}
      <span className={index === 0 ? 'font-bold' : ''}>{part}</span>
    </React.Fragment>
  ))

  return (
    <div className="flex flex-col gap-1">
      <span className="font-bold">{title}</span>
      <small className="text-slate-500">{subtitle}</small>
      {description && (
        <div className="flex flex-col items-start gap-2">
          <div
            className={`relative text-slate-500 ${showMore ? '' : 'max-h-20 overflow-hidden'}`}
          >
            <Highlighter text={description} />
            {!showMore && (
              <div className="pointer-events-none absolute bottom-0 left-0 h-7 w-full bg-gradient-to-t from-slate-900 to-transparent" />
            )}
          </div>
          <button
            onClick={toggleShowMore}
            className="align-start rounded-3xl border-2 border-slate-500 px-2 py-1 text-xs text-slate-500 hover:border-slate-400 hover:text-slate-400"
          >
            {showMore ? 'Weniger' : 'Mehr'}
          </button>
        </div>
      )}
    </div>
  )
}
