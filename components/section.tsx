import type { NextPage } from "next";
import { useCallback } from "react";
import Divinfo from "./divinfo";

const Section: NextPage = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer3Click = useCallback(() => {
    window.open("#0");
  }, []);

  const onLinkContainer4Click = useCallback(() => {
    window.open("");
  }, []);

  return (
    <section className="self-stretch bg-iteck-gatsbyvercelapp-athens-gray flex flex-row items-center justify-center p-[100px] box-border max-w-full shrink-0 text-left text-sm text-iteck-gatsbyvercelapp-cornflower-blue font-iteck-gatsbyvercelapp-inter-regular-144 mq950:py-[65px] mq950:px-[25px] mq950:box-border mq1425:pl-[50px] mq1425:pr-[50px] mq1425:box-border">
      <div className="w-[1170px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[70px] max-w-[1170px] mq950:gap-[70px] mq1425:gap-[70px] mq1425:max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center max-w-full shrink-0">
          <div className="flex-1 flex flex-col items-start justify-start py-0 px-[15px] box-border gap-[9.09px] min-w-[335px] max-w-[1170px] mq1425:max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.4000000059604645px]">
              {/* <div className="relative leading-[23.8px] inline-block max-w-[750px] mq950:max-w-full">
                News Feeds
              </div> */}
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.8999999761581421px] text-13xl text-iteck-gatsbyvercelapp-shark">
              <h1 className="m-0 relative text-inherit leading-[44.8px] font-bold font-inherit inline-block max-w-[750px] mq450:text-lgi mq450:leading-[27px] mq950:text-7xl mq950:leading-[36px] mq950:max-w-full">{`About`}</h1>
            </div>
          </div>
          <div className="w-[390px] flex flex-col items-end justify-center pt-0 px-[15px] pb-[32.20000076293945px] box-border max-w-[1170px] ml-[-6px] text-center text-xs text-iteck-gatsbyvercelapp-shark mq1425:max-w-full">
            <div
              className="rounded-781xl overflow-hidden flex flex-row items-start justify-center pt-[12.300000190734863px] px-[31px] pb-[13px] cursor-pointer border-[1px] border-solid border-iteck-gatsbyvercelapp-black-133"
              onClick={onLinkContainer3Click}
            >
              <div className="flex flex-col items-center justify-start pt-0 px-[9px] pb-[0.6899999976158142px] relative">
                <b className="relative leading-[20.4px] capitalize">
                  show more
                </b>
                {/* <div className="my-0 mx-[!important] absolute right-[-34px] bottom-[-5.4px] rounded-mini bg-iteck-gatsbyvercelapp-cornflower-blue flex flex-row items-center justify-center py-[7px] px-2 text-base-9 text-iteck-gatsbyvercelapp-nero font-iteck-gatsbyvercelapp-font-awesome-5-free-solid-1429">
                  <div className="flex flex-col items-center justify-start">
                    <div className="relative leading-[16px] capitalize"></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit mq450:text-base mq450:leading-[22px]">
            <p className="m-0">{`Teekay Consulting Group`}</p>
        </h3> */}
<div id="about" className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-[7px] pl-0 box-border max-w-full text-xl text-iteck-gatsbyvercelapp-shark">
    <div className="flex-1 flex flex-col items-start justify-start py-0 px-px ">
        <h2 className="mx-5 relative text-inherit leading-[28px] font-bold font-inherit mq450:text-base mq450:leading-[22px]">
            Teekay Consulting Group
            <span className="mx-1 text-iteck-gatsbyvercelapp-boulder px-1 font-normal">
                is a technology solutions integrator based out of Texas, USA with expertise in Enterprise Network Infrastructure, Cybersecurity, Collaboration, Cloud, Virtualization, Productivity solutions and Web/SEO applications. Teekay Consulting specializes in being a technology solutions provider and systems integrator, with an experienced team of engineers providing the best value to our clients. We focus on solving customer business problems by providing the best of breed technology solutions. Teekay Consulting Group has delivered numerous projects and solutions to our clients in Cybersecurity, Enterprise Networks, Collaboration, and Productivity solutions.
         
               
            </span>
            <br></br>
            <span className="mx-10 text-iteck-gatsbyvercelapp-boulder px-1 font-normal"> Teekay Consulting Group is a minority and women-owned business. We are a team of experienced engineers focused on helping our clients grow their business by solving their technology problems. Incorporating industry best practices and best-of-breed solutions, we aim to optimize the solutions to the clients’ needs and requirements. We value and respect our team and our clients and endeavor to unleash the power of building trust and long-term relationships within our team and our clients.</span>
        </h2>
    </div>
