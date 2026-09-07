import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'
import { CONTACT_EMAIL, INSTAGRAM_PERSONAL, INSTAGRAM_STUDIO } from '../i18n/dictionary'

export default function Footer() {
  const { t } = useI18n()
  return <footer className="site-footer" id="contact">
    <p className="micro">{t(e.footerLabel)}</p>
    <div className="footer-invitation"><h2>{t(e.footerTitle)}</h2><span aria-hidden="true">↗</span></div>
    <div className="footer-contact"><div><span className="contact-address">{CONTACT_EMAIL}</span><p className="micro">{t(e.dummyEmail)}</p></div><div className="footer-social"><a href={INSTAGRAM_PERSONAL} target="_blank" rel="noreferrer">Instagram ↗</a><a href={INSTAGRAM_STUDIO} target="_blank" rel="noreferrer">Kerawa Studio ↗</a></div></div>
    <div className="footer-colophon micro"><span>© {new Date().getFullYear()} Shawn N. Hounkpatin</span><span>{t(e.location)}</span><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>{t(e.backTop)} ↑</button></div>
  </footer>
}
