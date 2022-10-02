const pkg = require('../../../package.json')

export const env = Object.freeze({
  PROJECT_NAME: pkg.name,
  VERSION: pkg.version || 0,
  NODE_ENV: process.env.NODE_ENV,
  IS_DEV: process.env.NODE_ENV === 'development',
  IS_STAGE: process.env.NODE_ENV === 'staging',
  IS_PROD: process.env.NODE_ENV === 'production',
})
