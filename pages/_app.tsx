import '../styles/globals.css'
import 'highlight.js/styles/default.css'
import '../styles/atom-one-dark.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
