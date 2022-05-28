// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cELQgcBTCpXC8URn4hyouo
// Component: nG5tYecuo7
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_akyllers.module.css"; // plasmic-import: cELQgcBTCpXC8URn4hyouo/projectcss
import sty from "./PlasmicItemInside.module.css"; // plasmic-import: nG5tYecuo7/css

export const PlasmicItemInside__VariantProps = new Array();

export const PlasmicItemInside__ArgProps = new Array("image", "children");

export const defaultItemInside__Args = {
  image: {
    src: "/plasmic/akyllers/images/untitledArtwork1Png.png",
    fullWidth: 500,
    fullHeight: 500,
    aspectRatio: undefined
  }
};

function PlasmicItemInside__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultItemInside__Args, props.args);
  const $props = args;
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
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"auto"}
        loading={"lazy"}
        src={args.image}
      />

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Enter some text",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "freeBox"],
  img: ["img"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicItemInside__ArgProps,
      internalVariantPropNames: PlasmicItemInside__VariantProps
    });

    return PlasmicItemInside__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicItemInside";
  } else {
    func.displayName = `PlasmicItemInside.${nodeName}`;
  }
  return func;
}

export const PlasmicItemInside = Object.assign(
  // Top-level PlasmicItemInside renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicItemInside
    internalVariantProps: PlasmicItemInside__VariantProps,
    internalArgProps: PlasmicItemInside__ArgProps
  }
);

export default PlasmicItemInside;
/* prettier-ignore-end */
