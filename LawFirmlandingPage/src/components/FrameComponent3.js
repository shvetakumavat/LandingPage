import { useMemo } from "react";

const FrameComponent3 = ({
  ellipse15,
  cesforila,
  cases,
  ellipse16,
  sanfole,
  cases1,
  ellipse151,
  nikJeo,
  cases2,
  propWidth,
  propBackgroundColor,
  propWidth1,
  propHeight,
  propColor,
  propColor1,
  propOpacity,
  propWidth2,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight,
    };
  }, [propWidth1, propHeight]);

  const sanfoleStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const casesStyle = useMemo(() => {
    return {
      color: propColor1,
      opacity: propOpacity,
    };
  }, [propColor1, propOpacity]);

  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[5rem] text-left text-[1.5rem] text-pure-white font-inter md:gap-[2rem] sm:flex-col">
      <div className="flex-1 rounded-sm flex flex-row py-[1rem] px-[2rem] items-center justify-center gap-[2rem] md:flex-col sm:flex-[unset] sm:self-stretch">
        <img
          className="relative rounded-[50%] w-[4.25rem] h-[4.25rem] object-cover"
          alt=""
          src={ellipse15}
        />
        <div
          className="w-[6.56rem] h-[3.38rem] flex flex-col items-start justify-start gap-[0.38rem]"
          style={frameDiv1Style}
        >
          <div className="relative leading-[1.5rem] font-semibold">
            {cesforila}
          </div>
          <div className="relative text-[0.88rem] leading-[1.5rem] opacity-[0.3]">
            {cases}
          </div>
        </div>
      </div>
      <div
        className="flex-1 rounded-sm bg-goldenrod flex flex-row py-[1rem] px-[2rem] items-center justify-center gap-[2rem] text-text-black md:flex-col sm:flex-[unset] sm:self-stretch"
        style={frameDiv2Style}
      >
        <img
          className="relative rounded-[50%] w-[4.25rem] h-[4.25rem] object-cover"
          alt=""
          src={ellipse16}
        />
        <div
          className="flex flex-col items-start justify-start gap-[0.38rem]"
          style={frameDiv3Style}
        >
          <div
            className="relative leading-[1.5rem] font-semibold"
            style={sanfoleStyle}
          >
            {sanfole}
          </div>
          <div
            className="relative text-[0.88rem] leading-[1.5rem] text-black opacity-[0.4]"
            style={casesStyle}
          >
            {cases1}
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-sm flex flex-row py-[1rem] px-[2rem] items-center justify-center gap-[2rem] md:flex-col sm:flex-[unset] sm:self-stretch">
        <img
          className="relative rounded-[50%] w-[4.25rem] h-[4.25rem] object-cover"
          alt=""
          src={ellipse151}
        />
        <div
          className="w-[5.38rem] h-[3.38rem] flex flex-col items-start justify-start gap-[0.38rem]"
          style={frameDiv4Style}
        >
          <div className="relative leading-[1.5rem] font-semibold">
            {nikJeo}
          </div>
          <div className="relative text-[0.88rem] leading-[1.5rem] opacity-[0.3]">
            {cases2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
