// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cELQgcBTCpXC8URn4hyouo
// Component: EKBe6rLTgz
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
import sty from "./PlasmicBigImgLeft.module.css"; // plasmic-import: EKBe6rLTgz/css

export const PlasmicBigImgLeft__VariantProps = new Array();

export const PlasmicBigImgLeft__ArgProps = new Array();

function PlasmicBigImgLeft__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  return (
    <p.PlasmicImg
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      alt={""}
      className={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
      displayHeight={"427px"}
      displayMaxHeight={"none"}
      displayMaxWidth={"100%"}
      displayMinHeight={"0"}
      displayMinWidth={"0"}
      displayWidth={"auto"}
      loading={"lazy"}
      src={{
        src: "/plasmic/akyllers/images/untitledArtworkpng.png",
        fullWidth: 3000,
        fullHeight: 3798,
        aspectRatio: undefined
      }}
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicBigImgLeft__ArgProps,
          internalVariantPropNames: PlasmicBigImgLeft__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicBigImgLeft__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBigImgLeft";
  } else {
    func.displayName = `PlasmicBigImgLeft.${nodeName}`;
  }
  return func;
}

export const PlasmicBigImgLeft = Object.assign(
  // Top-level PlasmicBigImgLeft renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicBigImgLeft
    internalVariantProps: PlasmicBigImgLeft__VariantProps,
    internalArgProps: PlasmicBigImgLeft__ArgProps
  }
);

export default PlasmicBigImgLeft;
/* prettier-ignore-end */
