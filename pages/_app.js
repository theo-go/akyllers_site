import '../styles/globals.css'
import React from 'react';

import { PlasmicRootProvider } from "@plasmicapp/react-web";
// import OuterLayout from './outerlayout';
import "./images/audio-player-styles.css"

import AppContextProvider from '../components/AppContext';
import OuterLayout from "./outerlayout";

// import LoadingScreen from '../components/LoadingScreen'




function MyApp({ Component, pageProps }) {


  return (
    <AppContextProvider>
      <OuterLayout>
        <PlasmicRootProvider>
          <Component {...pageProps} />
        </PlasmicRootProvider>
      </OuterLayout>
    </AppContextProvider>
  );
}

export default MyApp
