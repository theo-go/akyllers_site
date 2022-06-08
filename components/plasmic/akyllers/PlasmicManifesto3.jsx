// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cELQgcBTCpXC8URn4hyouo
// Component: 9_TSPIaD38m
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import NavbarCustom from "../../NavbarCustom"; // plasmic-import: 5sPSsjDnyE/component
import FullText from "../../FullText"; // plasmic-import: JxzItQHtdP/component
import RoadmapBox from "../../RoadmapBox"; // plasmic-import: DlZHxOtpOm/component
import TrueFooter from "../../TrueFooter"; // plasmic-import: 1RTRAsLRW5N/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_akyllers.module.css"; // plasmic-import: cELQgcBTCpXC8URn4hyouo/projectcss
import sty from "./PlasmicManifesto3.module.css"; // plasmic-import: 9_TSPIaD38m/css

export const PlasmicManifesto3__VariantProps = new Array();

export const PlasmicManifesto3__ArgProps = new Array();

export const defaultManifesto3__Args = {};

function PlasmicManifesto3__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultManifesto3__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Roadmap"}</title>
        <meta key="og:title" property="og:title" content={"Roadmap"} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <NavbarCustom
            data-plasmic-name={"navbarCustom"}
            data-plasmic-override={overrides.navbarCustom}
            className={classNames("__wab_instance", sty.navbarCustom)}
          />

          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column__hdGgl)}>
              <div
                data-plasmic-name={"descCol"}
                data-plasmic-override={overrides.descCol}
                className={classNames(projectcss.all, sty.descCol)}
              >
                <FullText
                  data-plasmic-name={"fullText"}
                  data-plasmic-override={overrides.fullText}
                  className={classNames("__wab_instance", sty.fullText)}
                  description={
                    "We are the Yuppies of the Metaverse. We’re riding on the thin line that separates the past from the future. We are a community of people who are bold yet kind, generous yet fair, Peaceful yet rebels, building what Woodstock was meant for.\n\nVISION:\nA SIMPLE YET COMPLEX VISION DRIVES US – DISRUPT ENTREPRENEURSHIP BY CREATING THE LARGEST DECENTRALIZED BRAND FOR THE METAVERSE, BUILT AND OWNED BY THE COMMUNITY.\n\nVALUES:\nCOMMUNITY FIRST: BUILT BY AKYLLERS TO THE WORLD. #1 WILL ALWAYS BE AKYLLERS & #2 AKYLLERS & #3, WELL…. YOU KNOW.\n\nTRUST THE PROCESS:\nTIME WILL TELL WHAT WE ARE AIMING TO BUILD. IT IS AN EFFORT BY MANY TO THE BENEFIT OF ALL. DECENTRALIZED DOES NOT MEAN THERE IS NO LEADERSHIP, AND THE CORE TEAM WILL PROVIDE THE GUARD RAILS AND TOOLS FOR ALL SEEDS TO GROW TOGETHER.\n\nCREATIVE FIRST:\nAKYLLERS IS CREATIVITY AND RELENTLESS PASSION. WE ARE TAKING A UNIQUE ROUTE, KNOWING THAT SOME WILL CRITICIZE AND MANY WILL NOT UNDERSTAND BEFORE IT BECOMES MAINSTREAM. BUT, WE ARE PAVING THE PATH."
                  }
                />
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.column__bkplj)}>
              <p.Stack
                as={"div"}
                data-plasmic-name={"boxes"}
                data-plasmic-override={overrides.boxes}
                hasGap={true}
                className={classNames(projectcss.all, sty.boxes)}
              >
                <div className={classNames(projectcss.all, sty.column___01Zj)}>
                  <RoadmapBox
                    className={classNames(
                      "__wab_instance",
                      sty.roadmapBox__llNuK
                    )}
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__yWg6A)}>
                  <RoadmapBox
                    className={classNames(
                      "__wab_instance",
                      sty.roadmapBox__pCkm
                    )}
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__lLnEg)}>
                  <RoadmapBox
                    className={classNames(
                      "__wab_instance",
                      sty.roadmapBox__tZpe1
                    )}
                  />
                </div>
              </p.Stack>
            </div>
          </div>

          <TrueFooter
            data-plasmic-name={"trueFooter"}
            data-plasmic-override={overrides.trueFooter}
            className={classNames("__wab_instance", sty.trueFooter)}
            darkMode={true}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbarCustom",
    "columns",
    "descCol",
    "fullText",
    "boxes",
    "trueFooter"
  ],

  navbarCustom: ["navbarCustom"],
  columns: ["columns", "descCol", "fullText", "boxes"],
  descCol: ["descCol", "fullText"],
  fullText: ["fullText"],
  boxes: ["boxes"],
  trueFooter: ["trueFooter"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicManifesto3__ArgProps,
      internalVariantPropNames: PlasmicManifesto3__VariantProps
    });

    return PlasmicManifesto3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicManifesto3";
  } else {
    func.displayName = `PlasmicManifesto3.${nodeName}`;
  }
  return func;
}

export const PlasmicManifesto3 = Object.assign(
  // Top-level PlasmicManifesto3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarCustom: makeNodeComponent("navbarCustom"),
    columns: makeNodeComponent("columns"),
    descCol: makeNodeComponent("descCol"),
    fullText: makeNodeComponent("fullText"),
    boxes: makeNodeComponent("boxes"),
    trueFooter: makeNodeComponent("trueFooter"),
    // Metadata about props expected for PlasmicManifesto3
    internalVariantProps: PlasmicManifesto3__VariantProps,
    internalArgProps: PlasmicManifesto3__ArgProps
  }
);

export default PlasmicManifesto3;
/* prettier-ignore-end */
