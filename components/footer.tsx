import type { NextPage } from "next";
import { useCallback } from "react";
import DivcolLg from "./divcol-lg";

const Footer: NextPage = () => {
  const onLinkClick = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainerClick = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer1Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer3Click = useCallback(() => {
    window.open("");
  }, []);

  return (
    <footer className="self-stretch bg-iteck-gatsbyvercelapp-black flex flex-row items-center justify-center relative max-w-full text-left text-xl text-iteck-gatsbyvercelapp-dove-gray font-iteck-gatsbyvercelapp-inter-regular-144">
      <img
        className="h-full w-full absolute my-0 mx-[!important] top-[0.3px] right-[0px] bottom-[-0.3px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/footer-10-patternpng@2x.png"
      />
      <div className="w-[1210px] flex flex-col items-start justify-start pt-0 px-5 pb-10 box-border gap-[40px] max-w-[1170px] z-[1] mq950:gap-[40px] mq1425:max-w-full">
        <div className="self-stretch overflow-hidden flex flex-col items-end justify-start pt-[100px] px-0 pb-0 box-border gap-[100px] max-w-full mq950:gap-[100px] mq1425:gap-[100px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border max-w-full">
            <div className="w-[1173px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-[101%] shrink-0">
              <div className="w-[1189px] flex flex-row items-start justify-start gap-[1px] max-w-[101%] shrink-0 mq1425:flex-wrap">
                <DivcolLg
                  headOffice="Head Office"
                  aNewBooston="9301 Southwest Freeway "
                  address_1="Suite 405"
                  city="Houston, Texas 77074 "
                  nYCInfowebmailcom="consult@teekaycs.com"
                />
                <div className="h-[125px] flex-1 relative min-w-[515px] max-w-full text-iteck-gatsbyvercelapp-nero mq450:h-auto mq450:min-h-[125] mq950:min-w-full">
                  {/* <DivcolLg
                    headOffice="Sub Office"
                    aNewBooston="Pablo Hemilton Tower, Tokyo"
                    nYCInfowebmailcom="jobs@example.com"
                    propMinWidth="unset"
                    propPosition="absolute"
                    propTop="0px"
                    propLeft="-0.5px"
                    propBorderTop="1px solid rgba(255, 255, 255, 0.13)"
                  /> */}
                  <div className="absolute top-[-0.3px] left-[396px] w-[397px] flex flex-col items-center justify-start pt-0 pb-3 pr-[23px] pl-[123px] box-border gap-[30px] max-w-[1287px] z-[1] mq1425:max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <h3 className="m-0 relative text-inherit leading-[20px] font-bold font-inherit inline-block max-w-[249px] mq450:text-base mq450:leading-[16px]">
                        Get Newsletter
                      </h3>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[4px] text-mini-3 font-iteck-gatsbyvercelapp-font-awesome-5-free-solid-1429">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px] [row-gap:20px] border-b-[1px] border-solid border-iteck-gatsbyvercelapp-nero-133 mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-[3.299999952316284px] pb-[5.909999847412109px] pr-[5px] pl-0">
                          <div className="relative leading-[14.4px]">
                            {/* <img src="/email-10-xxl.png" className="relative" alt="" /> */}
                          
                            </div>
                        </div>
                        {/* <div className="flex-1 flex flex-col items-start justify-start pt-[3.009999990463257px] px-0.1 pb-[3.5999999046325684px] box-border min-w-[96px] text-mini-4 text-iteck-gatsbyvercelapp-dusty-gray-60 font-iteck-gatsbyvercelapp-inter-regular-144">
                          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                            <div className="relative inline-block max-w-[145.47999572753906px]">
                              Email address
                            </div>
                          </div>
                        </div> */}
                        <input
                            className="flex-1 flex flex-col items-start justify-start pt-[3.009999990463257px] px-0.1 pb-[3.5999999046325684px] box-border min-w-[96px] text-mini-4 text-iteck-gatsbyvercelapp-dusty-gray-60 font-iteck-gatsbyvercelapp-inter-regular-144 transparent-input"
                            type="text"
                            placeholder="Email address"
                        />
                        <button className="cursor-pointer [border:none] py-px px-1.5 bg-[transparent] flex flex-col items-center justify-start">
                          <div className="relative text-mini-4 leading-[21.6px] font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-cornflower-blue text-center">
                            Subscribe
                          </div>
                        </button>
                      </div>
                      <div className="relative text-sm leading-[23.8px] font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-tundora inline-block max-w-[249px]">
                        ** We are not going to save data
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative [background:linear-gradient(90deg,_rgba(0,_0,_0,_0),_rgba(255,_255,_255,_0.13)_25%,_rgba(255,_255,_255,_0.13)_50%,_rgba(255,_255,_255,_0.13)_75%,_rgba(0,_0,_0,_0))]" />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center max-w-full text-center text-mini-4 text-iteck-gatsbyvercelapp-nero">
          <div className="w-[292px] flex flex-col items-start justify-start py-0 px-[15px] box-border max-w-[1170px] mq1425:max-w-full">
            <button
              className="cursor-pointer [border:none] py-[5px] px-0 bg-[transparent] flex flex-row items-center justify-start"
              onClick={onLinkClick}
            >
              <img
                className="h-[46.4px] w-[170px] relative overflow-hidden shrink-0 object-cover max-w-[170px] max-h-[56.41999816894531px]"
                alt=""
                src="/logo-10png-1@2x.png"
              />
            </button>
          </div>
          {/* <div className="flex-1 flex flex-col items-start justify-start py-0 px-[15px] box-border min-w-[335px] max-w-[1170px] ml-[-4px] mq1425:max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[121px] pl-[122.9800033569336px] gap-[20px] mq450:pl-5 mq450:pr-5 mq450:box-border mq950:flex-wrap mq950:pl-[61px] mq950:pr-[60px] mq950:box-border">
              <div className="flex flex-row items-start justify-center pt-0 px-0 pb-[0.3100000023841858px]">
                <a
                  className="relative leading-[21.6px] text-[inherit] [text-decoration:none]"
                  href=""
                  target="_blank"
                >
                  About
                </a>
              </div>
              <div className="flex flex-row items-start justify-center pt-0 px-0 pb-[0.3100000023841858px]">
                <a
                  className="relative leading-[21.6px] text-[inherit] [text-decoration:none]"
                  href=""
                  target="_blank"
                >
                  Career
                </a>
              </div>
              <div className="flex flex-row items-start justify-center pt-0 px-0 pb-[0.3100000023841858px]">
                <a
                  className="relative leading-[21.6px] text-[inherit] [text-decoration:none]"
                  href=""
                  target="_blank"
                >
                  Faq
                </a>
              </div>
              <div className="flex flex-row items-start justify-center pt-0 px-0 pb-[0.3100000023841858px]">
                <a
                  className="relative leading-[21.6px] text-[inherit] [text-decoration:none]"
                  href=""
                  target="_blank"
                >
                  Insights
                </a>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col items-start justify-start py-0 px-[15px] box-border max-w-[1170px] z-[1] ml-[-4px] font-iteck-gatsbyvercelapp-font-awesome-5-brands-regular-144 mq1425:max-w-full">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[87.5px] gap-[5px] mq450:pl-5 mq450:box-border">
              <div
                className="rounded-8xs flex flex-row items-start justify-end pt-[13.300000190734863px] pb-[12.300000190734863px] pr-[13px] pl-[15px] cursor-pointer border-[1px] border-solid border-iteck-gatsbyvercelapp-nero-20"
                onClick={onLinkContainerClick}
              >
                <div className="relative leading-[14.4px]"></div>
              </div>
              <div
                className="rounded-8xs flex flex-row items-start justify-end pt-[13.300000190734863px] pb-[12.300000190734863px] pr-[12.8100004196167px] pl-3 cursor-pointer border-[1px] border-solid border-iteck-gatsbyvercelapp-nero-20"
                onClick={onLinkContainer1Click}
              >
                <div className="relative leading-[14.4px]"></div>
              </div>
              <div
                className="rounded-8xs flex flex-row items-start justify-end pt-[13.300000190734863px] pb-[12.300000190734863px] pr-[11.90999984741211px] pl-[11px] cursor-pointer border-[1px] border-solid border-iteck-gatsbyvercelapp-nero-20"
                onClick={onLinkContainer2Click}
              >
                <div className="relative leading-[14.4px]"></div>
              </div>
              <div
                className="rounded-8xs flex flex-row items-start justify-end pt-[13.300000190734863px] pb-[12.300000190734863px] pr-[11.90999984741211px] pl-[11px] cursor-pointer border-[1px] border-solid border-iteck-gatsbyvercelapp-nero-20"
                onClick={onLinkContainer3Click}
              >
                <a
                  className="relative leading-[14.4px] text-[inherit] [text-decoration:none]"
                  href=""
                  target="_blank"
                >
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
