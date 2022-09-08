// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cELQgcBTCpXC8URn4hyouo
// Component: -LEP2YxQV0
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_akyllers.module.css"; // plasmic-import: cELQgcBTCpXC8URn4hyouo/projectcss
import sty from "./PlasmicMmBoxQuote.module.css"; // plasmic-import: -LEP2YxQV0/css

export const PlasmicMmBoxQuote__VariantProps = new Array(
  "color1",
  "c2",
  "c3",
  "c4",
  "v5",
  "unnamedVariant",
  "unnamedVariant2"
);

export const PlasmicMmBoxQuote__ArgProps = new Array("children");

function PlasmicMmBoxQuote__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"text"}
      data-plasmic-override={overrides.text}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.text,
        {
          [sty.textc2]: hasVariant(variants, "c2", "c2"),
          [sty.textc3]: hasVariant(variants, "c3", "c3"),
          [sty.textc4]: hasVariant(variants, "c4", "c4"),
          [sty.textcolor1]: hasVariant(variants, "color1", "color1"),
          [sty.textunnamedVariant2]: hasVariant(
            variants,
            "unnamedVariant2",
            "unnamedVariant2"
          ),

          [sty.textunnamedVariant]: hasVariant(
            variants,
            "unnamedVariant",
            "unnamedVariant"
          ),

          [sty.textv5]: hasVariant(variants, "v5", "v5")
        }
      )}
    >
      {(hasVariant(variants, "color1", "color1") ? true : true) ? (
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBoxcolor1]: hasVariant(variants, "color1", "color1")
          })}
        >
          {false
            ? p.renderPlasmicSlot({
                defaultContents: "asdfasdfasdfasdf",
                value: args.children,
                className: classNames(sty.slotTargetChildren, {
                  [sty.slotTargetChildrenc2]: hasVariant(variants, "c2", "c2"),
                  [sty.slotTargetChildrencolor1]: hasVariant(
                    variants,
                    "color1",
                    "color1"
                  )
                })
              })
            : null}
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  text: ["text", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMmBoxQuote__ArgProps,
          internalVariantPropNames: PlasmicMmBoxQuote__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicMmBoxQuote__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "text") {
    func.displayName = "PlasmicMmBoxQuote";
  } else {
    func.displayName = `PlasmicMmBoxQuote.${nodeName}`;
  }
  return func;
}

export const PlasmicMmBoxQuote = Object.assign(
  // Top-level PlasmicMmBoxQuote renders the root element
  makeNodeComponent("text"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicMmBoxQuote
    internalVariantProps: PlasmicMmBoxQuote__VariantProps,
    internalArgProps: PlasmicMmBoxQuote__ArgProps
  }
);

export default PlasmicMmBoxQuote;
/* prettier-ignore-end */
