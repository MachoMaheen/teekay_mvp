import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DivcolLg1Type = {
  png?: string;
  founder?: string;
  rosalinaDWilliam?: string;

  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const DivcolLg1: NextPage<DivcolLg1Type> = ({
  png,
  founder,
  rosalinaDWilliam,
  propMarginLeft,
  propBackgroundColor,
  propWidth,
  propPadding,
}) => {
  const divcolLg4Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const spanbgColorStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const divsocialIconsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div
      className="h-[499px] flex-1 flex flex-row items-center justify-center min-w-[160px] max-w-[1200px] text-center text-mini-3 text-iteck-gatsbyvercelapp-shark font-iteck-gatsbyvercelapp-font-awesome-5-free-solid-1429 mq1425:max-w-full"
      style={divcolLg4Style}
    >
      <div className="self-stretch w-[380px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[40px] max-w-full mq450:gap-[40px]">
        <div className="self-stretch flex-1 rounded-t-none rounded-br-161xl rounded-bl-none overflow-hidden flex flex-col items-center justify-start relative">
          <div
            className="w-full h-[350px] absolute my-0 mx-[!important] right-[0%] bottom-[0px] left-[0%] rounded-tl-131xl rounded-tr-none rounded-b-none bg-iteck-gatsbyvercelapp-cream-can"
            style={spanbgColorStyle}
          />
          <div className="w-[306px] flex-1 flex flex-row items-start justify-end py-20 px-[3px] box-border relative">
            <img
              className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-[340px] overflow-hidden max-h-[400px] object-cover z-[1]"
              alt=""
              src={png}
            />
            <div
              className="w-[50px] rounded-31xl bg-iteck-gatsbyvercelapp-nero overflow-hidden shrink-0 flex flex-row items-center justify-center z-[2]"
              style={divsocialIconsStyle}
            >
              <div className="relative leading-[50px]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start text-left text-sm text-iteck-gatsbyvercelapp-cornflower-blue font-iteck-gatsbyvercelapp-inter-regular-144">
          <div className="relative leading-[23.8px] capitalize inline-block max-w-[340px]">
            {founder}
          </div>
          <h2 className="m-0 relative text-5xl leading-[33.6px] font-bold font-inherit text-iteck-gatsbyvercelapp-shark inline-block max-w-[340px] mq450:text-lgi mq450:leading-[27px]">
            {rosalinaDWilliam}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DivcolLg1;
