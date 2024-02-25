import type { NextPage } from "next";
import DivcolLg3 from "./divcol-lg3";
import DivcolLg2 from "./divcol-lg2";

const Section2: NextPage = () => {
  return (
    <section
      id="services"
      className="self-stretch h-[323px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-0 px-[375px] box-border relative max-w-full text-left text-sm text-iteck-gatsbyvercelapp-cornflower-blue font-iteck-gatsbyvercelapp-inter-regular-144"
    >
      <div className="w-full h-3/6 absolute my-0 mx-[!important] top-[50.31%] right-[0%] bottom-[-0.31%] left-[0%] bg-iteck-gatsbyvercelapp-athens-gray" />
      <div className="w-[1170px] my-0 mx-[!important] absolute top-[0.3px] left-[calc(50%_-_585px)] flex flex-row items-center justify-center max-w-[1170px] z-[1] mq1425:max-w-full">
        <div className="w-[1140px] rounded-md bg-iteck-gatsbyvercelapp-nero shadow-[0px_-16px_32px_rgba(0,_0,_0,_0.04)] flex flex-row items-start justify-start pt-0 px-[26px] pb-[50px] box-border max-w-full">
          <div className="w-[1088px] flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-2.5 pl-0">
              <DivcolLg3
                service01="Service #01"
                firewallVPN={`Firewall & VPN`}
                png="/36png@2x.png"
              />
              <DivcolLg3
                service01="Service #02"
                firewallVPN="Live Security"
                png="/37png@2x.png"
                propMarginLeft="-3.33px"
              />
              <DivcolLg3
                service01="Service #03"
                firewallVPN="Hack Protection"
                png="/38png@2x.png"
                propMarginLeft="-3.33px"
              />
              <DivcolLg3
                service01="Service #04"
                firewallVPN="24/7 Online Support"
                png="/39png@2x.png"
                propMarginLeft="-3.33px"
              />
              {/* <DivcolLg2
                service03="Service #04"
                hackProtection="24/7 Online Support"
                png="/39png@2x.png"
              /> */}
              {/* DivcolLg2 have issues with png stretched png issue */}
            </div>
          </div>
          {/* <b className="w-[959px] relative text-174xl-6 leading-[145.2px] uppercase flex text-transparent !bg-clip-text [background:linear-gradient(180deg,_#f6f6f6,_rgba(250,_250,_250,_0.18))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] items-center max-w-[959px] z-[1] ml-[-1023px] mq450:text-29xl mq450:leading-[58px] mq950:text-58xl mq950:leading-[87px] mq1425:max-w-full">
            services
          </b> */}
          <b className="w-[959px] relative text-174xl-6 leading-[145.2px] uppercase flex text-transparent !bg-clip-text [background:linear-gradient(180deg,_#f6f6f6,_rgba(250,_240,_250,_0.18))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] items-center max-w-[959px] z-[1] ml-[-1023px] mq450:text-29xl mq450:leading-[58px] mq950:text-58xl mq950:leading-[87px] mq1425:max-w-full">
            services
          </b>
        </div>
      </div>
    </section>
  );
};

export default Section2;
