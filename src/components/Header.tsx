import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link, NavLink } from './LocalizedLink'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'

export default function Header() {
  const { t, lang, toggle } = useI18n()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuButton = useRef<HTMLButtonElement>(null)
  useEffect(() => setOpen(false), [location.pathname])
  const links = [
    { to: '/photographie', label: e.photography },
    { to: '/films', label: e.cinema },
    { to: '/archive', label: { fr: 'Index', en: 'Index' } },
    { to: '/shawn', label: { fr: 'Shawn', en: 'Shawn' } },
  ]
  return <>
    <a className="skip-link" href="#page-content">{t(e.skip)}</a>
    <header className="site-header" onKeyDown={event => {
      if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus() }
    }}>
      <Link to="/" className="site-mark" aria-label="Shawn N. Hounkpatin">Shawn<span> N. Hounkpatin</span></Link>
      <nav id="site-navigation" className={`site-navigation${open ? ' is-open' : ''}`} aria-label={t(e.navigation)}>
        {links.map(link => <NavLink to={link.to} key={link.to}>{t(link.label)}</NavLink>)}
        <NavLink to="/contact">{t(e.contact)}</NavLink>
      </nav>
      <div className="site-tools">
        <button type="button" className="site-language" onClick={toggle} aria-label={t(e.changeLanguage)}><span className={lang === 'fr' ? 'selected' : ''}>FR</span><span aria-hidden="true">/</span><span className={lang === 'en' ? 'selected' : ''}>EN</span></button>
        <button ref={menuButton} type="button" className="site-menu" aria-expanded={open} aria-controls="site-navigation" aria-label={t(open ? e.closeMenu : e.menu)} onClick={() => setOpen(value => !value)}>{open ? '−' : '+'}</button>
      </div>
    </header>
  </>
}
