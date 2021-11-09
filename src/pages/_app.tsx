import type { AppProps } from 'next/app'
import createEmotionCache from '../utils/createEmotionCache'
import { ThemeProvider } from '@mui/material/styles'
import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { theme } from '../theme'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Jobs Frontend Challenge</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
