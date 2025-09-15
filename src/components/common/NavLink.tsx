'use client'

interface NavLinkProps {
  name: string
  targetId: string
  className?: string
  activeId?: string
  callback?: () => void
}

export function NavLink({
  name,
  targetId,
  className = '',
  activeId,
  callback,
}: NavLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()

    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    if (callback) callback()
  }

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={`nav-link w-[120px] text-2xl font-medium text-center hover:text-accent-500 cursor-pointer ${className} ${targetId === activeId && name !== 'Intro' && 'text-accent-700'}`}
    >
      {name}
    </a>
  )
}
