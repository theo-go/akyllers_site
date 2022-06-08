// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cELQgcBTCpXC8URn4hyouo
// Component: JxzItQHtdP
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_akyllers.module.css"; // plasmic-import: cELQgcBTCpXC8URn4hyouo/projectcss
import sty from "./PlasmicFullText.module.css"; // plasmic-import: JxzItQHtdP/css

export const PlasmicFullText__VariantProps = new Array();

export const PlasmicFullText__ArgProps = new Array("description");

export const defaultFullText__Args = {};

function PlasmicFullText__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultFullText__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      {true ? (
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Our Vision & Values"}
        </div>
      ) : null}

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents:
            "We are the Yuppies of the Metaverse. We’re riding on the thin line that separates the past from the future. We are a community of people who are bold yet kind, generous yet fair, Peaceful yet rebels, building what Woodstock was meant for.\n\nVISION:\nA SIMPLE YET COMPLEX VISION DRIVES US – DISRUPT ENTREPRENEURSHIP BY CREATING THE LARGEST DECENTRALIZED BRAND FOR THE METAVERSE, BUILT AND OWNED BY THE COMMUNITY.\n\nVALUES:\nCOMMUNITY FIRST: BUILT BY AKYLLERS TO THE WORLD. #1 WILL ALWAYS BE AKYLLERS & #2 AKYLLERS & #3, WELL…. YOU KNOW.\n\nTRUST THE PROCESS:\nTIME WILL TELL WHAT WE ARE AIMING TO BUILD. IT IS AN EFFORT BY MANY TO THE BENEFIT OF ALL. DECENTRALIZED DOES NOT MEAN THERE IS NO LEADERSHIP, AND THE CORE TEAM WILL PROVIDE THE GUARD RAILS AND TOOLS FOR ALL SEEDS TO GROW TOGETHER.\n\nCREATIVE FIRST:\nAKYLLERS IS CREATIVITY AND RELENTLESS PASSION. WE ARE TAKING A UNIQUE ROUTE, KNOWING THAT SOME WILL CRITICIZE AND MANY WILL NOT UNDERSTAND BEFORE IT BECOMES MAINSTREAM. BUT, WE ARE PAVING THE PATH.",
          value: args.description
        })}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "text", "freeBox"],
  text: ["text"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFullText__ArgProps,
      internalVariantPropNames: PlasmicFullText__VariantProps
    });

    return PlasmicFullText__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFullText";
  } else {
    func.displayName = `PlasmicFullText.${nodeName}`;
  }
  return func;
}

export const PlasmicFullText = Object.assign(
  // Top-level PlasmicFullText renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicFullText
    internalVariantProps: PlasmicFullText__VariantProps,
    internalArgProps: PlasmicFullText__ArgProps
  }
);

export default PlasmicFullText;
/* prettier-ignore-end */
