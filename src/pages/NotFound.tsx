import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { dictionary as d } from '../i18n/dictionary'
import Seo from '../components/Seo'

export default function NotFound() {
  const { t } = useI18n()
  return (
    <main className="empty">
      <Seo title="404" description={t(d.notFound.text)} />
      <h1>{t(d.notFound.title)}</h1>
      <p>{t(d.notFound.text)}</p>
      <Link to="/" className="link-underline">{t(d.notFound.back)}</Link>
    </main>
  )
}

