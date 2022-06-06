
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { OuterLayout } from './outerlayout';
import "./images/audio-player-styles.css"

function MyApp({ Component, pageProps }) {
  return (
    <OuterLayout>
    <PlasmicRootProvider>
      <Component {...pageProps} />
    </PlasmicRootProvider>
    </OuterLayout>
  );
}

export default MyApp
  