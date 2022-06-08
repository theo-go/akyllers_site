import '../styles/globals.css'
import React, { useState, Suspense  } from 'react';

import { PlasmicRootProvider } from "@plasmicapp/react-web";
// import OuterLayout from './outerlayout';
import "./images/audio-player-styles.css"

import AppContextProvider from '../components/AppContext';

// import LoadingScreen from '../components/LoadingScreen'


const OuterLayout = React.lazy(() => import('./outerlayout'));

function MyApp({ Component, pageProps }) {


  return (
    <AppContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
      <OuterLayout>
        <PlasmicRootProvider>
          <Component {...pageProps} />
        </PlasmicRootProvider>
      </OuterLayout>
      </Suspense>
    </AppContextProvider>
  );
}

export default MyApp
