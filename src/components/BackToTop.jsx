import { useEffect, useState } from 'react'
import { ArrowUpIcon } from './Icons.jsx'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#home"
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      aria-label="Back to top"
    >
      <ArrowUpIcon />
    </a>
  )
}
