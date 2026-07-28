import { ReactNode } from 'react'

interface ExtrasLinkProps {
  href: string
  icon: ReactNode
  className?: string
  colorClassName?: string
}

export default function ExtrasLink({
  href,
  icon,
  className = '',
  colorClassName = 'text-primary-950 hover:text-accent-700',
}: ExtrasLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      className={`relative flex flex-col items-center hover:cursor-pointer transition-colors duration-200 ${colorClassName} ${className}`}
    >
      {icon}
    </a>
  )
}
