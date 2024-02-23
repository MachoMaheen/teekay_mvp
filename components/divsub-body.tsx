import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";

export type DivsubBodyType = {
  infoFrame?: string;
  headingText?: string;
  item?: string;
  item1?: string;
  inputField?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const DivsubBody: NextPage<DivsubBodyType> = ({
  infoFrame,
  headingText,
  item,
  item1,
  inputField,
  propAlignSelf,
  propWidth,
}) => {
  const itemStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const blogCardStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-row items-center justify-center py-[15px] px-0 text-center text-mini text-iteck-gatsbyvercelapp-shark font-iteck-gatsbyvercelapp-inter-regular-144 border-[15px] border-solid border-iteck-gatsbyvercelapp-wild-sand">
      <div className="w-[236px] rounded-lg bg-iteck-gatsbyvercelapp-nero flex flex-col items-center justify-start pt-[30px] px-[29px] pb-[29px] box-border gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-px">
          <div
            className="flex flex-row items-start justify-center pt-0 pb-[22px] pr-[78px] pl-[79px] border-b-[1px] border-solid border-darkgray"
            style={itemStyle}
          >
            <div
              className="h-[22px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border"
              style={blogCardStyle}
            >
              <div className="relative leading-[22.5px] capitalize">
                {infoFrame}
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center pt-5 px-5 pb-[21px] border-b-[1px] border-solid border-darkgray">
            <div className="relative leading-[22.5px] capitalize inline-block max-w-[176px]">
              {headingText}
            </div>
          </div>
          <Button
            className="self-stretch h-16"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#212529",
              fontSize: "15",
              borderColor: "rgba(153, 153, 153, 0.13)",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { borderColor: "rgba(153, 153, 153, 0.13)" },
              height: 64,
            }}
          >
            {item}
          </Button>
          <Button
            className="self-stretch h-16"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#212529",
              fontSize: "15",
              borderColor: "rgba(153, 153, 153, 0.13)",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { borderColor: "rgba(153, 153, 153, 0.13)" },
              height: 64,
            }}
          >
            {item1}
          </Button>
        </div>
        <div className="relative leading-[22.5px] capitalize inline-block max-w-[176px]">
          {inputField}
        </div>
      </div>
    </div>
  );
};

export default DivsubBody;
