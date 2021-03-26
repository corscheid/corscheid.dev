import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

interface Props {
  title: string
  children: React.ReactNode
}

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="Description"
          content="Hi, I'm Corey and I'm a Junior Full Stack Web Developer in the Saint Louis, Missouri area."
        />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}
