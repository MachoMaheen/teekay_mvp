import type { NextPage } from "next";
import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import DivsubBody from "./divsub-body";
import Arrow from "../public/image.svg";
import DivcolLg1 from "./divcol-lg1";
import Contact from "./contact-form";

const FrameShape: NextPage = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer3Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer4Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainer5Click = useCallback(() => {
    window.open("");
  }, []);

  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[100px] max-w-full shrink-0 text-center text-sm text-iteck-gatsbyvercelapp-cornflower-blue font-iteck-gatsbyvercelapp-inter-regular-144 mq950:gap-[100px] mq1425:gap-[100px]">
      <div className="w-full flex flex-col items-center justify-start pt-0 px-5 pb-px box-border gap-[41px] max-w-[1170px] mq950:gap-[41px] mq1425:max-w-full">
        <div className="flex flex-col items-center justify-start gap-[9px] max-w-full shrink-0">
          <div className="relative leading-[23.8px] inline-block max-w-[1140px] mq1425:max-w-full">{`Price & Plans`}</div>
          <h1 className="m-0 relative text-13xl leading-[44.8px] font-bold font-inherit text-iteck-gatsbyvercelapp-shark inline-block max-w-[1140px] mq450:text-lgi mq450:leading-[27px] mq950:text-7xl mq950:leading-[36px] mq1425:max-w-full">
            Packages For Everyone
          </h1>
        </div>
        <form className="m-0 self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-[25px] pl-[15px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-center justify-start pt-[45px] px-0 pb-0 box-border gap-[45px] min-w-[137px] max-w-full mq450:gap-[45px] mq950:pt-[29px] mq950:box-border">
            <div className="h-[148px] flex flex-row items-start justify-start py-0 pr-[25px] pl-0 box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <img
                  className="w-[59.9px] flex-1 relative max-h-[80px] overflow-hidden object-cover max-w-[252px]"
                  loading="eager"
                  alt=""
                  src="/moneypng@2x.png"
                />
                <div className="relative text-sm leading-[23.8px] text-left inline-block max-w-[252px]">
                  <p className="m-0">
                    <span className="font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-dove-gray">{`You pay `}</span>
                    <b className="font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-black">{`$49.00/mo `}</b>
                    <span className="font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-dove-gray">
                      today renews
                    </span>
                  </p>
                  <p className="m-0">
                    <span className="font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-dove-gray">{`june 2024 for `}</span>
                    <b className="font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-black">
                      $59.00/mo
                    </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-iteck-gatsbyvercelapp-wild-sand flex flex-col items-center justify-start pt-[45px] px-11 pb-11 gap-[20px] mq450:py-[29px] mq450:px-5 mq450:box-border">
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-px">
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[21px] border-b-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-20">
                  <b className="relative text-mini leading-[22.5px] font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-shark text-left">
                    Team
                  </b>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start pt-5 px-0 pb-[21px] border-b-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-20">
                  <b className="relative text-mini leading-[22.5px] inline-block font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-shark text-left max-w-[252px]">
                    Installed Agent
                  </b>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start pt-5 px-0 pb-[21px] border-b-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-20">
                  <b className="relative text-mini leading-[22.5px] inline-block font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-shark text-left max-w-[252px]">
                    Real-Time Feedback
                  </b>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start pt-5 px-0 pb-[21px] border-b-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-20">
                  <b className="relative text-mini leading-[22.5px] inline-block font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-shark text-left max-w-[252px]">
                    Video Dedicated Support
                  </b>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
                <b className="relative text-mini leading-[22.5px] inline-block font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-shark text-left max-w-[252px]">
                  Attacked Targets Per Month
                </b>
              </div>
            </div>
          </div>
          <div className="w-[266px] rounded-t-lg rounded-b-none flex flex-col items-center justify-start pt-10 px-0 pb-px box-border gap-[31px] ml-[-3.33px] mq450:gap-[31px] mq950:pb-5 mq950:box-border">
            <div className="flex flex-row items-start justify-start py-0 pr-[21px] pl-0">
              <div className="flex flex-col items-start justify-start gap-[7px]">
                <div className="relative text-sm leading-[23.8px] font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-cornflower-blue text-left inline-block max-w-[186px]">
                  Starter
                </div>
                <div className="flex flex-row items-end justify-start">
                  <b className="relative text-16xl leading-[49px] font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-shark text-left whitespace-nowrap mq450:text-2xl mq450:leading-[29px] mq950:text-9xl mq950:leading-[39px]">{`$19.00 `}</b>
                  <h3 className="m-0 relative text-xl leading-[34px] font-normal font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-dove-gray text-left mq450:text-base mq450:leading-[27px]">
                    /mo
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 pb-2 pr-[19px] pl-0">
              <div
                className="rounded-781xl overflow-hidden flex flex-row items-start justify-center pt-[12.300000190734863px] px-[31px] pb-[13px] cursor-pointer border-[1px] border-solid border-iteck-gatsbyvercelapp-black-133"
                onClick={onLinkContainerClick}
              >
                <div className="flex flex-col items-center justify-start pt-0 px-[9px] pb-[0.6899999976158142px] relative">
                  <b className="relative text-xs leading-[20.4px] capitalize font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-shark text-center">
                    Purchase Now
                  </b>
                  <div className="my-0 mx-[!important] absolute right-[-33.67px] bottom-[-5.2px] rounded-mini bg-iteck-gatsbyvercelapp-cornflower-blue flex flex-row items-center justify-center py-[7px] px-2">
                    <div className="flex flex-col items-center justify-start">
                      <div className="relative text-base-9 leading-[16px] capitalize font-iteck-gatsbyvercelapp-font-awesome-5-free-solid-1429 text-iteck-gatsbyvercelapp-nero text-center">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DivsubBody
              infoFrame="02"
              headingText="12"
              item="Limited"
              item1="Limited"
              inputField="100"
            />
          </div>
          <div className="w-[266px] rounded-t-lg rounded-b-none bg-iteck-gatsbyvercelapp-cornflower-blue flex flex-col items-center justify-start pt-10 px-[15px] pb-4 box-border gap-[56px] ml-[-3.33px] mq450:gap-[56px] mq950:pb-5 mq950:box-border">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-10 pl-[25px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[31px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                  <div className="relative text-sm leading-[23.8px] font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-nero text-left inline-block max-w-[186px]">
                    Advance
                  </div>
                  <div className="flex flex-row items-end justify-start">
                    <div className="flex flex-col items-start justify-start py-0 px-0">
                      <b className="relative text-16xl leading-[49px] font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-nero text-left whitespace-nowrap mq450:text-2xl mq450:leading-[29px] mq950:text-9xl mq950:leading-[39px]">{`$49.00 `}</b>
                    </div>
                    <h3 className="m-0 relative text-xl leading-[34px] font-normal font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-nero text-left mq450:text-base mq450:leading-[27px]">
                      /mo
                    </h3>
                  </div>
                </div>
                <div
                  className="rounded-781xl bg-iteck-gatsbyvercelapp-cream-can overflow-hidden flex flex-row items-start justify-center pt-[11.300000190734863px] px-[30px] pb-3 cursor-pointer"
                  onClick={onLinkContainer2Click}
                >
                  <div className="flex flex-col items-center justify-start pt-0 px-2.5 pb-[0.6899999976158142px] relative">
                    <b className="relative text-xs leading-[20.4px] capitalize font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-shark text-center">
                      Purchase Now
                    </b>
                    <div className="my-0 mx-[!important] absolute right-[-33.33px] bottom-[-5.7px] rounded-mini bg-iteck-gatsbyvercelapp-nero flex flex-row items-center justify-center py-[7px] px-2">
                      <div className="flex flex-col items-center justify-start">
                        <div className="relative text-base-9 leading-[16px] capitalize font-iteck-gatsbyvercelapp-font-awesome-5-free-solid-1429 text-iteck-gatsbyvercelapp-shark text-center">
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-iteck-gatsbyvercelapp-cornflower-blue flex flex-col items-center justify-start pt-[30px] px-[29px] pb-[29px] gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-px">
                <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[22px] border-b-[1px] border-solid border-iteck-gatsbyvercelapp-nero-133">
                  <div className="h-[22px] w-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
                    <div className="relative text-mini leading-[22.5px] capitalize font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-nero text-center">
                      06
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center pt-5 px-5 pb-[21px] border-b-[1px] border-solid border-iteck-gatsbyvercelapp-nero-133">
                  <div className="relative text-mini leading-[22.5px] capitalize font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-nero text-center inline-block max-w-[176px]">
                    50
                  </div>
                </div>
                <Button
                  className="self-stretch h-16"
                  disableElevation={true}
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "15",
                    borderColor: "rgba(255, 255, 255, 0.13)",
                    borderRadius: "0px 0px 0px 0px",
                    "&:hover": { borderColor: "rgba(255, 255, 255, 0.13)" },
                    height: 64,
                  }}
                >
                  24/7
                </Button>
                <Button
                  className="self-stretch h-16"
                  disableElevation={true}
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "15",
                    borderColor: "rgba(255, 255, 255, 0.13)",
                    borderRadius: "0px 0px 0px 0px",
                    "&:hover": { borderColor: "rgba(255, 255, 255, 0.13)" },
                    height: 64,
                  }}
                >
                  24/7
                </Button>
              </div>
              <div className="relative text-mini leading-[22.5px] capitalize font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-nero text-center inline-block max-w-[176px]">
                1000
              </div>
            </div>
          </div>
          <div className="w-[266px] rounded-t-lg rounded-b-none flex flex-col items-center justify-start pt-10 px-0 pb-px box-border gap-[31px] ml-[-3.33px] mq450:gap-[31px] mq950:pb-5 mq950:box-border">
            <div className="flex flex-row items-start justify-start py-0 pr-[15px] pl-0">
              <div className="flex flex-col items-start justify-start gap-[7px]">
                <div className="relative text-sm leading-[23.8px] font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-cornflower-blue text-left inline-block max-w-[186px]">
                  Team Plan
                </div>
                <div className="flex flex-row items-end justify-start py-0 pr-px pl-0">
                  <div className="flex flex-col items-start justify-start py-0 px-0">
                    <b className="relative text-16xl leading-[49px] font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-shark text-left whitespace-nowrap mq450:text-2xl mq450:leading-[29px] mq950:text-9xl mq950:leading-[39px]">{`$99.00 `}</b>
                  </div>
                  <h3 className="m-0 relative text-xl leading-[34px] font-normal font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-dove-gray text-left mq450:text-base mq450:leading-[27px]">
                    /mo
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 pb-2 pr-[19px] pl-0">
              <div
                className="rounded-781xl overflow-hidden flex flex-row items-start justify-center pt-[12.300000190734863px] px-[31px] pb-[13px] cursor-pointer border-[1px] border-solid border-iteck-gatsbyvercelapp-black-133"
                onClick={onLinkContainer3Click}
              >
                <div className="flex flex-col items-center justify-start pt-0 px-[9px] pb-[0.6899999976158142px] relative">
                  <b className="relative text-xs leading-[20.4px] capitalize font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-shark text-center">
                    Purchase Now
                  </b>
                  <div className="my-0 mx-[!important] absolute right-[-34px] bottom-[-5.2px] rounded-mini bg-iteck-gatsbyvercelapp-cornflower-blue flex flex-row items-center justify-center py-[7px] px-2">
                    <div className="flex flex-col items-center justify-start">
                      <div className="relative text-base-9 leading-[16px] capitalize font-iteck-gatsbyvercelapp-font-awesome-5-free-solid-1429 text-iteck-gatsbyvercelapp-nero text-center">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DivsubBody
              infoFrame="10"
              headingText="100"
              item="unLimited"
              item1="Anytime"
              inputField="10000"
              propAlignSelf="stretch"
              propWidth="18px"
            />
          </div>
        </form>
      </div>
      <div className="self-stretch bg-iteck-gatsbyvercelapp-athens-gray overflow-hidden flex flex-col items-end justify-start pt-[100px] px-0 pb-0 box-border relative gap-[120px] max-w-full text-left mq950:gap-[120px] mq950:pt-[42px] mq950:box-border mq1425:gap-[120px] mq1425:pt-[65px] mq1425:box-border">
        <div
          id="contact"
          className="w-[1565px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border max-w-full shrink-0"
        >
          <div className="w-[1665px] flex flex-row items-center justify-between gap-[20px] max-w-[108%] shrink-0 mq1425:flex-wrap">
            <div className="w-[1170px] flex flex-col items-start justify-start relative gap-[70px] max-w-[1170px] mq950:gap-[70px] mq1425:gap-[70px] mq1425:max-w-full">
              {/* <div className="self-stretch flex flex-row flex-wrap items-start justify-center max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start py-0 px-[15px] box-border gap-[9.1px] min-w-[355px] max-w-[1170px] mq1425:max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.4000000059604645px]">
                    <div className="w-[47px] relative leading-[23.8px] flex items-center max-w-[750px] box-border pr-5 mq950:max-w-full">
                      FAQ
                    </div>
                </div> */}
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.4000000059604645px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.8999999761581421px] shrink-0 text-13xl text-iteck-gatsbyvercelapp-shark">
                  <h1 className="m-0 w-[465px] relative text-inherit leading-[44.8px] font-bold font-inherit flex items-center max-w-[750px] box-border pr-5 mq450:text-lgi mq450:leading-[27px] mq950:text-7xl mq950:leading-[36px] mq950:max-w-full">
                    Contact
                  </h1>
                </div>
              </div>
              {/*
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.8999999761581421px] shrink-0 text-13xl text-iteck-gatsbyvercelapp-shark">
                    <h1 className="m-0 w-[465px] relative text-inherit leading-[44.8px] font-bold font-inherit flex items-center max-w-[750px] box-border pr-5 mq450:text-lgi mq450:leading-[27px] mq950:text-7xl mq950:leading-[36px] mq950:max-w-full">
                      Frequently Asked Question
                    </h1>
                  </div>
                </div>
                <div className="w-[390px] flex flex-col items-end justify-center pt-0 px-[15px] pb-[32.20000076293945px] box-border max-w-[1170px] ml-[-6px] text-center text-xs text-iteck-gatsbyvercelapp-shark mq1425:max-w-full">
                  <div
                    className="rounded-781xl overflow-hidden flex flex-row items-start justify-center pt-[12.300000190734863px] px-[31px] pb-[13px] cursor-pointer border-[1px] border-solid border-iteck-gatsbyvercelapp-black-133"
                    onClick={onLinkContainer4Click}
                  >
                    <div className="flex flex-col items-center justify-start pt-0 px-[9px] pb-[0.6899999976158142px] relative">
                      <b className="relative leading-[20.4px] capitalize">
                        More Question
                      </b>
                      <div className="my-0 mx-[!important] absolute right-[-33px] bottom-[-5.3px] rounded-mini bg-iteck-gatsbyvercelapp-cornflower-blue flex flex-row items-center justify-center py-[7px] px-2 text-base-9 text-iteck-gatsbyvercelapp-nero font-iteck-gatsbyvercelapp-font-awesome-5-free-solid-1429">
                        <div className="flex flex-col items-center justify-start">
                          <div className="relative leading-[16px] capitalize">
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <form className="m-0 self-stretch overflow-hidden flex flex-row items-start justify-center [row-gap:20px] max-w-full mq1425:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[509px] max-w-full mq950:min-w-full">
                  {/* <div className="w-full flex flex-col items-start justify-start py-0 px-6 box-border max-w-[1188px] min-h-[465px] shrink-0 mq1425:max-w-full">
                    <div className="w-[744px] overflow-x-auto flex flex-col items-start justify-start max-w-full">
                      <div className="w-[744px] rounded-t rounded-b-none box-border flex flex-col items-start justify-start pt-0 px-0 pb-px border-b-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-333">
                        <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 box-border max-w-full">
                          <div className="relative text-base leading-[22.4px] font-semibold font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-black text-left inline-block max-w-[704px] mq950:max-w-full">
                            How does Iteck time tracking work?
                          </div>
                          <div className="flex-1 flex flex-col items-end justify-center min-w-[20px] min-h-[23px] max-w-full">
                            <div className="flex flex-col items-start justify-start">
                              <div className="overflow-hidden flex flex-col items-start justify-start pt-0 pb-[5px] pr-[5px] pl-0">
                                <img
                                  className="w-[15px] h-[15px] relative overflow-hidden shrink-0"
                                  alt=""
                                  src={Arrow}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[744px] box-border flex flex-col items-start justify-start pt-0 px-0 pb-px border-b-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-333">
                        <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 box-border max-w-full">
                          <div className="relative text-base leading-[22.4px] font-semibold font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-black text-left inline-block max-w-[704px] mq950:max-w-full">
                            How does Iteck track activity?
                          </div>
                          <div className="flex-1 flex flex-col items-end justify-center min-w-[20px] min-h-[23px] max-w-full">
                            <div className="flex flex-col items-start justify-start">
                              <div className="overflow-hidden flex flex-col items-start justify-start pt-0 pb-[5px] pr-[5px] pl-0">
                                <img
                                  className="w-[15px] h-[15px] relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/image.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[744px] box-border flex flex-col items-start justify-start pt-0 px-0 pb-px border-b-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-333">
                        <div className="self-stretch flex flex-row items-center justify-start py-4 pr-5 pl-[19px] box-border max-w-full">
                          <div className="relative text-base leading-[22.4px] font-semibold font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-black text-left inline-block max-w-[704px] mq950:max-w-full">
                            How does Iteck calculate activity rates?
                          </div>
                          <div className="flex-1 flex flex-col items-end justify-center min-w-[20px] min-h-[23px] max-w-full">
                            <div className="flex flex-col items-start justify-start">
                              <div className="overflow-hidden flex flex-col items-start justify-start pt-0 pb-[5px] pr-[5px] pl-0">
                                <img
                                  className="w-[15px] h-[15px] relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/image.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[744px] box-border flex flex-col items-start justify-start pt-0 px-0 pb-px border-b-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-333">
                        <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 box-border max-w-full">
                          <div className="relative text-base leading-[22.4px] font-semibold font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-black text-left inline-block max-w-[704px] mq950:max-w-full">
                            How does idle timeout work?
                          </div>
                          <div className="flex-1 flex flex-col items-end justify-center py-0 pr-[5.684341886080802e-14px] pl-0 box-border min-w-[20px] min-h-[23px] max-w-full">
                            <div className="flex flex-col items-start justify-start">
                              <div className="overflow-hidden flex flex-col items-start justify-start pt-0 pb-[5px] pr-[5px] pl-0">
                                <img
                                  className="w-[15px] h-[15px] relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/image.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[744px] box-border flex flex-col items-start justify-start pt-0 px-0 pb-px border-b-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-333">
                        <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 box-border max-w-full">
                          <div className="relative text-base leading-[22.4px] font-semibold font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-black text-left inline-block max-w-[704px] mq950:max-w-full">
                            Does Iteck record my screen?
                          </div>
                          <div className="flex-1 flex flex-col items-end justify-center min-w-[20px] min-h-[23px] max-w-full">
                            <div className="flex flex-col items-start justify-start">
                              <div className="overflow-hidden flex flex-col items-start justify-start pt-0 pb-[5px] pr-[5px] pl-0">
                                <img
                                  className="w-[15px] h-[15px] relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/image.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[744px] box-border flex flex-col items-start justify-start pt-0 px-0 pb-px border-b-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-333">
                        <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 box-border max-w-full">
                          <div className="relative text-base leading-[22.4px] font-semibold font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-black text-left inline-block max-w-[704px] mq950:max-w-full">
                            Does Iteck record voice and video?
                          </div>
                          <div className="flex-1 flex flex-col items-end justify-center min-w-[20px] min-h-[23px] max-w-full">
                            <div className="flex flex-col items-start justify-start">
                              <div className="overflow-hidden flex flex-col items-start justify-start pt-0 pb-[5px] pr-[5px] pl-0">
                                <img
                                  className="w-[15px] h-[15px] relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/image.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[744px] rounded-t-none rounded-b box-border flex flex-col items-start justify-start pt-0 px-0 pb-px border-b-[1px] border-solid border-iteck-gatsbyvercelapp-dusty-gray-333">
                        <div className="self-stretch rounded-t-none rounded-b-10xs flex flex-row items-center justify-between py-4 px-5 box-border gap-[0px] [row-gap:20px] max-w-full">
                          <div className="relative text-base leading-[22.4px] font-semibold font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-black text-left inline-block max-w-[704px] mq950:max-w-full">{`Does it track my team's productivity & efficiency?`}</div>
                          <div className="h-[23px] w-[322px] flex flex-col items-end justify-center min-w-[20px] max-w-full">
                            <div className="flex flex-col items-start justify-start">
                              <div className="overflow-hidden flex flex-col items-start justify-start pt-0 pb-[5px] pr-[5px] pl-0">
                                <img
                                  className="w-[15px] h-[15px] relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/image.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* <div className="w-[396px] flex flex-row items-center justify-center min-w-[396px] max-w-[1188px] mq450:min-w-full mq1425:w-full mq1425:max-w-full">
                  <div className="w-[348px] rounded-3xs bg-iteck-gatsbyvercelapp-nero flex flex-col items-center justify-start p-10 box-border gap-[15px] max-w-full mq450:pt-[26px] mq450:pb-[26px] mq450:box-border">
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[5px] px-0">
                      <h3 className="m-0 relative text-xl leading-[28px] font-bold font-iteck-gatsbyvercelapp-inter-regular-144 text-iteck-gatsbyvercelapp-shark text-left inline-block max-w-[268px] mq450:text-base mq450:leading-[22px]">
                        Ask More Question
                      </h3>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-[53px] font-iteck-gatsbyvercelapp-inter-regular-144 text-sm text-iteck-gatsbyvercelapp-dusty-gray"
                        placeholder="Your name"
                        variant="outlined"
                        sx={{
                          "& fieldset": {
                            borderColor: "rgba(153, 153, 153, 0.27)",
                          },
                          "& .MuiInputBase-root": {
                            height: "53px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": { color: "#999" },
                        }}
                      />
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-[53px] font-iteck-gatsbyvercelapp-inter-regular-144 text-sm text-iteck-gatsbyvercelapp-dusty-gray"
                        placeholder="Email address"
                        variant="outlined"
                        sx={{
                          "& fieldset": {
                            borderColor: "rgba(153, 153, 153, 0.27)",
                          },
                          "& .MuiInputBase-root": {
                            height: "53px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": { color: "#999" },
                        }}
                      />
                      <FormControl
                        className="self-stretch h-[137px] font-iteck-gatsbyvercelapp-font-awesome-5-free-solid-1429 text-sm-8 text-iteck-gatsbyvercelapp-black"
                        variant="standard"
                        sx={{
                          borderColor: "#999",
                          borderStyle: "SOLID",
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          borderRadius: "4px",
                          width: "100%",
                          height: "137px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "137px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "137px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "137px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "137px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            fontFamily: "Font Awesome 5 Free",
                            textAlign: "left",
                            p: "0 !important",
                            marginLeft: "20px",
                          },
                        }}
                      >
                        <InputLabel color="primary" />
                        <Select
                          color="primary"
                          disableUnderline
                          displayEmpty
                          IconComponent="null"
                        >
                          <MenuItem></MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <Button
                      className="self-stretch h-[45px] mq450:pl-5 mq450:pr-5 mq450:box-border"
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "14",
                        background: "#8169f1",
                        borderRadius: "4.800000190734863px",
                        "&:hover": { background: "#8169f1" },
                        height: 45,
                      }}
                    >
                      send message
                    </Button>
                  </div>
                </div> */}
              </form>
                 <Contact /> 
                 {/* problem in contact component */}
             
              <div className="w-[350px] h-[350px] absolute my-0 mx-[!important] top-[-250px] left-[-279px] rounded-156xl [background:linear-gradient(-45deg,_#fff,_rgba(0,_0,_0,_0))] z-[1]" />
            </div>
            <div className="h-[308px] flex flex-col items-start justify-start">
              <div className="w-[200px] h-[200.1px] relative rounded-81xl bg-iteck-gatsbyvercelapp-cornflower-blue" />
            </div>
          </div>
        </div>
        <div className="w-full h-[213.1px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] bg-iteck-gatsbyvercelapp-nero" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-iteck-gatsbyvercelapp-nero">
          <div className="w-[1170px] flex flex-row items-center justify-center max-w-[1170px] z-[1] mq1425:max-w-full">
            <div className="w-[1140px] rounded-xl bg-iteck-gatsbyvercelapp-cornflower-blue flex flex-col items-end justify-start pt-0 px-[50px] pb-[39px] box-border relative gap-[21px] max-w-full mq1425:pl-[25px] mq1425:pr-[25px] mq1425:box-border">
              <button className="cursor-pointer [border:none] p-[18.5px] bg-iteck-gatsbyvercelapp-royal-blue w-[65px] h-[65px] my-0 mx-[!important] absolute right-[-35px] bottom-[105.1px] rounded-13xl-5 flex flex-row items-center justify-center box-border">
                <img
                  className="h-7 w-7 relative overflow-hidden shrink-0 object-cover max-w-[65px] max-h-[65px]"
                  alt=""
                  src="/1png-1@2x.png"
                />
              </button>
              <div className="w-[535px] flex flex-row items-start justify-center max-w-full">
                <div className="h-[65px] w-[65px] rounded-13xl-5 bg-iteck-gatsbyvercelapp-royal-blue flex flex-row items-center justify-center p-[17.5px] box-border">
                  <img
                    className="h-[30px] w-[30px] relative overflow-hidden shrink-0 object-cover max-w-[65px] max-h-[65px]"
                    alt=""
                    src="/4png-1@2x.png"
                  />
                </div>
              </div>
              <div className="w-[65px] h-[65px] my-0 mx-[!important] absolute top-[-55.1px] left-[342px] rounded-13xl-5 bg-iteck-gatsbyvercelapp-royal-blue flex flex-row items-center justify-center py-[13.5px] px-[12.5px] box-border">
                <img
                  className="h-[38px] w-10 relative overflow-hidden shrink-0 object-cover max-w-[65px] max-h-[65px]"
                  alt=""
                  src="/6png-1@2x.png"
                />
              </div>
              <Button
                className="w-[65px] h-[65px] my-0 mx-[!important] absolute bottom-[-14.9px] left-[80px]"
                endIcon={<img width="20px" height="29px" src="/9png-1.png" />}
                disableElevation={true}
                variant="contained"
                sx={{
                  background: "#5042dc",
                  borderRadius: "32.5px",
                  "&:hover": { background: "#5042dc" },
                  width: 65,
                  height: 65,
                }}
              />
              <button className="cursor-pointer [border:none] py-[17.5px] px-[15.5px] bg-iteck-gatsbyvercelapp-royal-blue w-[65px] h-[65px] my-0 mx-[!important] absolute top-[59.9px] left-[-35px] rounded-13xl-5 flex flex-row items-center justify-center box-border">
                <img
                  className="h-[30px] w-[34px] relative overflow-hidden shrink-0 object-cover max-w-[65px] max-h-[65px]"
                  alt=""
                  src="/10png-1@2x.png"
                />
              </button>
              <div className="w-[863px] flex flex-col items-start justify-start gap-[5px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                  <div className="w-[687px] flex flex-row items-end justify-between py-0 pr-px pl-0 box-border gap-[20px] max-w-full mq950:flex-wrap">
                    <div className="relative leading-[23.8px] inline-block max-w-[1140px] mq1425:max-w-full">
                      Teekay Syncs With The Apps You’re Already Using
                    </div>
                    <button className="cursor-pointer [border:none] p-[17.5px] bg-iteck-gatsbyvercelapp-royal-blue h-[65px] w-[65px] rounded-13xl-5 flex flex-row items-center justify-center box-border">
                      <img
                        className="h-[30px] w-[30px] relative overflow-hidden shrink-0 object-cover max-w-[65px] max-h-[65px]"
                        alt=""
                        src="/2png-1@2x.png"
                      />
                    </button>
                  </div>
                </div>
                <div className="flex flex-row items-end justify-center gap-[16px] max-w-full text-21xl mq950:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
                    <div className="w-[65px] h-[65px] rounded-13xl-5 bg-iteck-gatsbyvercelapp-royal-blue flex flex-row items-center justify-center p-[15.5px] box-border">
                      <img
                        className="h-[34px] w-[34px] relative overflow-hidden shrink-0 object-cover max-w-[65px] max-h-[65px]"
                        alt=""
                        src="/7png-1@2x.png"
                      />
                    </div>
                  </div>
                  <h1 className="m-0 relative text-inherit leading-[56px] font-bold font-inherit inline-block max-w-[1140px] mq450:text-5xl mq450:leading-[34px] mq950:text-13xl mq950:leading-[45px] mq1425:max-w-full">
                    Over 30+ App Integrations
                  </h1>
                </div>
              </div>
              <div className="w-[960px] flex flex-row items-start justify-center max-w-full text-xs">
                <div className="w-[650px] flex flex-row items-start justify-between gap-[20px] max-w-full mq950:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-20 pb-0 pr-[13px] pl-0">
                    <button className="cursor-pointer [border:none] py-[15px] px-[18px] bg-iteck-gatsbyvercelapp-royal-blue w-[65px] h-[65px] rounded-13xl-5 flex flex-row items-center justify-center box-border">
                      <img
                        className="h-[35px] w-[29px] relative overflow-hidden shrink-0 object-cover max-w-[65px] max-h-[65px]"
                        alt=""
                        src="/8png-1@2x.png"
                      />
                    </button>
                  </div>
                  <div className="flex flex-row items-end justify-start py-0 pr-px pl-0 gap-[25px] mq450:flex-wrap">
                    <div
                      className="rounded-781xl overflow-hidden flex flex-row items-start justify-center pt-[12.300000190734863px] px-[31px] pb-[13px] cursor-pointer border-[1px] border-solid border-iteck-gatsbyvercelapp-nero"
                      onClick={onLinkContainer5Click}
                    >
                      <div className="flex flex-col items-center justify-start pt-0 px-[9px] pb-[0.6899999976158142px] relative">
                        <a
                          className="relative leading-[20.4px] capitalize font-bold text-[inherit] [text-decoration:none]"
                          href=""
                          target="_blank"
                        >
                          View All Integrations
                        </a>
                        <div className="my-0 mx-[!important] absolute right-[-34px] bottom-[-4.7px] rounded-mini bg-iteck-gatsbyvercelapp-nero flex flex-row items-center justify-center py-[7px] px-2 text-base-9 text-iteck-gatsbyvercelapp-black font-iteck-gatsbyvercelapp-font-awesome-5-free-solid-1429">
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
                    </div>
                    <button className="cursor-pointer [border:none] p-[17px] bg-iteck-gatsbyvercelapp-royal-blue h-[65px] w-[65px] rounded-13xl-5 flex flex-row items-center justify-center box-border">
                      <img
                        className="h-[31px] w-[31px] relative overflow-hidden shrink-0 object-cover max-w-[65px] max-h-[65px]"
                        alt=""
                        src="/5png-1@2x.png"
                      />
                    </button>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-10 pb-0 pr-px pl-0">
                    <button className="cursor-pointer [border:none] py-[17.5px] px-[19px] bg-iteck-gatsbyvercelapp-royal-blue w-[65px] h-[65px] rounded-13xl-5 flex flex-row items-center justify-center box-border">
                      <img
                        className="h-[30px] w-[27px] relative overflow-hidden shrink-0 object-cover max-w-[65px] max-h-[65px]"
                        alt=""
                        src="/3png-1@2x.png"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex flex-col items-center justify-start pt-0 px-5 pb-px box-border gap-[71px] max-w-[1170px] mq450:gap-[71px] mq950:gap-[71px] mq1425:max-w-full">
        <div className="flex flex-col items-center justify-start gap-[9px] shrink-0">
          <div className="relative leading-[23.8px] inline-block max-w-[1140px] mq1425:max-w-full">
            Our Team
          </div>
          <h1 className="m-0 relative text-13xl leading-[44.8px] font-bold font-inherit text-iteck-gatsbyvercelapp-shark inline-block max-w-[1140px] mq450:text-lgi mq450:leading-[27px] mq950:text-7xl mq950:leading-[36px] mq1425:max-w-full">
            Our Talent Expert
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border max-w-full shrink-0 text-mini-3 text-iteck-gatsbyvercelapp-shark font-iteck-gatsbyvercelapp-font-awesome-5-free-solid-1429">
          <div className="w-[1185px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-[101%] shrink-0">
            <div className="w-[1200px] flex flex-row flex-wrap items-start justify-start py-0 pr-2 pl-0 box-border max-w-[101%] shrink-0">
              <DivcolLg1
                png="/1png-2@2x.png"
                founder="Founder"
                rosalinaDWilliam="Rosalina D. William"
              />
              <DivcolLg1
                png="/2png-2@2x.png"
                founder="Head Of Idea"
                rosalinaDWilliam="Ronson R. Ronald"
                propMarginLeft="-4px"
                propBackgroundColor="#8169f1"
                propWidth="unset"
                propPadding="0px 19px 0px 18px"
              />
              <DivcolLg1
                png="/3png-2@2x.png"
                founder="Support Engineer"
                rosalinaDWilliam="Miranda H. Halim"
                propMarginLeft="-4px"
                propBackgroundColor="#f6c463"
                propWidth="unset"
                propPadding="0px 19px 0px 18px"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FrameShape;
