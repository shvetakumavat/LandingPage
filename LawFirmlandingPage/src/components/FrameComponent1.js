import { useMemo } from "react";

const FrameComponent1 = ({
  group19,
  ametMinimMollitNonDeserun,
  propBackgroundColor,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="flex-1 rounded-sm bg-gray-200 flex flex-col py-[1.75rem] px-[1.44rem] items-start justify-start gap-[1.56rem] text-left text-[1.5rem] text-pure-white font-inter border-[1.4px] border-solid border-gray-400 sm:flex-[unset] sm:self-stretch"
      style={frameDivStyle}
    >
      <img className="relative w-[6.31rem] h-[6.31rem]" alt="" src={group19} />
      <h3 className="m-0 self-stretch relative text-[inherit] leading-[1.5rem] font-semibold font-inherit">
        98% Success Rate
      </h3>
      <p className="m-0 self-stretch flex flex-row p-[0.63rem] items-start justify-start text-[0.88rem]">
        <div className="flex-1 relative leading-[162.52%] font-medium opacity-[0.3]">
          {ametMinimMollitNonDeserun}
        </div>
      </p>
      <button className="cursor-pointer [border:none] p-0 bg-goldenrod rounded-4xl-5 w-[7.56rem] h-[2.69rem] flex flex-col items-center justify-center">
        <div className="relative text-[0.88rem] leading-[162.52%] font-semibold font-inter text-black text-left">
          Read More
        </div>
      </button>
    </div>
  );
};

export default FrameComponent1;
