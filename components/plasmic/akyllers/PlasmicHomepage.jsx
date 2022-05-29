// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cELQgcBTCpXC8URn4hyouo
// Component: OLVR3QMVAjAf
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavbarCustom from "../../NavbarCustom"; // plasmic-import: 5sPSsjDnyE/component
import { useScreenVariants as useScreenVariantsnK2Y1P6I3Vepj } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nK2Y1p6i3Vepj/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_akyllers.module.css"; // plasmic-import: cELQgcBTCpXC8URn4hyouo/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: OLVR3QMVAjAf/css
import RightArrowSvgrepoComsvgIcon from "./icons/PlasmicIcon__RightArrowSvgrepoComsvg"; // plasmic-import: q3kowz1PIr/icon

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

export const defaultHomepage__Args = {};

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHomepage__Args, props.args);
  const $props = args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnK2Y1P6I3Vepj()
  });

  return (
    <React.Fragment>
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

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <div className={classNames(projectcss.all, sty.freeBox__bkdq)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__eSdyu
                )}
              >
                {"hello world..."}
              </div>
            </div>
          ) : null}

          <div className={classNames(projectcss.all, sty.freeBox__gsf7I)}>
            <p.PlasmicLink
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(projectcss.all, projectcss.a, sty.link)}
              component={Link}
              href={"/-2"}
              platform={"nextjs"}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___9KwH)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___88Atj
                  )}
                >
                  {"Enter"}
                </div>

                <RightArrowSvgrepoComsvgIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              </p.Stack>
            </p.PlasmicLink>
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "navbarCustom", "link", "svg"],
  navbarCustom: ["navbarCustom"],
  link: ["link", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarCustom: makeNodeComponent("navbarCustom"),
    link: makeNodeComponent("link"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */