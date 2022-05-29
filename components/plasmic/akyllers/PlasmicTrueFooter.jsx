// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cELQgcBTCpXC8URn4hyouo
// Component: 1RTRAsLRW5N
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
import FooterLink from "../../FooterLink"; // plasmic-import: 5rx4AKY7Ct/component
import { useScreenVariants as useScreenVariantsnK2Y1P6I3Vepj } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nK2Y1p6i3Vepj/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_akyllers.module.css"; // plasmic-import: cELQgcBTCpXC8URn4hyouo/projectcss
import sty from "./PlasmicTrueFooter.module.css"; // plasmic-import: 1RTRAsLRW5N/css
import DiscordSvgrepoComsvgIcon from "./icons/PlasmicIcon__DiscordSvgrepoComsvg"; // plasmic-import: DZ_ZJwIq1b/icon
import InstagramSvgrepoCom2SvgIcon from "./icons/PlasmicIcon__InstagramSvgrepoCom2Svg"; // plasmic-import: DNMeweYbp-/icon
import TwitterSvgrepoComsvgIcon from "./icons/PlasmicIcon__TwitterSvgrepoComsvg"; // plasmic-import: SCWRDWiaJn/icon

export const PlasmicTrueFooter__VariantProps = new Array("darkMode");

export const PlasmicTrueFooter__ArgProps = new Array();

export const defaultTrueFooter__Args = {};

function PlasmicTrueFooter__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultTrueFooter__Args, props.args);
  const $props = args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnK2Y1P6I3Vepj()
  });

  return (
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
      <div className={classNames(projectcss.all, sty.freeBox__xRAiw)}>
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <div className={classNames(projectcss.all, sty.freeBox__krXpl)}>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__eiFPj
              )}
              component={Link}
              href={"/"}
              platform={"nextjs"}
            >
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img, {
                  [sty.imgdarkMode]: hasVariant(
                    variants,
                    "darkMode",
                    "darkMode"
                  )
                })}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "auto"
                    : "200px"
                }
                loading={"lazy"}
                src={
                  hasVariant(variants, "darkMode", "darkMode")
                    ? {
                        src: "/plasmic/akyllers/images/logoWhitepng.png",
                        fullWidth: 1560,
                        fullHeight: 303,
                        aspectRatio: undefined
                      }
                    : {
                        src: "/plasmic/akyllers/images/logopng.png",
                        fullWidth: 1560,
                        fullHeight: 303,
                        aspectRatio: undefined
                      }
                }
              />
            </p.PlasmicLink>
          </div>
        ) : null}
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__vVTq)}
          >
            <FooterLink
              className={classNames("__wab_instance", sty.footerLink__rOA, {
                [sty.footerLinkdarkMode__rOAiscWr]: hasVariant(
                  variants,
                  "darkMode",
                  "darkMode"
                )
              })}
              link={"/about"}
              whiteColor={
                hasVariant(variants, "darkMode", "darkMode") ? true : undefined
              }
            >
              {"ABOUT"}
            </FooterLink>

            <FooterLink
              className={classNames("__wab_instance", sty.footerLink__j6LeP, {
                [sty.footerLinkdarkMode__j6LePiscWr]: hasVariant(
                  variants,
                  "darkMode",
                  "darkMode"
                )
              })}
              link={"/manifesto"}
              whiteColor={
                hasVariant(variants, "darkMode", "darkMode") ? true : undefined
              }
            />

            <FooterLink
              className={classNames("__wab_instance", sty.footerLink__vWvtN, {
                [sty.footerLinkdarkMode__vWvtNiscWr]: hasVariant(
                  variants,
                  "darkMode",
                  "darkMode"
                )
              })}
              link={"/roadmap"}
              whiteColor={
                hasVariant(variants, "darkMode", "darkMode") ? true : undefined
              }
            >
              {"Roadmap"}
            </FooterLink>

            <FooterLink
              className={classNames("__wab_instance", sty.footerLink__sDx6, {
                [sty.footerLinkdarkMode__sDx6IscWr]: hasVariant(
                  variants,
                  "darkMode",
                  "darkMode"
                )
              })}
              link={"/forum"}
              whiteColor={
                hasVariant(variants, "darkMode", "darkMode") ? true : undefined
              }
            >
              {"FORUM"}
            </FooterLink>

            <FooterLink
              className={classNames("__wab_instance", sty.footerLink__t0Pq, {
                [sty.footerLinkdarkMode__t0PqIscWr]: hasVariant(
                  variants,
                  "darkMode",
                  "darkMode"
                )
              })}
              link={"/gallery"}
              whiteColor={
                hasVariant(variants, "darkMode", "darkMode") ? true : undefined
              }
            >
              {"Gallery"}
            </FooterLink>
          </p.Stack>
        ) : null}
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__yBWi)}
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__sknvu
              )}
              component={Link}
              href={"https://discord.com/invite/fGbCdPkDwU"}
              platform={"nextjs"}
            >
              <DiscordSvgrepoComsvgIcon
                className={classNames(projectcss.all, sty.svg__dg1Vu, {
                  [sty.svgdarkMode__dg1VuIscWr]: hasVariant(
                    variants,
                    "darkMode",
                    "darkMode"
                  )
                })}
                role={"img"}
              />
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__gN9Au
              )}
              component={Link}
              href={"https://www.instagram.com/akyllers_/"}
              platform={"nextjs"}
            >
              <InstagramSvgrepoCom2SvgIcon
                className={classNames(projectcss.all, sty.svg__iMiKg, {
                  [sty.svgdarkMode__iMiKgIscWr]: hasVariant(
                    variants,
                    "darkMode",
                    "darkMode"
                  )
                })}
                role={"img"}
              />
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__etPHl
              )}
              component={Link}
              href={"https://twitter.com/akyllers?s=21"}
              platform={"nextjs"}
            >
              <TwitterSvgrepoComsvgIcon
                className={classNames(projectcss.all, sty.svg__lbLXj, {
                  [sty.svgdarkMode__lbLXjIscWr]: hasVariant(
                    variants,
                    "darkMode",
                    "darkMode"
                  )
                })}
                role={"img"}
              />
            </p.PlasmicLink>
          </p.Stack>
        ) : null}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTrueFooter__ArgProps,
      internalVariantPropNames: PlasmicTrueFooter__VariantProps
    });

    return PlasmicTrueFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTrueFooter";
  } else {
    func.displayName = `PlasmicTrueFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicTrueFooter = Object.assign(
  // Top-level PlasmicTrueFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicTrueFooter
    internalVariantProps: PlasmicTrueFooter__VariantProps,
    internalArgProps: PlasmicTrueFooter__ArgProps
  }
);

export default PlasmicTrueFooter;
/* prettier-ignore-end */
