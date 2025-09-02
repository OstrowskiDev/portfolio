interface TechStackItemProps {
  text: string
  ico?: string
  hasIco?: boolean
}

export default function TechStackItem({
  text,
  ico,
  hasIco,
}: TechStackItemProps) {
  const icoName = ico ?? text.toLowerCase()

  return (
    <div className="tech-stack-item flex items-center h-[17px] mr-2">
      {hasIco && (
        <div
          className="item-ico mr-1 h-[16px] w-[16px] bg-primary-400"
          style={{
            maskImage: `url(/icons/${icoName}.svg)`,
            WebkitMaskImage: `url(/icons/${icoName}.svg)`,
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
          }}
        />
      )}
      <span className="item-text text-primary-500 text-sm">{text}</span>
    </div>
  )
}
