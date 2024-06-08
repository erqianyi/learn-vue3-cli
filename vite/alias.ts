import path from 'path'
import { AliasOptions } from 'vite'
const alias = {
  '@': path.resolve('./src')
} as AliasOptions

export default alias
