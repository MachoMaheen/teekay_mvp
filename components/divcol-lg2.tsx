import type { NextPage } from "next";

export type DivcolLg2Type = {
  service03?: string;
  hackProtection?: string;
  png?: string;
};

const DivcolLg2: NextPage<DivcolLg2Type> = ({
  service03,
  hackProtection,
  png,
}) => {
  return (
    <div className="flex-1 flex flex-row items-center justify-center min-w-[109px] max-w-[1088px] ml-[-3.33px] text-left text-sm text-iteck-gatsbyvercelapp-cornflower-blue font-iteck-gatsbyvercelapp-inter-regular-144 mq1425:max-w-full">
      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[33px] pl-6 gap-[39px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
          <div className="relative leading-[19.6px] font-medium inline-block max-w-[224px]">
            {service03}
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-3xl text-iteck-gatsbyvercelapp-shark">
            <h3 className="m-0 relative text-inherit leading-[30.8px] font-bold font-inherit inline-block max-w-[224px] mq450:text-lg mq450:leading-[25px]">
              {hackProtection}
            </h3>
            <div className="h-12 relative text-sm leading-[23.8px] text-iteck-gatsbyvercelapp-dove-gray flex items-center max-w-[224px]">
              <span>
                <p className="m-0">Blocks infected website tracking</p>
                <p className="m-0">programs and annoying.</p>
              </span>
            </div>
          </div>
        </div>
        <img
          className="w-full h-[60px] relative max-w-[224px] overflow-hidden shrink-0 object-cover max-h-[60px]"
          loading="eager"
          alt=""
          src={png}
        />
      </div>
    </div>
  );
};

export default DivcolLg2;
