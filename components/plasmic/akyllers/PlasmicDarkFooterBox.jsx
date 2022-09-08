// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cELQgcBTCpXC8URn4hyouo
// Component: QPWIEA9PWn
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_akyllers.module.css"; // plasmic-import: cELQgcBTCpXC8URn4hyouo/projectcss
import sty from "./PlasmicDarkFooterBox.module.css"; // plasmic-import: QPWIEA9PWn/css

export const PlasmicDarkFooterBox__VariantProps = new Array();

export const PlasmicDarkFooterBox__ArgProps = new Array();

function PlasmicDarkFooterBox__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
      component={Link}
      href={"https://twitter.com/akyllers?s=21"}
      platform={"nextjs"}
      target={"_blank"}
    >
      <div
        data-plasmic-name={"darkFooterBox"}
        data-plasmic-override={overrides.darkFooterBox}
        className={classNames(projectcss.all, sty.darkFooterBox)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"TWITTER"}
        </div>
      </div>
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  root: ["root", "darkFooterBox", "text"],
  darkFooterBox: ["darkFooterBox", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDarkFooterBox__ArgProps,
          internalVariantPropNames: PlasmicDarkFooterBox__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicDarkFooterBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDarkFooterBox";
  } else {
    func.displayName = `PlasmicDarkFooterBox.${nodeName}`;
  }
  return func;
}

export const PlasmicDarkFooterBox = Object.assign(
  // Top-level PlasmicDarkFooterBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    darkFooterBox: makeNodeComponent("darkFooterBox"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicDarkFooterBox
    internalVariantProps: PlasmicDarkFooterBox__VariantProps,
    internalArgProps: PlasmicDarkFooterBox__ArgProps
  }
);

export default PlasmicDarkFooterBox;
/* prettier-ignore-end */
