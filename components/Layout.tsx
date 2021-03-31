import Footer from './Footer'
import Head from 'next/head'
import Header from './Header'
import { LayoutProps } from '../interfaces'
import { META_DESCRIPTION } from '../lib/constants'

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content={META_DESCRIPTION} />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}
