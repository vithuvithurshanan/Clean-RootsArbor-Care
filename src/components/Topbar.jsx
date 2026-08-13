import { PhoneIcon, MailIcon, PinIcon } from './Icons.jsx'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__item">
          <PhoneIcon />
          <a href="tel:+17164513377">(716) 451-3377</a>
        </div>
        <div className="topbar__item">
          <PinIcon />
          <span>1260 Clinton St, Buffalo, NY 14206</span>
        </div>
        <div className="topbar__item topbar__hours">
          Mon–Sat: 7:00 AM – 6:00 PM &nbsp;•&nbsp; 24/7 Emergency Service
        </div>
      </div>
    </div>
  )
}
