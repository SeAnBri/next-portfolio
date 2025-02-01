export const formatTimePeriod = (startDate: Date, endDate?: Date): string => {
  const locale = 'de-DE'
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    year: 'numeric',
  }

  const formattedStartDate = startDate.toLocaleDateString(locale, options)
  const formattedEndDate = endDate
    ? endDate.toLocaleDateString(locale, options)
    : 'Heute'

  const end = endDate ?? new Date()
  const totalMonths =
    (end.getFullYear() - startDate.getFullYear()) * 12 +
    (end.getMonth() - startDate.getMonth())
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const durationParts = [
    ...(years > 0 ? [`${years} J.`] : []),
    ...(months > 0 ? [`${months} M.`] : []),
  ]

  const duration =
    durationParts.length > 0 ? `(${durationParts.join(', ')})` : ''

  return `${formattedStartDate} - ${formattedEndDate} ${duration}`
}
