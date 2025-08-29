'use client'

interface NavLinkProps {
  name: string
  targetId: string
  className?: string
}

export function NavLink({ name, targetId, className = '' }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={`nav-link w-[120px] text-2xl font-semibold text-center hover:text-accent-500 cursor-pointer ${className}`}
    >
      {name}
    </a>
  )
}
