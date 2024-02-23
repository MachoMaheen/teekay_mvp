import type { NextPage } from "next";
import { useCallback } from "react";
import {
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

const Section1: NextPage = () => {
  const onLinkClick = useCallback(() => {
    window.open("");
  }, []);

  const onLink1Click = useCallback(() => {
    window.open("");
  }, []);

  const onLinkContainerClick = useCallback(() => {
    window.open("");
  }, []);

  const onLink2Click = useCallback(() => {
    window.open("");
  }, []);

  const onLink3Click = useCallback(() => {
    window.open("");
  }, []);

  const onLink4Click = useCallback(() => {
    window.open("");
  }, []);

  const onLink5Click = useCallback(() => {
    window.open("");
  }, []);

  const onLink6Click = useCallback(() => {
    window.open("");
  }, []);

  const onLink7Click = useCallback(() => {
    window.open("");
  }, []);

  const onLink8Click = useCallback(() => {
    window.open("");
  }, []);

  const onLink9Click = useCallback(() => {
    window.open("");
  }, []);

  return (
    <div className="self-stretch bg-iteck-gatsbyvercelapp-athens-gray flex flex-row items-center justify-center p-[100px] box-border max-w-full shrink-0 text-center text-sm text-iteck-gatsbyvercelapp-cornflower-blue font-iteck-gatsbyvercelapp-inter-regular-144 mq950:py-[65px] mq950:px-[25px] mq950:box-border mq1425:pl-[50px] mq1425:pr-[50px] mq1425:box-border">
      <div className="w-[1170px] flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-[41px] max-w-[1170px] mq950:gap-[41px] mq1425:max-w-full">
        <div className="flex flex-col items-center justify-start gap-[10px] max-w-full shrink-0">
          <div className="relative leading-[23.8px] inline-block max-w-[1140px] mq1425:max-w-full">
            Our Level
          </div>
          <h1 className="m-0 relative text-13xl leading-[44.8px] font-bold font-inherit text-iteck-gatsbyvercelapp-shark inline-block max-w-[1140px] mq450:text-lgi mq450:leading-[27px] mq950:text-7xl mq950:leading-[36px] mq1425:max-w-full">
            Explore Solutions By Industry
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-0 pr-px pl-0 box-border max-w-full shrink-0 text-left text-iteck-gatsbyvercelapp-shark">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center min-h-[192px]">
            <div className="w-[292px] flex flex-col items-start justify-start pt-[30px] px-[15px] pb-0 box-border max-w-[1170px] mq1425:max-w-full">
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[66px] font-iteck-gatsbyvercelapp-inter-regular-144 font-bold text-sm text-iteck-gatsbyvercelapp-shark cursor-pointer"
                placeholder="Automotive"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="36px" height="36px" src="/1png.png" />
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "66px",
                    backgroundColor: "#fff",
                    paddingRight: "19.5px",
                    borderRadius: "5px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#212529" },
                }}
                onClick={onLinkClick}
              />
            </div>
            <div className="w-[292px] flex flex-col items-start justify-start pt-[30px] px-[15px] pb-0 box-border max-w-[1170px] ml-[-4.33px] mq1425:max-w-full">
              <FormControl
                className="self-stretch h-[66px] font-iteck-gatsbyvercelapp-inter-regular-144 font-bold text-sm text-iteck-gatsbyvercelapp-shark cursor-pointer"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  width: "89.57264957264958%",
                  height: "66px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "66px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "66px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "66px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "66px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#212529",
                    fontSize: 14,
                    fontWeight: "Bold",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "20px",
                  },
                }}
                onClick={onLink1Click}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="36px"
                      height="36px"
                      src="/5png.png"
                      style={{ marginRight: "15.5px" }}
                    />
                  )}
                >
                  <MenuItem>{`Web & SEO`}</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className="w-[292px] flex flex-col items-start justify-start pt-[30px] px-[15px] pb-0 box-border max-w-[1170px] ml-[-4.33px] mq1425:max-w-full">
              <div
                className="self-stretch rounded-8xs bg-iteck-gatsbyvercelapp-nero flex flex-row items-center justify-between py-[15px] px-5 gap-[20px] cursor-pointer"
                onClick={onLinkContainerClick}
              >
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.28999999165534973px]">
                  <b className="relative leading-[19.6px]">Communications</b>
                </div>
                <img
                  className="h-9 w-[38px] relative overflow-hidden shrink-0 object-cover max-w-[38px] max-h-[36px]"
                  loading="eager"
                  alt=""
                  src="/2png@2x.png"
                />
              </div>
            </div>
            <div className="w-[292px] flex flex-col items-start justify-start pt-[30px] px-[15px] pb-0 box-border max-w-[1170px] ml-[-4.33px] mq1425:max-w-full">
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[66px] font-iteck-gatsbyvercelapp-inter-regular-144 font-bold text-sm text-iteck-gatsbyvercelapp-shark cursor-pointer"
                placeholder="Financial Service"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="32px" height="36px" src="/6png.png" />
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "66px",
                    backgroundColor: "#fff",
                    paddingRight: "16.5px",
                    borderRadius: "5px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#212529" },
                }}
                onClick={onLink2Click}
              />
            </div>
            <div className="w-[292px] flex flex-col items-start justify-start pt-[30px] px-[15px] pb-0 box-border max-w-[1170px] ml-[-4.33px] mq1425:max-w-full">
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[66px] font-iteck-gatsbyvercelapp-inter-regular-144 font-bold text-sm text-iteck-gatsbyvercelapp-shark cursor-pointer"
                placeholder="Constructions"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="36px" height="36px" src="/3png.png" />
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "66px",
                    backgroundColor: "#fff",
                    paddingRight: "19.5px",
                    borderRadius: "5px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#212529" },
                }}
                onClick={onLink3Click}
              />
            </div>
            <div className="w-[292px] flex flex-col items-start justify-start pt-[30px] px-[15px] pb-0 box-border ml-[-4.33px]">
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[66px] font-iteck-gatsbyvercelapp-inter-regular-144 font-bold text-sm text-iteck-gatsbyvercelapp-shark cursor-pointer"
                placeholder={`Food & Beverage`}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="36px" height="36px" src="/7png.png" />
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "66px",
                    backgroundColor: "#fff",
                    paddingRight: "15.5px",
                    borderRadius: "5px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#212529" },
                }}
                onClick={onLink4Click}
              />
            </div>
            <div className="w-[292px] flex flex-col items-start justify-start pt-[30px] px-[15px] pb-0 box-border max-w-[1170px] ml-[-4.33px] mq1425:max-w-full">
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[66px] font-iteck-gatsbyvercelapp-inter-regular-144 font-bold text-sm text-iteck-gatsbyvercelapp-shark cursor-pointer"
                placeholder="Govt. Education"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="36px" height="36px" src="/4png.png" />
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "66px",
                    backgroundColor: "#fff",
                    paddingRight: "14.5px",
                    borderRadius: "5px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#212529" },
                }}
                onClick={onLink5Click}
              />
            </div>
            <div className="w-[292px] flex flex-col items-start justify-start pt-[30px] px-[15px] pb-0 box-border max-w-[1170px] ml-[-4.33px] mq1425:max-w-full">
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[66px] font-iteck-gatsbyvercelapp-inter-regular-144 font-bold text-sm text-iteck-gatsbyvercelapp-shark cursor-pointer"
                placeholder="Life Science"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="33px" height="36px" src="/8png.png" />
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "66px",
                    backgroundColor: "#fff",
                    paddingRight: "15.5px",
                    borderRadius: "5px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#212529" },
                }}
                onClick={onLink6Click}
              />
            </div>
          </div>
          <div className="w-[878px] flex flex-row flex-wrap items-start justify-center [row-gap:20px] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start pt-[30px] px-[15px] pb-0 box-border min-w-[219px] max-w-[1170px] mq1425:max-w-full">
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[66px] font-iteck-gatsbyvercelapp-inter-regular-144 font-bold text-sm text-iteck-gatsbyvercelapp-shark cursor-pointer"
                placeholder={`Media & Entertainment`}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="36px" height="36px" src="/9png.png" />
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "66px",
                    backgroundColor: "#fff",
                    paddingRight: "14.5px",
                    borderRadius: "5px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#212529" },
                }}
                onClick={onLink7Click}
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[30px] px-[15px] pb-0 box-border min-w-[219px] max-w-[1170px] mq1425:max-w-full">
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[66px] font-iteck-gatsbyvercelapp-inter-regular-144 font-bold text-sm text-iteck-gatsbyvercelapp-shark cursor-pointer"
                placeholder="Travel Agency"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="36px" height="36px" src="/10png.png" />
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "66px",
                    backgroundColor: "#fff",
                    paddingRight: "16.5px",
                    borderRadius: "5px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#212529" },
                }}
                onClick={onLink8Click}
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[30px] px-[15px] pb-0 box-border min-w-[219px] max-w-[1170px] mq1425:max-w-full">
              <FormControl
                className="self-stretch h-[66px] font-iteck-gatsbyvercelapp-inter-regular-144 font-bold text-sm text-iteck-gatsbyvercelapp-shark cursor-pointer"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  width: "89.57264957264958%",
                  height: "66px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "66px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "66px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "66px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "66px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#212529",
                    fontSize: 14,
                    fontWeight: "Bold",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "20px",
                  },
                }}
                onClick={onLink9Click}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="28px"
                      height="36px"
                      src="/11png.png"
                      style={{ marginRight: "16.5px" }}
                    />
                  )}
                >
                  <MenuItem>Public Safety</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
