import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DivcolLgType = {
  headOffice?: string;
  aNewBooston?: string;
  address_1?: string;
  city?: string;
  nYCInfowebmailcom?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propBorderTop?: CSSProperties["borderTop"];
};

const DivcolLg: NextPage<DivcolLgType> = ({
  headOffice,
  aNewBooston,
  address_1,
    city,
  nYCInfowebmailcom,
  propMinWidth,
  propPosition,
  propTop,
  propLeft,
  propBorderTop,
}) => {
  const divcolLg41Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propMinWidth, propPosition, propTop, propLeft]);

  const divinfoCardStyle: CSSProperties = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  return (
    <div
      className="w-[396px] flex flex-col items-start justify-start py-0 px-6 box-border min-w-[396px] max-w-[1188px] text-left text-xl text-iteck-gatsbyvercelapp-dove-gray font-iteck-gatsbyvercelapp-inter-regular-144 mq950:min-w-full mq1425:w-full mq1425:max-w-full"
      style={divcolLg41Style}
    >
      <div
        className="self-stretch flex flex-col items-start justify-start pt-[31px] px-0 pb-0 gap-[10px] border-t-[1px] border-solid border-iteck-gatsbyvercelapp-cornflower-blue"
        style={divinfoCardStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start">
          <h3 className="m-0 relative text-inherit leading-[28px] capitalize font-normal font-inherit inline-block max-w-[348px] mq450:text-base mq450:leading-[22px]">
            {headOffice}
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-iteck-gatsbyvercelapp-nero">
          <h3 className="m-0 relative text-inherit leading-[28px] font-medium font-inherit inline-block max-w-[348px] mq450:text-base mq450:leading-[22px]">
            <p className="m-0">{aNewBooston}</p>
            <p className="m-0">{address_1}</p>
            <p className="m-0">{city}</p>
            <a href={`mailto:${nYCInfowebmailcom}`} className="m-0">
              {nYCInfowebmailcom}
            </a>
            {/* <p className="m-0">{nYCInfowebmailcom}</p> */}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DivcolLg;
