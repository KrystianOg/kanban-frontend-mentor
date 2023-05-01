import path from 'path'
/**
 * @type {import('next-i18next').UserConfig}
 */
const config = {
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
  },
  localePath: typeof window === 'undefined' ?
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    path.resolve('./public/locales') :
    '/locales',
}

export default config

// further reading: https://github.com/i18next/next-i18next
