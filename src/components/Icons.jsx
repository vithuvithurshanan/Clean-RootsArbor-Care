export function PhoneIcon({ className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  )
}

export function MailIcon({ className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M4 4h16v16H4z" fill="none" />
      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
    </svg>
  )
}

export function PinIcon({ className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M12 22s7-7.4 7-13a7 7 0 1 0-14 0c0 5.6 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

export function ClockIcon({ className = 'icon icon--stroke0' }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  )
}

export function CheckIcon({ className = 'icon icon--stroke0' }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function TreeMark() {
  return (
    <svg viewBox="0 0 48 48">
      <path d="M24 4C15 4 8 12 8 21c0 6.5 4 11 8 13.5V44h4V30h4v14h4V34.5c4-2.5 8-7 8-13.5C32 12 25 4 24 4z" />
    </svg>
  )
}

export function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )
}
