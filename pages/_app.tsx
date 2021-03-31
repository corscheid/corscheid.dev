import 'highlight.js/styles/default.css'
import type { AppProps } from 'next/app'
import '../styles/atom-one-dark.css'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
