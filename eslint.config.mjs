import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

import prettierPlugin from 'eslint-plugin-prettier'
import importPlugin from 'eslint-plugin-import'

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': ['error'],
      'import/order': ['warn', { groups: [['builtin', 'external', 'internal']] }],
    },
  },
]
