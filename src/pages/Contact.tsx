import Seo from '../components/Seo'
import { CONTACT_EMAIL, INSTAGRAM_PERSONAL, INSTAGRAM_STUDIO } from '../i18n/dictionary'
import { useI18n } from '../i18n/I18nContext'

const contactLinks = [
  { label: { fr: 'Écrire à Shawn', en: 'Email Shawn' }, value: 'shawn@kerawastudio.com', href: `mailto:${CONTACT_EMAIL}`, note: { fr: 'Commandes, collaborations, presse et projets de film.', en: 'Commissions, collaborations, press and film projects.' } },
  { label: { fr: 'Instagram — Shawn', en: 'Instagram — Shawn' }, value: '@shawnpicture__', href: INSTAGRAM_PERSONAL, note: { fr: 'Photographies, films et travaux en cours.', en: 'Photography, films and works in progress.' } },
  { label: { fr: 'Kerawa Studio', en: 'Kerawa Studio' }, value: '@kerawa.space', href: INSTAGRAM_STUDIO, note: { fr: 'Production et promotion du cinéma africain.', en: 'African cinema production and promotion.' } },
] as const

export default function Contact() {
  const { t } = useI18n()
  const description = t({ fr: 'Contacter Shawn N. Hounkpatin pour une commande, une collaboration, une projection ou un projet porté par Kerawa Studio.', en: 'Contact Shawn N. Hounkpatin for a commission, collaboration, screening or a project with Kerawa Studio.' })

  return <main id="main-content" className="contact-page">
    <Seo title={t({ fr: 'Contact', en: 'Contact' })} description={description} />
    <header className="contact-page__header">
      <span className="archive-label">Shawn N. Hounkpatin / {t({ fr: 'Cotonou, Bénin', en: 'Cotonou, Benin' })}</span>
      <h1>{t({ fr: 'Parlons d’une image, d’un film ou d’une idée.', en: 'Let’s talk about an image, a film or an idea.' })}</h1>
      <p>{t({ fr: 'Shawn travaille sur des commandes photographiques, des films, des collaborations artistiques et des projets produits par Kerawa Studio. Écris-lui directement, ou suis les travaux en cours sur Instagram.', en: 'Shawn works on photographic commissions, films, artistic collaborations and projects produced through Kerawa Studio. Write to him directly, or follow the work in progress on Instagram.' })}</p>
    </header>

    <section className="contact-page__links" aria-label={t({ fr: 'Moyens de contact', en: 'Ways to get in touch' })}>
      {contactLinks.map((item, index) => <a key={item.href} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
        <span className="archive-label">0{index + 1} / {t(item.label)}</span>
        <strong>{item.value}</strong>
        <p>{t(item.note)}</p>
        <i aria-hidden="true">↗</i>
      </a>)}
    </section>

    <p className="contact-page__foot archive-label">{t({ fr: 'Réponse par email · Français / English', en: 'Reply by email · Français / English' })}</p>
  </main>
}
