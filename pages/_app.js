import '../styles/globals.css'
import React, { useState, useEffect } from 'react'

import { PlasmicRootProvider } from "@plasmicapp/react-web";
// import OuterLayout from './outerlayout';
import "./images/audio-player-styles.css"

import OuterLayout from "./outerlayout";

import LoadingScreen from '../components/LoadingScreen'




function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    // <>
    //   {loading === false ? (

        <OuterLayout>
          <PlasmicRootProvider className={"fade-in"}>
            <Component {...pageProps} />
          </PlasmicRootProvider>
        </OuterLayout>
  )
      // ) : (
      //   <LoadingScreen className={"fade-in"} />
      // )}
  //   </>

  // );
}

export default MyApp
