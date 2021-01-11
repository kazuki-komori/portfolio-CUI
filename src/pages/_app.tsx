import '../../styles/globals.css'
import {AppProps} from "next/app"
import Router from 'next/router'

import * as gtag from '../../lib/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
