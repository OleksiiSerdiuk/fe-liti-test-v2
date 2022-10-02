export default function (): any {
  return {
    // legacy: false,
    locales: [{ code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' }],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'src/shared/locales/',
    detectBrowserLanguage: true,
  }
}
