import type { NextPage } from "next";
import { useCallback } from "react";
import Header from "../components/header";
import HeaderFrame from "../components/header-frame";
import Section2 from "../components/section2";
import Section1 from "../components/section1";
import FrameShape from "../components/frame-shape";
import Section from "../components/section";
import Footer from "../components/footer";

const IteckGatsbyvercelappByHtm: NextPage = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("");
  }, []);

  return (
    <div className="w-full  relative flex flex-col items-center justify-start tracking-[normal]">
      <Header />
      <HeaderFrame />
      <section className="w-[1210px] flex flex-row items-start justify-start pt-0 px-5 pb-[100px] box-border max-w-full shrink-0 text-left text-base text-iteck-gatsbyvercelapp-dove-gray font-iteck-gatsbyvercelapp-inter-regular-144 mq950:pb-[65px] mq950:box-border">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[736px] w-[734px] absolute my-0 mx-[!important] top-[calc(50%_-_371.3px)] left-[-375px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/about10-patternpng@2x.png"
          />
          <div className="flex-1 flex flex-row items-center justify-center max-w-[1170px] z-[1] mq1425:max-w-full">
            <div className="flex-1 flex flex-row flex-wrap items-center justify-start py-0 pr-1.5 pl-0 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start py-0 px-[7px] box-border min-w-[335px] max-w-[1170px] mq1425:max-w-full">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[60px] px-2 pb-0 box-border gap-[16px] min-w-[114px] max-w-[571px] mq950:pt-[39px] mq950:box-border mq950:max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <img
                        className="w-[269px] h-[270px] relative overflow-hidden shrink-0 object-cover max-w-[269.5px] max-h-[270px]"
                        loading="eager"
                        alt=""
                        src="/about-10-1jpg@2x.png"
                      />
                    </div>
                    <div className="self-stretch h-[190px] flex flex-col items-start justify-center">
                      <img
                        className="w-full flex-1 relative max-w-[269.5px] overflow-hidden max-h-[190px] object-cover"
                        loading="eager"
                        alt=""
                        src="/about2-2png@2x.png"
                      />
                    </div>
                  </div>
                  <div className="h-[536px] flex-1 flex flex-col items-start justify-start pt-0 px-2 pb-10 box-border gap-[16px] min-w-[114px] max-w-[571px] ml-[-6px] mq950:max-w-full">
                    <div className="self-stretch h-40 flex flex-col items-start justify-center">
                      <img
                        className="w-full flex-1 relative max-w-[269.5px] overflow-hidden max-h-[160px] object-cover"
                        loading="eager"
                        alt=""
                        src="/about-10-2jpg@2x.png"
                      />
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-center">
                      <img
                        className="w-full flex-1 relative max-w-[269.5px] overflow-hidden max-h-[320px] object-cover"
                        loading="eager"
                        alt=""
                        src="/about-10-3jpg@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[0.8301] flex flex-col items-start justify-start py-5 pr-[46px] pl-[65px] box-border gap-[50px] min-w-[335px] max-w-[1170px] ml-[-6px] mq950:gap-[50px] mq950:pl-8 mq950:pr-[23px] mq950:box-border mq1425:max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] shrink-0">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-sm text-iteck-gatsbyvercelapp-cornflower-blue">
                    <div className="relative leading-[19.6px] inline-block max-w-[505px] mq950:max-w-full">
                      Since From 2000
                    </div>
                    <h1 className="m-0 h-28 relative text-21xl leading-[56px] font-bold font-inherit text-iteck-gatsbyvercelapp-shark flex items-center max-w-[505px] mq450:text-5xl mq450:leading-[34px] mq950:text-13xl mq950:leading-[45px] mq950:max-w-full">
                      <span>
                        <p className="m-0">We Provide Professional</p>
                        <p className="m-0">Security Solutions</p>
                      </span>
                    </h1>
                  </div>
                  <div className="h-[55px] relative leading-[27.2px] flex items-center max-w-[505px] mq950:max-w-full">
                    <span>
                      <p className="m-0">
                        Cybersecurity is the practice of protecting systems,
                        networks,
                      </p>
                      <p className="m-0">and programs from digital attacks.</p>
                    </span>
                  </div>
                  <div className="h-[82px] relative leading-[27.2px] flex items-center max-w-[505px] mq950:max-w-full">
                    <span>
                      <p className="m-0">
                        These cyberattacks are usually aimed at accessing,
                        changing,
                      </p>
                      <p className="m-0">
                        or destroying sensitive information; extorting money
                        from user
                      </p>
                      <p className="m-0">
                        or interrupting normal business processes.
                      </p>
                    </span>
                  </div>
                </div>
                {/* <div
                  className="rounded-781xl bg-iteck-gatsbyvercelapp-cornflower-blue overflow-hidden flex flex-row items-start justify-center pt-[12.300000190734863px] px-[31px] pb-[13px] cursor-pointer text-center text-xs text-iteck-gatsbyvercelapp-nero"
                  onClick={onLinkContainerClick}
                >
                  <div className="flex flex-col items-center justify-start pt-0 px-2.5 pb-[0.6899999976158142px] relative">
                    <a
                      className="relative leading-[20.4px] capitalize font-bold text-[inherit] [text-decoration:none] whitespace-nowrap"
                      href=""
                      target="_blank"
                    >
                      Learn More
                    </a>
                    <div className="my-0 mx-[!important] absolute right-[-33px] bottom-[-5.3px] rounded-mini bg-iteck-gatsbyvercelapp-nero flex flex-row items-center justify-center py-[7px] px-2 text-base-9 text-iteck-gatsbyvercelapp-black font-iteck-gatsbyvercelapp-font-awesome-5-free-solid-1429">
                      <div className="flex flex-col items-center justify-start">
                        <a
                          className="relative leading-[16px] capitalize text-[inherit] [text-decoration:none]"
                          href=""
                          target="_blank"
                        >
                          
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section2 />
      <Section1 />
      {/* <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[100px] box-border gap-[101px] max-w-full shrink-0 mq450:pb-5 mq450:box-border mq950:gap-[101px] mq950:pb-[27px] mq950:box-border mq1425:gap-[101px] mq1425:pb-[42px] mq1425:box-border">
        <Section1 />
        <FrameShape />
      </section> */}
      <Section />
      <Footer />
    </div>
  );
};

export default IteckGatsbyvercelappByHtm;
