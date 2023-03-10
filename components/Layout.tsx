import Head from 'next/head'
import { META_DESCRIPTION } from '../lib/constants'
import Footer from './Footer'
import Header from './Header'

export default function Layout({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
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
