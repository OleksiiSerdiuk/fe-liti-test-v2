import { env } from '../../shared/config'

export default function () {
  return {
    projectName: env.PROJECT_NAME,
    version: env.VERSION,
    isDev: env.IS_DEV,
  }
}
