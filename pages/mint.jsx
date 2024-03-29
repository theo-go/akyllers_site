// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import { PlasmicMint } from "../components/plasmic/akyllers/PlasmicMint";
import { useRouter } from "next/router";
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import ContentComponent from "../mint/ContentComponent";
import Image from "next/image";

const getLibrary = (provider) => {
  const library = new Web3Provider(provider, 'any')
  library.pollingInterval = 15000
  return library
}

function Mint() {
  // Use PlasmicMint to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicMint are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicMint is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <ph.PageParamsProvider params={useRouter().query} query={useRouter().query}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <div className="ag-sparks">
          <img src="/plasmic/akyllers/images/logopng.png" className="mintLogo" />
        </div>
        <ContentComponent />
      </Web3ReactProvider>
    </ph.PageParamsProvider>
  );
}

export default Mint;
