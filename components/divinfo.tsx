import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DivinfoType = {
  bestUnlockedMeAn?: string;
  strikingPerceive?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];

  /** Action props */
  onLinkContainer20Click?: () => void;
};

const Divinfo: NextPage<DivinfoType> = ({
  bestUnlockedMeAn,
  strikingPerceive,
  propWidth,
  propMarginLeft,
  propFlex,
  propPadding,
  propAlignSelf,
  onLinkContainer20Click,
}) => {
  const divinfoStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      marginLeft: propMarginLeft,
      flex: propFlex,
    };
  }, [propWidth, propMarginLeft, propFlex]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propPadding, propAlignSelf]);

  return (
    <div
      className="w-[312px] bg-iteck-gatsbyvercelapp-nero flex flex-col items-center justify-start pt-[35px] px-[34px] pb-[34px] box-border gap-[29px] ml-[-6px] text-left text-xl text-iteck-gatsbyvercelapp-shark font-iteck-gatsbyvercelapp-inter-regular-144"
      style={divinfoStyle}
    >
      <div
        className="flex flex-col items-start justify-start py-0 px-px gap-[20px]"
        style={buttonStyle}
      >
        <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit mq450:text-base mq450:leading-[22px]">
          <p className="m-0">{bestUnlockedMeAn}</p>
          <p className="m-0">{strikingPerceive}</p>
        </h3>
        <div className="h-24 relative text-sm leading-[23.8px] text-iteck-gatsbyvercelapp-boulder flex items-center max-w-[241.08999633789062px]">
          <span>
            <p className="m-0">One of the most important WIP of a</p>
            <p className="m-0">blog design is readability. An sure</p>
            <p className="m-0">that the background and foreground</p>
            <p className="m-0">colors.</p>
          </span>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start text-mini-4 text-iteck-gatsbyvercelapp-dusty-gray">
        <div className="flex flex-row items-start justify-start gap-[17px]">
          <div className="relative leading-[21.6px] text-iteck-gatsbyvercelapp-shark inline-block max-w-[241.08999633789062px]">
            <a
              className="text-[inherit]"
              href=""
              target="_blank"
            >
              Nov 21, 2022
            </a>
          </div>
          <div className="relative leading-[21.6px] inline-block max-w-[241.08999633789062px]">
            |
          </div>
          <div
            className="flex flex-row items-center justify-center cursor-pointer"
            onClick={onLinkContainer20Click}
          >
            <a
              className="relative leading-[21.6px] [text-decoration:none] text-[inherit]"
              href=""
              target="_blank"
            >
              <span>By</span>
              <span className="text-iteck-gatsbyvercelapp-shark"> Admin</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divinfo;
