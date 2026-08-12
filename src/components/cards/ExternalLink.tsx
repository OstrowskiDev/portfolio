import { ReactNode } from 'react'

interface ExternalLinkProps {
  href: string
  text: string
  icon: ReactNode
  className?: string
}

export default function ExternalLink({
  href,
  text,
  icon,
  className = '',
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      className={`relative flex flex-col items-center 
        w-[90px] 
        h-[40px] tall:h-[76px] 
        text-primary-950 
        hover:cursor-pointer 
        hover:text-accent-700 
        transition-colors duration-200`}
    >
      <div
        className={`
        flex justify-center items-center        
        w-[40px] tall:w-[50px] 
        h-[40px] tall:h-[50px]
        ${className}`}
      >
        {icon}
      </div>
      <p className="link-text text-sm mt-auto">{text}</p>
    </a>
  )
}
