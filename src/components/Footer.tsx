import { useI18n } from '../i18n/I18nContext'
import { dictionary as d, CONTACT_EMAIL, INSTAGRAM_PERSONAL, INSTAGRAM_STUDIO } from '../i18n/dictionary'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="footer" id="contact">
      <h2 className="footer__title">{t(d.footer.title)}</h2>

      <div className="footer__grid">
        <a className="footer__mail" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        <div className="footer__social">
          <a href={INSTAGRAM_PERSONAL} target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href={INSTAGRAM_STUDIO} target="_blank" rel="noreferrer">Kerawa ↗</a>
        </div>
      </div>

      <div className="footer__base">
        <span>© {new Date().getFullYear()} Shawn N. Hounkpatin — {t(d.footer.rights)}</span>
        <span className="footer__note">{t(d.footer.credit)}</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {t(d.footer.top)} ↑
        </button>
      </div>
    </footer>
  )
}

