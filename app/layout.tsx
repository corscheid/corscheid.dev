import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { DOMAIN, META_DESCRIPTION } from '@/lib/constants'
import '@/styles/atom-one-dark.css'
import '@/styles/globals.css'

export const metadata = {
  title: DOMAIN,
  description: META_DESCRIPTION
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
