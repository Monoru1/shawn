import type { ArtworkAsset } from '../data/media'
import { useI18n } from '../i18n/I18nContext'

type Props = {
  asset: ArtworkAsset
  alt?: string
  eager?: boolean
  sizes?: string
  className?: string
}

export default function ArtworkImage({ asset, alt, eager = false, sizes = '100vw', className }: Props) {
  const { t } = useI18n()

  return <img
    className={className}
    src={asset.src}
    srcSet={asset.srcSet}
    sizes={asset.srcSet ? sizes : undefined}
    width={asset.width}
    height={asset.height}
    alt={alt ?? t(asset.alt)}
    loading={eager ? 'eager' : 'lazy'}
    fetchPriority={eager ? 'high' : 'auto'}
    decoding="async"
  />
}
