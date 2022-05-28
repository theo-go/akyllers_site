// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cELQgcBTCpXC8URn4hyouo
// Component: Df4ah1WY7c
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_akyllers.module.css"; // plasmic-import: cELQgcBTCpXC8URn4hyouo/projectcss
import sty from "./PlasmicTeamItemBox.module.css"; // plasmic-import: Df4ah1WY7c/css
import TwitterSvgrepoComsvgIcon from "./icons/PlasmicIcon__TwitterSvgrepoComsvg"; // plasmic-import: SCWRDWiaJn/icon

export const PlasmicTeamItemBox__VariantProps = new Array();

export const PlasmicTeamItemBox__ArgProps = new Array(
  "handleText",
  "url",
  "image",
  "title",
  "job",
  "description"
);

export const defaultTeamItemBox__Args = {
  image: {
    src: "/plasmic/akyllers/images/copyOfNewsletterPodcastCopyjpg.jpeg",
    fullWidth: 1080,
    fullHeight: 1080,
    aspectRatio: undefined
  }
};

function PlasmicTeamItemBox__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultTeamItemBox__Args, props.args);
  const $props = args;
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

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
      data-plasmic-trigger-props={[triggerRootHoverProps]}
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

      <h1
        data-plasmic-name={"h1"}
        data-plasmic-override={overrides.h1}
        className={classNames(projectcss.all, projectcss.h1, sty.h1)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Title goes here",
          value: args.title,
          className: classNames(sty.slotTargetTitle)
        })}
      </h1>

      <div className={classNames(projectcss.all, sty.freeBox__oefEh)}>
        {p.renderPlasmicSlot({
          defaultContents: "job",
          value: args.job,
          className: classNames(sty.slotTargetJob)
        })}
      </div>

      {(triggers.hover_root ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ozoKh)}
        >
          <TwitterSvgrepoComsvgIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />

          <p.PlasmicLink
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link)}
            component={Link}
            href={args.url}
            platform={"nextjs"}
          >
            <div className={classNames(projectcss.all, sty.freeBox__muNjg)}>
              {p.renderPlasmicSlot({
                defaultContents: "Handle",
                value: args.handleText,
                className: classNames(sty.slotTargetHandleText)
              })}
            </div>
          </p.PlasmicLink>
        </p.Stack>
      ) : null}
      {(triggers.hover_root ? true : true) ? (
        <div className={classNames(projectcss.all, sty.freeBox__qTmz2)}>
          {p.renderPlasmicSlot({
            defaultContents: "Description",
            value: args.description,
            className: classNames(sty.slotTargetDescription)
          })}
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "h1", "svg", "link"],
  img: ["img"],
  h1: ["h1"],
  svg: ["svg"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTeamItemBox__ArgProps,
      internalVariantPropNames: PlasmicTeamItemBox__VariantProps
    });

    return PlasmicTeamItemBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeamItemBox";
  } else {
    func.displayName = `PlasmicTeamItemBox.${nodeName}`;
  }
  return func;
}

export const PlasmicTeamItemBox = Object.assign(
  // Top-level PlasmicTeamItemBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),
    svg: makeNodeComponent("svg"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicTeamItemBox
    internalVariantProps: PlasmicTeamItemBox__VariantProps,
    internalArgProps: PlasmicTeamItemBox__ArgProps
  }
);

export default PlasmicTeamItemBox;
/* prettier-ignore-end */
