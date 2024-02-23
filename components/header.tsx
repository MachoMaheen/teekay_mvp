import type { NextPage } from "next";
import { useCallback } from "react";

const Header: NextPage = () => {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  const onLinkContainerClick = useCallback(() => {
    window.open("");
  }, []);

  const onButtonContainerClick = useCallback(() => {
    window.open("");
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("#0");
  }, []);

  const onLinkContainer3Click = useCallback(() => {
    window.open("#0");
  }, []);

  const onLinkContainer4Click = useCallback(() => {
    window.open("#0");
  }, []);

  const onLinkContainer1Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer5Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer6Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer7Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer8Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer9Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer10Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer11Click = useCallback(() => {
    window.open("");
  }, []);

  return (
    <section
      id="home"
      className="self-stretch flex flex-col items-center justify-start pt-2 px-0 pb-0 box-border gap-[8px]  bg-[url('/header@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 text-left text-sm text-iteck-gatsbyvercelapp-nero font-iteck-gatsbyvercelapp-inter-regular-144"
    >
      <header className="w-full box-border flex flex-row items-center justify-start pt-5 px-[15px] pb-[21px] max-w-[1170px] top-[0] z-[99] sticky text-left text-sm text-iteck-gatsbyvercelapp-nero font-iteck-gatsbyvercelapp-inter-regular-144 border-b-[1px] border-solid border-iteck-gatsbyvercelapp-nero-133 mq1425:max-w-full mq1425:w-[calc(100%_-_40px)]">
        <div className="flex flex-col items-start justify-start py-0 pr-4 pl-0">
          <div
            className="flex flex-row items-center justify-center py-[5px] px-0 cursor-pointer"
            onClick={onLinkContainerClick}
          >
            <img
              className="h-[43.7px] w-40 relative overflow-hidden shrink-0 object-cover max-w-[160px] max-h-[53.689998626708984px]"
              loading="eager"
              alt=""
              src="/logo-10png@2x.png"
            />
          </div>
        </div>
        {/* <div className="flex-1 flex flex-row items-start justify-center py-[15px] pr-5 pl-[45px] box-border gap-[38px] min-w-[484.0199890136719px] max-w-full mq950:gap-[38px] mq950:pl-[22px] mq950:box-border"> */}
        <div className="flex-1 flex flex-row items-start justify-center py-[15px] pr-5 pl-[45px] box-border gap-[80px] min-w-[484.0199890136719px] max-w-full mq950:gap-[38px] mq950:pl-[22px] mq950:box-border">
          <div
            className="flex flex-row items-end justify-start pt-0 px-0 pb-px gap-[3px] cursor-pointer border-b-[1px] border-solid border-iteck-gatsbyvercelapp-nero"
            onClick={() => scrolltoHash("home")}
          >
            <a
              className="relative leading-[21px] capitalize font-bold text-[inherit] [text-decoration:none]"
              href=""
            >
              Home
            </a>
          
          </div>
          {/* <div
            className="flex flex-row items-end justify-start pt-0 px-0 pb-px gap-[3px] cursor-pointer"
            onClick={onButtonContainer1Click}
          >
            <b className="relative leading-[21px] capitalize">pages</b>
            
          </div> */}
          <div onClick={() => scrolltoHash("about")}>
            <b className="relative leading-[21px] capitalize">about</b>
          </div>
          {/* <b className="relative leading-[21px] capitalize">blog</b> */}
          <div onClick={() => scrolltoHash("contact")}>
            <b className="relative leading-[21px] capitalize">contact</b>
          </div>
         
        </div>
        {/* <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-col items-start justify-start py-0 pr-6 pl-0">
              <div
                className="flex flex-col items-start justify-center pt-[2.0799999237060547px] px-0 pb-0 cursor-pointer"
                onClick={onLinkContainer2Click}
              >
                <img
                  className="w-[18px] h-5 relative overflow-hidden shrink-0 object-cover max-w-[18px] max-h-[22.079999923706055px]"
                  alt=""
                  src="/user-lightpng@2x.png"
                />
              </div>
            </div>
            <div
              className="flex flex-col items-start justify-center pt-[2.0799999237060547px] px-0 pb-0 cursor-pointer"
              onClick={onLinkContainer3Click}
            >
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0 object-cover max-w-[20px] max-h-[22.079999923706055px]"
                alt=""
                src="/4dots-lightpng@2x.png"
              />
            </div>
          </div>
        </div> */}
      </header>
      <div className="w-full flex flex-col items-center justify-start pt-[50px] px-5 pb-0 box-border gap-[1px] max-w-[1170px] shrink-0 mq450:pt-[21px] mq450:box-border mq950:pt-8 mq950:box-border mq1425:max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-[116px] px-[15px] box-border relative max-w-full shrink-0 mq950:pt-[75px] mq950:pb-[75px] mq950:box-border">
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[50px] max-w-[1140px] mq950:gap-[50px] mq1425:max-w-full">
            <div className="flex flex-col items-start justify-start gap-[14px] shrink-0">
              <div className="relative leading-[19.6px] capitalize inline-block max-w-[570px] mq950:max-w-full">
                From The Market Ieaders
              </div>
              <h1 className="m-0 h-[205px] relative text-54xl leading-[102.2px] font-bold font-inherit flex items-center max-w-[570px] mq450:text-25xl mq450:leading-[61px] mq950:text-39xl mq950:leading-[82px] mq950:max-w-full">
                <span>
                  <p className="m-0">Trusted Data</p>
                  <p className="m-0">For Every Users</p>
                </span>
              </h1>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-[177px] pl-0 gap-[24px] text-center text-xs mq450:pr-5 mq450:box-border mq950:flex-wrap mq950:pr-[88px] mq950:box-border">
              <div
                className="rounded-781xl bg-iteck-gatsbyvercelapp-cornflower-blue overflow-hidden flex flex-row items-start justify-center pt-[12.300000190734863px] px-[31px] pb-[13px] cursor-pointer"
                onClick={onLinkContainer4Click}
              >
                <div className="flex flex-col items-center justify-start pt-0 px-2.5 pb-[0.6899999976158142px] relative">
                  <a
                    className="relative leading-[20.4px] capitalize font-bold text-[inherit] [text-decoration:none]"
                    href="#0"
                    target="_blank"
                  >
                    Request For Demo
                  </a>
                  {/* <div className="my-0 mx-[!important] absolute right-[-33px] bottom-[-5.1px] rounded-mini bg-iteck-gatsbyvercelapp-nero flex flex-row items-center justify-center py-[7px] px-2 text-base-9 text-iteck-gatsbyvercelapp-black font-iteck-gatsbyvercelapp-font-awesome-5-free-solid-1429">
                    <div className="flex flex-col items-center justify-start">
                      <a
                        className="relative leading-[16px] capitalize text-[inherit] [text-decoration:none]"
                        href="#0"
                        target="_blank"
                      >
                        
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
              <div
                className="rounded-781xl overflow-hidden flex flex-row items-start justify-center pt-[12.300000190734863px] px-[31px] pb-[13px] cursor-pointer border-[1px] border-solid border-iteck-gatsbyvercelapp-nero-267"
                onClick={onLinkContainer1Click}
              >
                <div className="flex flex-col items-center justify-start pt-0 px-[9px] pb-[0.6899999976158142px] relative">
                  <a
                    className="relative leading-[20.4px] capitalize font-bold text-[inherit] [text-decoration:none]"
                    href="#0"
                    target="_blank"
                  >
                    Get Started Now
                  </a>
                  {/* <div className="my-0 mx-[!important] absolute right-[-34px] bottom-[-5.1px] rounded-mini bg-iteck-gatsbyvercelapp-athens-gray flex flex-row items-center justify-center py-[7px] px-2 text-base-9 text-iteck-gatsbyvercelapp-black font-iteck-gatsbyvercelapp-font-awesome-5-free-solid-1429">
                    <div className="flex flex-col items-center justify-start">
                      <a
                        className="relative leading-[16px] capitalize text-[inherit] [text-decoration:none]"
                        href="#0"
                        target="_blank"
                      >
                        
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-[670px] my-0 mx-[!important] absolute top-[-0.3px] right-[15px] bottom-[0.3px] flex flex-col items-start justify-start max-w-[1140px] z-[1] mq1425:max-w-full">
            <div className="w-[750px] flex-1 flex flex-col items-start justify-center max-w-[112%] shrink-0">
              <div className="w-full flex-1 overflow-hidden flex flex-row items-start justify-start max-w-[750px] max-h-[567.6900024414062px] mq950:max-w-full">
                <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                    loading="eager"
                    alt=""
                    src="/header10-imgsvg.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[400px] h-px absolute my-0 mx-[!important] bottom-[183.5px] left-[-100px] bg-iteck-gatsbyvercelapp-nero-5 overflow-hidden shrink-0 z-[1]">
              <div className="absolute h-full w-9/12 top-[0%] right-[25.53%] bottom-[0%] left-[-0.52%] bg-iteck-gatsbyvercelapp-nero hidden" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-[15px] pb-[60px] shrink-0 text-center text-iteck-gatsbyvercelapp-cream-can">
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-5 pb-[0.4000000059604645px]">
            <div className="relative leading-[23.8px] inline-block max-w-[1140px] mq1425:max-w-full">
              Intregrated With:
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[0.05999999865889549px] pl-0 gap-[20px] mt-[-0.01px] mq950:flex-wrap mq950:justify-center">
            <div className="h-[103px] w-[50px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border">
              <div
                className="self-stretch flex-1 flex flex-col items-start justify-center cursor-pointer"
                onClick={onLinkContainer5Click}
              >
                <img
                  className="w-full flex-1 relative max-w-[50px] overflow-hidden max-h-[73.16000366210938px] object-cover"
                  alt=""
                  src="/28png@2x.png"
                />
              </div>
            </div>
            <div className="h-[103px] w-[50px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border">
              <div
                className="self-stretch flex-1 flex flex-col items-start justify-center cursor-pointer"
                onClick={onLinkContainer6Click}
              >
                <img
                  className="w-full flex-1 relative max-w-[50px] overflow-hidden max-h-[73.16000366210938px] object-cover"
                  alt=""
                  src="/29png@2x.png"
                />
              </div>
            </div>
            <div className="h-[103px] w-[50px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border">
              <div
                className="self-stretch flex-1 flex flex-col items-start justify-center cursor-pointer"
                onClick={onLinkContainer7Click}
              >
                <img
                  className="w-full flex-1 relative max-w-[50px] overflow-hidden max-h-[73.16000366210938px] object-cover"
                  alt=""
                  src="/30png@2x.png"
                />
              </div>
            </div>
            <div className="h-[103px] w-[50px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border">
              <div
                className="self-stretch flex-1 flex flex-col items-start justify-center cursor-pointer"
                onClick={onLinkContainer8Click}
              >
                <img
                  className="w-full flex-1 relative max-w-[50px] overflow-hidden max-h-[73.16000366210938px] object-cover"
                  alt=""
                  src="/31png@2x.png"
                />
              </div>
            </div>
            <div className="h-[103px] w-[50px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border">
              <div
                className="self-stretch flex-1 flex flex-col items-start justify-center cursor-pointer"
                onClick={onLinkContainer9Click}
              >
                <img
                  className="w-full flex-1 relative max-w-[50px] overflow-hidden max-h-[73.16000366210938px] object-cover"
                  alt=""
                  src="/32png@2x.png"
                />
              </div>
            </div>
            <div className="h-[103px] w-[50px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border">
              <div
                className="self-stretch flex-1 flex flex-col items-start justify-center cursor-pointer"
                onClick={onLinkContainer10Click}
              >
                <img
                  className="w-full flex-1 relative max-w-[50px] overflow-hidden max-h-[73.16000366210938px] object-cover"
                  alt=""
                  src="/33png@2x.png"
                />
              </div>
            </div>
            <div className="h-[103px] w-[50px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border">
              <div
                className="self-stretch flex-1 flex flex-col items-start justify-center cursor-pointer"
                onClick={onLinkContainer11Click}
              >
                <img
                  className="w-full flex-1 relative max-w-[50px] overflow-hidden max-h-[73.16000366210938px] object-cover"
                  alt=""
                  src="/34png@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
