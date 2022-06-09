// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cELQgcBTCpXC8URn4hyouo
// Component: 5sPSsjDnyE
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent
import { useScreenVariants as useScreenVariantsnK2Y1P6I3Vepj } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nK2Y1p6i3Vepj/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_akyllers.module.css"; // plasmic-import: cELQgcBTCpXC8URn4hyouo/projectcss
import sty from "./PlasmicNavbarCustom.module.css"; // plasmic-import: 5sPSsjDnyE/css
import DiscordSvgrepoComsvgIcon from "./icons/PlasmicIcon__DiscordSvgrepoComsvg"; // plasmic-import: DZ_ZJwIq1b/icon
import InstagramSvgrepoCom2SvgIcon from "./icons/PlasmicIcon__InstagramSvgrepoCom2Svg"; // plasmic-import: DNMeweYbp-/icon
import TwitterSvgrepoComsvgIcon from "./icons/PlasmicIcon__TwitterSvgrepoComsvg"; // plasmic-import: SCWRDWiaJn/icon

export const PlasmicNavbarCustom__VariantProps = new Array("darkLetters");

export const PlasmicNavbarCustom__ArgProps = new Array();

export const defaultNavbarCustom__Args = {};

function PlasmicNavbarCustom__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultNavbarCustom__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnK2Y1P6I3Vepj()
  });

  return (
    <NavigationBar
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <p.PlasmicLink
          className={classNames(projectcss.all, projectcss.a, sty.link__qKkg)}
          component={Link}
          href={"/"}
          platform={"nextjs"}
        >
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__eiNyK)}
            displayHeight={"40px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={{
              src: "/plasmic/akyllers/images/logopng.png",
              fullWidth: 1560,
              fullHeight: 303,
              aspectRatio: undefined
            }}
          />
        </p.PlasmicLink>
      }
      className={classNames("__wab_instance", sty.root, {
        [sty.rootdarkLetters]: hasVariant(
          variants,
          "darkLetters",
          "darkLetters"
        )
      })}
      closeButton={
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img___6KE, {
            [sty.imgdarkLetters___6KEdVqUt]: hasVariant(
              variants,
              "darkLetters",
              "darkLetters"
            )
          })}
          displayHeight={"30px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"30px"}
          src={
            hasVariant(variants, "darkLetters", "darkLetters") &&
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? {
                  src: "/plasmic/akyllers/images/pacmanDarkpng.png",
                  fullWidth: 512,
                  fullHeight: 512,
                  aspectRatio: undefined
                }
              : hasVariant(globalVariants, "screen", "mobileOnly")
              ? {
                  src: "/plasmic/akyllers/images/ghostWhitepng.png",
                  fullWidth: 32,
                  fullHeight: 32,
                  aspectRatio: undefined
                }
              : "https://static1.plasmic.app/close.svg"
          }
        />
      }
      itemsGap={12}
      menuItems={
        <React.Fragment>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__vgXzj,
              {
                [sty.linkdarkLetters__vgXzjdVqUt]: hasVariant(
                  variants,
                  "darkLetters",
                  "darkLetters"
                )
              }
            )}
            component={Link}
            href={"/about"}
            platform={"nextjs"}
          >
            {"ABOUT"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__lxVcx,
              {
                [sty.linkdarkLetters__lxVcXdVqUt]: hasVariant(
                  variants,
                  "darkLetters",
                  "darkLetters"
                )
              }
            )}
            component={Link}
            href={"/manifesto"}
            platform={"nextjs"}
          >
            {"manifesto"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__s5LC7,
              {
                [sty.linkdarkLetters__s5LC7DVqUt]: hasVariant(
                  variants,
                  "darkLetters",
                  "darkLetters"
                )
              }
            )}
            component={Link}
            href={"/roadmap"}
            platform={"nextjs"}
          >
            {"Roadmap"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__dJmA,
              {
                [sty.linkdarkLetters__dJmAdVqUt]: hasVariant(
                  variants,
                  "darkLetters",
                  "darkLetters"
                )
              }
            )}
            component={Link}
            href={"/forum"}
            platform={"nextjs"}
          >
            {"FORUM"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__cqn6,
              {
                [sty.linkdarkLetters__cqn6DVqUt]: hasVariant(
                  variants,
                  "darkLetters",
                  "darkLetters"
                )
              }
            )}
            component={Link}
            href={"/gallery"}
            platform={"nextjs"}
          >
            {"Gallery"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__tlyIa
            )}
            component={Link}
            href={"https://discord.gg/GTDCnC8KM3"}
            platform={"nextjs"}
            target={"_blank"}
          >
            <DiscordSvgrepoComsvgIcon
              className={classNames(projectcss.all, sty.svg___4YbdT, {
                [sty.svgdarkLetters___4YbdTdVqUt]: hasVariant(
                  variants,
                  "darkLetters",
                  "darkLetters"
                )
              })}
              role={"img"}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__f0Zhb
            )}
            component={Link}
            href={"https://www.instagram.com/akyllers_/"}
            platform={"nextjs"}
            target={"_blank"}
          >
            <InstagramSvgrepoCom2SvgIcon
              className={classNames(projectcss.all, sty.svg__rQn5O, {
                [sty.svgdarkLetters__rQn5OdVqUt]: hasVariant(
                  variants,
                  "darkLetters",
                  "darkLetters"
                )
              })}
              role={"img"}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___8891
            )}
            component={Link}
            href={"https://twitter.com/akyllers?s=21"}
            platform={"nextjs"}
            target={"_blank"}
          >
            <TwitterSvgrepoComsvgIcon
              className={classNames(projectcss.all, sty.svg__cpK9S, {
                [sty.svgdarkLetters__cpK9SdVqUt]: hasVariant(
                  variants,
                  "darkLetters",
                  "darkLetters"
                )
              })}
              role={"img"}
            />
          </p.PlasmicLink>
        </React.Fragment>
      }
      openButton={
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__aPIi, {
            [sty.imgdarkLetters__aPIIdVqUt]: hasVariant(
              variants,
              "darkLetters",
              "darkLetters"
            )
          })}
          displayHeight={
            hasVariant(globalVariants, "screen", "mobileOnly") ? "30px" : "auto"
          }
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly") ? "30px" : "auto"
          }
          src={
            hasVariant(variants, "darkLetters", "darkLetters") &&
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? {
                  src: "/plasmic/akyllers/images/pacmanDarkpng.png",
                  fullWidth: 512,
                  fullHeight: 512,
                  aspectRatio: undefined
                }
              : hasVariant(globalVariants, "screen", "mobileOnly")
              ? {
                  src: "/plasmic/akyllers/images/pacmanWhitepng.png",
                  fullWidth: 512,
                  fullHeight: 512,
                  aspectRatio: undefined
                }
              : "https://static1.plasmic.app/menu.svg"
          }
        />
      }
      responsiveBreakpoint={768}
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarCustom__ArgProps,
      internalVariantPropNames: PlasmicNavbarCustom__VariantProps
    });

    return PlasmicNavbarCustom__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarCustom";
  } else {
    func.displayName = `PlasmicNavbarCustom.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarCustom = Object.assign(
  // Top-level PlasmicNavbarCustom renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicNavbarCustom
    internalVariantProps: PlasmicNavbarCustom__VariantProps,
    internalArgProps: PlasmicNavbarCustom__ArgProps
  }
);

export default PlasmicNavbarCustom;
/* prettier-ignore-end */
