import { PropsWithChildren } from 'react'

type BadgeSize = 'small' | 'medium' | 'large'

type BadgeProps = PropsWithChildren<{
  icon?: React.ReactNode
  badgeSize?: BadgeSize
}> &
  React.HTMLProps<HTMLDivElement>

const badgeSizeClasses: Record<BadgeSize, string> = {
  small: 'text-xs',
  medium: 'text-sm',
  large: 'text-base',
}

export const Badge = ({
  children,
  icon,
  badgeSize = 'medium',
  ...props
}: BadgeProps) => {
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full bg-slate-800 px-2 py-1 text-slate-300 transition-all hover:scale-[1.02] hover:bg-slate-700 ${badgeSizeClasses[badgeSize]}`}
      {...props}
    >
      {icon && icon}
      {children}
    </div>
  )
}
