import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider attribute='class'><Layout><Component {...pageProps} /></Layout></ThemeProvider>
}
