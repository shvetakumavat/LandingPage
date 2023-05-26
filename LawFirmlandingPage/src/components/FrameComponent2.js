const FrameComponent2 = ({ ellipse14, janeCooper, vector }) => {
  return (
    <div className="flex-1 rounded-sm bg-gray-200 flex flex-col py-[2.5rem] px-[1.5rem] items-start justify-start relative gap-[1rem] text-left text-[0.88rem] text-pure-white font-inter border-[1.4px] border-solid border-gray-400 sm:flex-[unset] sm:self-stretch">
      <img
        className="relative rounded-[50%] w-[6.56rem] h-[6.38rem] object-cover z-[0]"
        alt=""
        src={ellipse14}
      />
      <h4 className="m-0 relative text-[1.5rem] leading-[1.5rem] font-semibold font-inherit z-[1]">
        {janeCooper}
      </h4>
      <h5 className="m-0 relative text-[inherit] leading-[1.5rem] font-normal font-inherit z-[2]">
        Ceo of Hunt
      </h5>
      <p className="m-0 self-stretch relative leading-[162.52%] font-medium opacity-[0.3] z-[3]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </p>
      <img
        className="absolute my-0 mx-[!important] top-[1.84rem] right-[1.44rem] w-[3.88rem] h-[2.81rem] opacity-[0.03] z-[4]"
        alt=""
        src={vector}
      />
    </div>
  );
};

export default FrameComponent2;
