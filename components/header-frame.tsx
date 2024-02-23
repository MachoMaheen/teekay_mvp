import type { NextPage } from "next";
import DivcolLg4 from "./divcol-lg4";

const HeaderFrame: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[101px] box-border max-w-full shrink-0 text-left text-base text-iteck-gatsbyvercelapp-dusty-gray font-iteck-gatsbyvercelapp-inter-regular-144 mq950:pb-[66px] mq950:box-border">
      <div className="flex-1 box-border flex flex-row items-center justify-center pt-0 px-0 pb-px max-w-full border-b-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-333">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-2.5 pl-0 box-border max-w-full">
          <div className="flex-1 flex flex-row items-center justify-center min-w-[365px] max-w-[1920px] mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full">
            <div className="flex-1 box-border flex flex-col items-center justify-end py-[52px] pr-16 pl-[52px] relative gap-[19px] min-h-[366px] max-w-full border-r-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-333 mq950:pl-[26px] mq950:pr-8 mq950:box-border">
              <img
                className="w-[75px] h-[75px] absolute my-0 mx-[!important] top-[53.3px] left-[53.4px] overflow-hidden shrink-0 object-cover max-w-[372.2200012207031px] max-h-[75px]"
                loading="eager"
                alt=""
                src="/18png@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <a
                    className="relative leading-[24px] text-[inherit] [text-decoration:none]"
                    href=""
                    target="_blank"
                  >
                    Application Insfrastructure
                  </a>
                  <h2 className="m-0 relative text-5xl leading-[33.6px] font-bold font-inherit text-iteck-gatsbyvercelapp-shark inline-block max-w-[372.2200012207031px] mq450:text-lgi mq450:leading-[27px]">
                    Analysis Core Software
                  </h2>
                </div>
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
          <div className="flex-1 flex flex-row items-center justify-center min-w-[365px] max-w-[1920px] ml-[-3.33px] mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full">
            <div className="flex-1 box-border flex flex-col items-start justify-start pt-[54px] px-[54px] pb-[52px] gap-[19px] max-w-full border-r-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-333 mq450:pt-[23.333333333333332px] mq450:pb-[34px] mq450:box-border mq950:pl-[27px] mq950:pr-[27px] mq950:box-border">
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                <img
                  className="h-[75px] w-[75px] relative overflow-hidden shrink-0 object-cover max-w-[372.2200012207031px] max-h-[75px]"
                  loading="eager"
                  alt=""
                  src="/19png@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <a
                  className="relative leading-[24px] text-[inherit] [text-decoration:none]"
                  href=""
                  target="_blank"
                >
                  Application Security
                </a>
                <h2 className="m-0 relative text-5xl leading-[33.6px] font-bold font-inherit text-iteck-gatsbyvercelapp-shark inline-block max-w-[372.2200012207031px] mq450:text-lgi mq450:leading-[27px]">
                  Alert Pro Version
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
          <DivcolLg4
            png="/20png@2x.png"
            linkCriticalInfrastructur="Critical Infrastructure Security"
            aIDataCloudSolution="AI Data Cloud Solution"
          />
          <DivcolLg4
            png="/21png@2x.png"
            linkCriticalInfrastructur="Online Support"
            aIDataCloudSolution="24/7 Online Support"
            propBorderRight="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderFrame;
