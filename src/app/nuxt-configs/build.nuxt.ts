import { NuxtOptionsBuild } from '@nuxt/types/config/build'
import { env } from '../../shared/config'

// Build Configuration: https://go.nuxtjs.dev/config-build
export default function (): NuxtOptionsBuild & any {
  return {
    analyze: false,
    extractCSS: false,
    loaders: {
      cssModules: {
        modules: {
          localIdentName: env.IS_DEV
            ? '[local]_[hash:base64:2]'
            : '[hash:base64:4]',
        },
      },
    },
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
    transpile: ['vee-validate/dist/rules'],
  }
}
