// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cELQgcBTCpXC8URn4hyouo
// Component: daG_UtRVH0
import * as React from "react";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_akyllers.module.css"; // plasmic-import: cELQgcBTCpXC8URn4hyouo/projectcss
import sty from "./PlasmicReadButton.module.css"; // plasmic-import: daG_UtRVH0/css

export const PlasmicReadButton__VariantProps = new Array();

export const PlasmicReadButton__ArgProps = new Array();

function PlasmicReadButton__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      {"READ OUR FIRST PART"}
    </div>
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
          internalArgPropNames: PlasmicReadButton__ArgProps,
          internalVariantPropNames: PlasmicReadButton__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicReadButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicReadButton";
  } else {
    func.displayName = `PlasmicReadButton.${nodeName}`;
  }
  return func;
}

export const PlasmicReadButton = Object.assign(
  // Top-level PlasmicReadButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicReadButton
    internalVariantProps: PlasmicReadButton__VariantProps,
    internalArgProps: PlasmicReadButton__ArgProps
  }
);

export default PlasmicReadButton;
/* prettier-ignore-end */
