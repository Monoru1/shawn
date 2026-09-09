import { Link as RouterLink, NavLink as RouterNavLink, type LinkProps, type NavLinkProps } from 'react-router-dom'
import { localizedPath } from '../i18n/routes'
import { useI18n } from '../i18n/I18nContext'

type LocalizedLinkProps = Omit<LinkProps, 'to'> & { to: string }
type LocalizedNavLinkProps = Omit<NavLinkProps, 'to'> & { to: string }

export function Link({ to, ...props }: LocalizedLinkProps) {
  const { lang } = useI18n()
  return <RouterLink to={localizedPath(to, lang)} {...props} />
}

export function NavLink({ to, ...props }: LocalizedNavLinkProps) {
  const { lang } = useI18n()
  return <RouterNavLink to={localizedPath(to, lang)} {...props} />
}
