// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cELQgcBTCpXC8URn4hyouo
// Component: oP4880RYxJw
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantsnK2Y1P6I3Vepj } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nK2Y1p6i3Vepj/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_akyllers.module.css"; // plasmic-import: cELQgcBTCpXC8URn4hyouo/projectcss
import sty from "./PlasmicBoxesFooter.module.css"; // plasmic-import: oP4880RYxJw/css

export const PlasmicBoxesFooter__VariantProps = new Array();

export const PlasmicBoxesFooter__ArgProps = new Array();

export const defaultBoxesFooter__Args = {};

function PlasmicBoxesFooter__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultBoxesFooter__Args, props.args);
  const $props = args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnK2Y1P6I3Vepj()
  });

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
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__sFhkZ
        )}
      >
        {"COMMUNITY"}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__cmTv5)}>
        <div
          data-plasmic-name={"lightFooterBox"}
          data-plasmic-override={overrides.lightFooterBox}
          className={classNames(projectcss.all, sty.lightFooterBox)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__meuy9
            )}
          >
            {"DISCORD"}
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__n9Pji)}>
          <div
            data-plasmic-name={"darkFooterBox"}
            data-plasmic-override={overrides.darkFooterBox}
            className={classNames(projectcss.all, sty.darkFooterBox)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gPfzK
              )}
            >
              {"TWITTER"}
            </div>
          </div>
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox___0Owuq)}>
        <div className={classNames(projectcss.all, sty.freeBox___13C7V)}>
          <div
            data-plasmic-name={"darkFooterBox2"}
            data-plasmic-override={overrides.darkFooterBox2}
            className={classNames(projectcss.all, sty.darkFooterBox2)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__drnlZ
              )}
            >
              {"INSTAGRAM"}
            </div>
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__p8OZe)}>
          <div
            data-plasmic-name={"lightFooterBox2"}
            data-plasmic-override={overrides.lightFooterBox2}
            className={classNames(projectcss.all, sty.lightFooterBox2)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__p7Ow6
              )}
            >
              {"CONTACT US"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "lightFooterBox",
    "darkFooterBox",
    "darkFooterBox2",
    "lightFooterBox2"
  ],

  lightFooterBox: ["lightFooterBox"],
  darkFooterBox: ["darkFooterBox"],
  darkFooterBox2: ["darkFooterBox2"],
  lightFooterBox2: ["lightFooterBox2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBoxesFooter__ArgProps,
      internalVariantPropNames: PlasmicBoxesFooter__VariantProps
    });

    return PlasmicBoxesFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBoxesFooter";
  } else {
    func.displayName = `PlasmicBoxesFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicBoxesFooter = Object.assign(
  // Top-level PlasmicBoxesFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    lightFooterBox: makeNodeComponent("lightFooterBox"),
    darkFooterBox: makeNodeComponent("darkFooterBox"),
    darkFooterBox2: makeNodeComponent("darkFooterBox2"),
    lightFooterBox2: makeNodeComponent("lightFooterBox2"),
    // Metadata about props expected for PlasmicBoxesFooter
    internalVariantProps: PlasmicBoxesFooter__VariantProps,
    internalArgProps: PlasmicBoxesFooter__ArgProps
  }
);

export default PlasmicBoxesFooter;
/* prettier-ignore-end */
