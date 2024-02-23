import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DivcolLg4Type = {
  png?: string;
  linkCriticalInfrastructur?: string;
  aIDataCloudSolution?: string;

  /** Style props */
  propBorderRight?: CSSProperties["borderRight"];
};

const DivcolLg4: NextPage<DivcolLg4Type> = ({
  png,
  linkCriticalInfrastructur,
  aIDataCloudSolution,
  propBorderRight,
}) => {
  const divfeatCardStyle: CSSProperties = useMemo(() => {
    return {
      borderRight: propBorderRight,
    };
  }, [propBorderRight]);

  return (
    <div className="flex-1 flex flex-row items-center justify-center min-w-[365px] max-w-[1920px] ml-[-3.33px] text-left text-base text-iteck-gatsbyvercelapp-dusty-gray font-iteck-gatsbyvercelapp-inter-regular-144 mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full">
      <div
        className="flex-1 box-border flex flex-col items-start justify-end py-[52px] px-[53px] relative gap-[19px] min-h-[366px] max-w-full border-r-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-333 mq950:pl-[26px] mq950:pr-[26px] mq950:box-border"
        style={divfeatCardStyle}
      >
        <img
          className="w-[75px] h-[75px] absolute my-0 mx-[!important] top-[53.2px] left-[53.73px] overflow-hidden shrink-0 object-cover max-w-[372.2200012207031px] max-h-[75px]"
          loading="eager"
          alt=""
          src={png}
        />
        <div className="flex flex-col items-start justify-start gap-[5px]">
          <a
            className="relative leading-[24px] text-[inherit] [text-decoration:none]"
            href=""
            target="_blank"
          >
            {linkCriticalInfrastructur}
          </a>
          <h2 className="m-0 relative text-5xl leading-[33.6px] font-bold font-inherit text-iteck-gatsbyvercelapp-shark inline-block max-w-[372.2200012207031px] mq450:text-lgi mq450:leading-[27px]">
            {aIDataCloudSolution}
          </h2>
        </div>
        <div className="h-[72px] relative text-sm leading-[23.8px] text-iteck-gatsbyvercelapp-dove-gray flex items-center max-w-[372.2200012207031px]">
          <span>
            <p className="m-0">
              Get insights from real breaches in the cost secure data
            </p>
            <p className="m-0">
              breach report. Proactively detect and resolve data
            </p>
            <p className="m-0">quality issues.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DivcolLg4;
