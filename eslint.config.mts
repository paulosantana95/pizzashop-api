import { defineConfig } from 'eslint/config'
import drizzle from 'eslint-plugin-drizzle'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  {
    extends: compat.extends(
      '@rocketseat/eslint-config/node',
      'plugin:drizzle/all',
    ),

    plugins: {
      drizzle,
    },

    languageOptions: {
      parser: tsParser,
    },
  },
])
