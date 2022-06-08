// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cELQgcBTCpXC8URn4hyouo
// Component: T2PRct6rsu
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
import sty from "./PlasmicLightFooterBox2.module.css"; // plasmic-import: T2PRct6rsu/css

export const PlasmicLightFooterBox2__VariantProps = new Array();

export const PlasmicLightFooterBox2__ArgProps = new Array();

export const defaultLightFooterBox2__Args = {};

function PlasmicLightFooterBox2__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultLightFooterBox2__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
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
      href={"/forum"}
      platform={"nextjs"}
      target={undefined}
    >
      <div
        data-plasmic-name={"lightFooterBox2"}
        data-plasmic-override={overrides.lightFooterBox2}
        className={classNames(projectcss.all, sty.lightFooterBox2)}
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
          {"FORUM"}
        </div>
      </div>
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  root: ["root", "lightFooterBox2", "text"],
  lightFooterBox2: ["lightFooterBox2", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLightFooterBox2__ArgProps,
      internalVariantPropNames: PlasmicLightFooterBox2__VariantProps
    });

    return PlasmicLightFooterBox2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLightFooterBox2";
  } else {
    func.displayName = `PlasmicLightFooterBox2.${nodeName}`;
  }
  return func;
}

export const PlasmicLightFooterBox2 = Object.assign(
  // Top-level PlasmicLightFooterBox2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    lightFooterBox2: makeNodeComponent("lightFooterBox2"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicLightFooterBox2
    internalVariantProps: PlasmicLightFooterBox2__VariantProps,
    internalArgProps: PlasmicLightFooterBox2__ArgProps
  }
);

export default PlasmicLightFooterBox2;
/* prettier-ignore-end */