</div>

        
        {/* <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-[7px] pl-0 box-border max-w-full text-xl text-iteck-gatsbyvercelapp-shark">
          <div className="w-[488px] flex flex-row items-center justify-center max-w-[1170px] mq1425:max-w-full">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-[21px] pl-[15px] box-border max-w-full">
              <img
                className="h-full w-[146px] relative max-w-[146px] overflow-hidden max-h-[292.79998779296875px] object-cover min-w-[58px] min-h-[293px]"
                alt=""
                src="/18png-1@2x.png"
              />
              <Divinfo
                bestUnlockedMeAn="Best unlocked me an"
                strikingPerceive="striking perceive."
                onLinkContainer20Click={onLinkContainerClick}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center min-w-[335px] max-w-[1170px] ml-[-6px] mq1425:max-w-full">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-center py-0 pr-[5px] pl-0 box-border max-w-full">
              <div className="flex-[0.915] flex flex-row items-center justify-center py-0 pr-3.5 pl-[15px] box-border min-w-[136px] max-w-[682px] mq950:max-w-full">
                <div className="flex-1 flex flex-row flex-wrap items-center justify-center">
                  <Divinfo
                    bestUnlockedMeAn="The practice of blog's"
                    strikingPerceive="look, feel, branding"
                    propWidth="unset"
                    propMarginLeft="unset"
                    propFlex="1"
                    propPadding="unset"
                    propAlignSelf="stretch"
                    onLinkContainer20Click={onLinkContainer2Click}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-center min-w-[136px] max-w-[682px] z-[1] ml-[-5.1px] mq950:max-w-full">
                <div className="flex-1 flex flex-row flex-wrap items-center justify-center py-0 px-[15px] box-border max-w-full">
                  <div className="flex-1 bg-iteck-gatsbyvercelapp-nero flex flex-col items-center justify-start pt-[35px] px-[34px] pb-[34px] gap-[29px]">
                    <div className="self-stretch flex flex-col items-start justify-start py-0 px-px gap-[20px]">
                      <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit mq450:text-base mq450:leading-[22px]">
                        <p className="m-0">{`The readability & open`}</p>
                        <p className="m-0">functionality</p>
                      </h3>
                      <div className="h-24 relative text-sm leading-[23.8px] text-iteck-gatsbyvercelapp-boulder flex items-center max-w-[241.25px]">
                        <span>
                          <p className="m-0">
                            One of the most important WIP of a
                          </p>
                          <p className="m-0">
                            blog design is readability. An sure
                          </p>
                          <p className="m-0">
                            that the background and foreground
                          </p>
                          <p className="m-0">colors.</p>
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start text-mini-4 text-iteck-gatsbyvercelapp-dusty-gray">
                      <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[15px]">
                        <div className="relative leading-[21.6px] text-iteck-gatsbyvercelapp-shark inline-block max-w-[241.25px]">{`Nov 21, 2022 `}</div>
                        <div className="relative leading-[21.6px] inline-block max-w-[241.25px]">
                          |
                        </div>
                        <div
                          className="flex flex-row items-center justify-center cursor-pointer"
                          onClick={onLinkContainer4Click}
                        >
                          <a
                            className="relative leading-[21.6px] [text-decoration:none] text-[inherit]"
                            href=""
                            target="_blank"
                          >
                            <span>By</span>
                            <span className="text-iteck-gatsbyvercelapp-shark">
                              {" "}
                              Admin
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Section;
