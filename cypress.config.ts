import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 4000,
  },
})
