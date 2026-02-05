import Reveal from '../components/Reveal'

export default function FullBleedImageSection({ height = 520, className = '' }) {
  return (
    <Reveal>
      <div 
        className={`fullBleed ${className}`} 
        style={{ '--fb-height': `${height}px` }}
      ></div>
    </Reveal>
  )
}
