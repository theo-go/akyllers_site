// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cELQgcBTCpXC8URn4hyouo
// Component: lEk4k8FFv6H
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
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent
import TrueFooter from "../../TrueFooter"; // plasmic-import: 1RTRAsLRW5N/component
import { useScreenVariants as useScreenVariantsnK2Y1P6I3Vepj } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nK2Y1p6i3Vepj/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_akyllers.module.css"; // plasmic-import: cELQgcBTCpXC8URn4hyouo/projectcss
import sty from "./PlasmicManifesto5.module.css"; // plasmic-import: lEk4k8FFv6H/css
import DiscordSvgrepoComsvgIcon from "./icons/PlasmicIcon__DiscordSvgrepoComsvg"; // plasmic-import: DZ_ZJwIq1b/icon
import InstagramSvgrepoCom2SvgIcon from "./icons/PlasmicIcon__InstagramSvgrepoCom2Svg"; // plasmic-import: DNMeweYbp-/icon
import TwitterSvgrepoComsvgIcon from "./icons/PlasmicIcon__TwitterSvgrepoComsvg"; // plasmic-import: SCWRDWiaJn/icon

export const PlasmicManifesto5__VariantProps = new Array();

export const PlasmicManifesto5__ArgProps = new Array();

export const defaultManifesto5__Args = {};

function PlasmicManifesto5__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultManifesto5__Args, props.args);
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
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            brand={
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__dArDj
                )}
                component={Link}
                href={"#"}
                platform={"nextjs"}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__fylli)}
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
            className={classNames("__wab_instance", sty.navigationBar)}
            closeButton={
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__whhsp)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={
                  hasVariant(globalVariants, "screen", "mobileOnly")
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
                    sty.link__bcf5X
                  )}
                  component={Link}
                  href={"/manifesto-5"}
                  platform={"nextjs"}
                >
                  {"Gallery"}
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__s5LC7
                  )}
                  component={Link}
                  href={"/manifesto-3"}
                  platform={"nextjs"}
                >
                  {"Roadmap"}
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__lxVcx
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
                    sty.link__vgXzj
                  )}
                  component={Link}
                  href={"/-2"}
                  platform={"nextjs"}
                >
                  {"arcade"}
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__tlyIa
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  <DiscordSvgrepoComsvgIcon
                    className={classNames(projectcss.all, sty.svg___4YbdT)}
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
                  platform={"nextjs"}
                >
                  <InstagramSvgrepoCom2SvgIcon
                    className={classNames(projectcss.all, sty.svg__rQn5O)}
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
                  platform={"nextjs"}
                >
                  <TwitterSvgrepoComsvgIcon
                    className={classNames(projectcss.all, sty.svg__cpK9S)}
                    role={"img"}
                  />
                </p.PlasmicLink>
              </React.Fragment>
            }
            openButton={
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__et9Hq)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "30px"
                    : "auto"
                }
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "30px"
                    : "auto"
                }
                src={
                  hasVariant(globalVariants, "screen", "mobileOnly")
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

          <div
            data-plasmic-name={"textSection"}
            data-plasmic-override={overrides.textSection}
            className={classNames(projectcss.all, sty.textSection)}
          >
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__eymb1
              )}
            >
              {"Gallery"}
            </h1>

            <div
              data-plasmic-name={"bigSection"}
              data-plasmic-override={overrides.bigSection}
              className={classNames(projectcss.all, sty.bigSection)}
            >
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__bLZkM
                )}
              >
                {"Coming soon"}
              </h1>
            </div>
          </div>

          <TrueFooter
            data-plasmic-name={"trueFooter"}
            data-plasmic-override={overrides.trueFooter}
            className={classNames("__wab_instance", sty.trueFooter)}
            darkMode={true}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "navigationBar", "textSection", "bigSection", "trueFooter"],
  navigationBar: ["navigationBar"],
  textSection: ["textSection", "bigSection"],
  bigSection: ["bigSection"],
  trueFooter: ["trueFooter"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicManifesto5__ArgProps,
      internalVariantPropNames: PlasmicManifesto5__VariantProps
    });

    return PlasmicManifesto5__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicManifesto5";
  } else {
    func.displayName = `PlasmicManifesto5.${nodeName}`;
  }
  return func;
}

export const PlasmicManifesto5 = Object.assign(
  // Top-level PlasmicManifesto5 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    textSection: makeNodeComponent("textSection"),
    bigSection: makeNodeComponent("bigSection"),
    trueFooter: makeNodeComponent("trueFooter"),
    // Metadata about props expected for PlasmicManifesto5
    internalVariantProps: PlasmicManifesto5__VariantProps,
    internalArgProps: PlasmicManifesto5__ArgProps
  }
);

export default PlasmicManifesto5;
/* prettier-ignore-end */
