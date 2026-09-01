import { useI18n } from '../i18n/I18nContext'
import { dictionary as d } from '../i18n/dictionary'

export const PREVIEW_MODE = true

export default function PreviewBanner() {
  const { t } = useI18n()
  if (!PREVIEW_MODE) return null
  return (
    <div className="preview-banner" role="note">
      <span className="preview-banner__tag">{t(d.preview.label)}</span>
      <span className="preview-banner__text">{t(d.preview.text)}</span>
    </div>
  )
}

