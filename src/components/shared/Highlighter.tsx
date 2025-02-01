import { Badge } from './Badge'
import { FaDartLang, FaFlutter, FaJava, FaReact } from 'react-icons/fa6'
import { TbSql } from 'react-icons/tb'
import {
  SiGoogleanalytics,
  SiGooglecloud,
  SiNextdotjs,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si'

type HighlighterProps = {
  text: string
}

type HighlightStyle = {
  icon?: React.ReactNode
}

const highlights: { [key: string]: HighlightStyle } = {
  Dart: { icon: <FaDartLang /> },
  Flutter: { icon: <FaFlutter /> },
  GA4: { icon: <SiGoogleanalytics /> },
  GCP: { icon: <SiGooglecloud /> },
  Java: { icon: <FaJava /> },
  'Next.js': { icon: <SiNextdotjs /> },
  React: { icon: <FaReact /> },
  SQL: { icon: <TbSql /> },
  Terraform: { icon: <SiTerraform /> },
  TypeScript: { icon: <SiTypescript /> },
}

export const Highlighter = ({ text }: HighlighterProps) => {
  const regex = /\[highlight:(.*?)\]/g
  const parts = text.split(regex)

  return (
    <>
      {parts.map((part, index) => {
        const highlight = highlights[part]
        return highlight ? (
          <Badge key={index} icon={highlight.icon} badgeSize="small">
            {part}
          </Badge>
        ) : (
          part
        )
      })}
    </>
  )
}
