import FrameComponent2 from "./FrameComponent2";

const Testimonials = () => {
  return (
    <section className="self-stretch bg-gray-300 overflow-hidden flex flex-col py-[5rem] px-[9.38rem] items-center justify-center gap-[5rem] text-left text-[3.38rem] text-pure-white font-inter md:pl-[5rem] md:pr-[5rem] md:box-border sm:pl-[1rem] sm:pr-[1rem] sm:box-border">
      <div className="self-stretch flex flex-row items-center justify-between sm:flex-col">
        <h3 className="m-0 relative text-[inherit] leading-[143.02%] font-semibold font-inherit sm:text-[2rem]">
          <p className="m-0">What says our</p>
          <p className="m-0">happy Clients</p>
        </h3>
        <img
          className="relative w-[12.5rem] h-[5.74rem] sm:w-[6.25rem]"
          alt=""
          src="/group-422.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[5rem] text-[0.88rem] md:gap-[2rem] sm:flex-col">
        <FrameComponent2
          ellipse14="/ellipse-146@2x.png"
          janeCooper="Jane Cooper"
          vector="/vector4.svg"
        />
        <FrameComponent2
          ellipse14="/ellipse-147@2x.png"
          janeCooper="Devon Lane"
          vector="/vector5.svg"
        />
        <FrameComponent2
          ellipse14="/ellipse-148@2x.png"
          janeCooper="Robert Fox"
          vector="/vector6.svg"
        />
      </div>
    </section>
  );
};

export default Testimonials;
