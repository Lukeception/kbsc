import '../styles/globals.css'

import { Inter } from '@next/font/google'
const inter = Inter({
  subsets: ['latin'],
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"]
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
)}

export default MyApp
