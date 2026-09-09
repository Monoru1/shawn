import { useState } from 'react'
import { Link } from './LocalizedLink'
import { useI18n } from '../i18n/I18nContext'
import { dictionary as d } from '../i18n/dictionary'
import { works, pathFor, type Medium } from '../data/works'

type Filter = Medium | 'all'

export default function WorkIndex() {
  const { t } = useI18n()
  const [filter, setFilter] = useState<Filter>('all')
  const rows = works.filter(w => filter === 'all' || w.medium === filter)

  const buttons: { key: Filter; label: string }[] = [
    { key: 'all', label: t(d.index.all) },
    { key: 'film', label: t(d.medium.film) },
    { key: 'photo', label: t(d.medium.photo) },
  ]

  return (
    <section className="index" id="index">
      <div className="index__head">
        <p className="eyebrow">{t(d.index.eyebrow)}</p>
        <h2 className="index__title">{t(d.index.title)}</h2>
        <div className="index__filters" role="group" aria-label="Filtres">
          {buttons.map(b => (
            <button
              key={b.key}
              onClick={() => setFilter(b.key)}
              className={filter === b.key ? 'is-on' : ''}
              aria-pressed={filter === b.key}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      <div className="index__table" role="table">
        <div className="index__row index__row--head" role="row">
          <span role="columnheader">{t(d.index.colYear)}</span>
          <span role="columnheader">{t(d.index.colTitle)}</span>
          <span role="columnheader">{t(d.index.colMedium)}</span>
          <span role="columnheader">{t(d.index.colCategory)}</span>
          <span role="columnheader">{t(d.index.colLocation)}</span>
        </div>

        {rows.map(w => (
          <Link key={w.slug} to={pathFor(w)} className="index__row" role="row" data-rise>
            <span className="index__year">{w.year}</span>
            <span className="index__name">{t(w.title)}</span>
            <span className={`index__medium index__medium--${w.medium}`}>{t(d.medium[w.medium])}</span>
            <span className="index__cat">{t(w.category)}</span>
            <span className="index__loc">
              {t(w.location)}
            </span>
            <img className="index__peek" src={w.cover.src} alt="" loading="lazy" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  )
}
