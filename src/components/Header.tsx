import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { dictionary as d, CONTACT_EMAIL } from '../i18n/dictionary'

const links = [
  { to: '/films', label: d.nav.films },
  { to: '/photographie', label: d.nav.photography },
  { to: '/kerawa', label: d.nav.kerawa },
]

export default function Header() {
  const { t, lang, toggle } = useI18n()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="header">
        <Link to="/" className="header__mark">
          <strong>Shawn N. Hounkpatin</strong>
          <span>{t(d.hero.role)}</span>
        </Link>

        <nav className="header__nav" aria-label="Navigation principale">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'is-active' : '')}>
              {t(l.label)}
            </NavLink>
          ))}
          <a href={`mailto:${CONTACT_EMAIL}`}>{t(d.nav.contact)}</a>
        </nav>

        <div className="header__tools">
          <button className="lang-switch" onClick={toggle} aria-label="Change language">
            <span className={lang === 'fr' ? 'is-on' : ''}>FR</span>
            <i aria-hidden="true">/</i>
            <span className={lang === 'en' ? 'is-on' : ''}>EN</span>
          </button>
          <button
            className="header__burger"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? t(d.nav.close) : t(d.nav.menu)}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="mobile-nav"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {links.map((l, i) => (
              <NavLink key={l.to} to={l.to}>
                <small>0{i + 1}</small>
                {t(l.label)}
              </NavLink>
            ))}
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <small>04</small>
              {t(d.nav.contact)}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

