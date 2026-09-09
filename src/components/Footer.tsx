import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'
import { CONTACT_EMAIL, INSTAGRAM_PERSONAL } from '../i18n/dictionary'

export default function Footer() {
  const { t } = useI18n()
  return <footer className="site-footer" id="contact">
    <div className="footer-contact"><div><h2>{t(e.footerLabel)}</h2><a className="contact-address" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div><div className="footer-contact__actions"><Link to="/contact">{t({ fr: 'Toutes les coordonnées', en: 'All contact details' })} ↗</Link><a href={INSTAGRAM_PERSONAL} target="_blank" rel="noreferrer">Instagram ↗</a></div></div>
    <div className="footer-colophon micro"><span>© {new Date().getFullYear()} Shawn N. Hounkpatin</span><span>{t(e.role)}</span><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>{t(e.backTop)} ↑</button></div>
  </footer>
}
