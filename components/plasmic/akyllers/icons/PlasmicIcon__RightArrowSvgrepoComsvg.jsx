// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function RightArrowSvgrepoComsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 330 330"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 180h263.787l-49.394 49.394c-5.858 5.857-5.858 15.355 0 21.213C232.322 253.535 236.161 255 240 255s7.678-1.465 10.606-4.394l75-75c5.858-5.857 5.858-15.355 0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213L278.787 150H15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
        }
      ></path>
    </svg>
  );
}

export default RightArrowSvgrepoComsvgIcon;
/* prettier-ignore-end */
