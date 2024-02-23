import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DivcolLg3Type = {
  service01?: string;
  firewallVPN?: string;
  png?: string;

  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
};

const DivcolLg3: NextPage<DivcolLg3Type> = ({
  service01,
  firewallVPN,
  png,
  propMarginLeft,
}) => {
  const divcolLg3Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div
      className="flex-1 flex flex-row items-center justify-center min-w-[109px] max-w-[1088px] text-left text-sm text-iteck-gatsbyvercelapp-cornflower-blue font-iteck-gatsbyvercelapp-inter-regular-144 mq1425:max-w-full"
      style={divcolLg3Style}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-6 pb-[99px] relative gap-[10px]">
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
          <div className="relative leading-[19.6px] font-medium inline-block max-w-[224px]">
            {service01}
          </div>
        </div>
        <h3 className="m-0 relative text-3xl leading-[30.8px] font-bold font-inherit text-iteck-gatsbyvercelapp-shark inline-block max-w-[224px] mq450:text-lg mq450:leading-[25px]">
          {firewallVPN}
        </h3>
        <div className="h-12 relative leading-[23.8px] text-iteck-gatsbyvercelapp-dove-gray flex items-center max-w-[224px]">
          <span>
            <p className="m-0">Blocks infected website tracking</p>
            <p className="m-0">programs and annoying.</p>
          </span>
        </div>
        <img
          className="w-[75px] h-[60px] absolute my-0 mx-[!important] bottom-[-0.7px] left-[24px] overflow-hidden shrink-0 object-cover max-w-[224px] max-h-[60px]"
          loading="eager"
          alt=""
          src={png}
        />
      </div>
    </div>
  );
};

export default DivcolLg3;
