//import '../styles/globals.css'
import Head from "next/head";
import '../styles/main.scss'
// Home
import '../styles/FirstSection.scss'
import '../styles/ProductCard.scss'
import '../styles/ProductsSection.scss'

import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined 
    ? require('bootstrap/dist/js/bootstrap') 
    : null
    //import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
  // <>
  //   <Head>
  //     <meta name="viewport" content="width=device-width, initial-scale=1" />
  //   </Head>
    <Component {...pageProps} />
  // </>
  )
}

export default MyApp
