// import Footer from '@/components/Footer'
// import Header from '@/components/Header'
import { DOMAIN, META_DESCRIPTION } from '@/utils/constants'
import { ThemeProvider } from '@/utils/theme-context'
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
    <ThemeProvider>
      <html lang="en">
        <body>
          {/* <Header /> */}
          <main className="container">{children}</main>
          {/* <Footer /> */}
        </body>
      </html>
    </ThemeProvider>
  )
}
