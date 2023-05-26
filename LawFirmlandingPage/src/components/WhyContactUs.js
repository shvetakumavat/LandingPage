import FrameComponent1 from "./FrameComponent1";

const WhyContactUs = () => {
  return (
    <section className="self-stretch bg-gray-300 overflow-hidden flex flex-col py-[5rem] px-[9.38rem] items-center justify-center gap-[5rem] text-center text-[3.38rem] text-pure-white font-inter md:pl-[5rem] md:pr-[5rem] md:box-border sm:pl-[1rem] sm:pr-[1rem] sm:box-border">
      <h2 className="m-0 self-stretch relative text-[inherit] leading-[143.02%] font-semibold font-inherit">
        Why Choose us?
      </h2>
      <div className="self-stretch flex flex-row items-start justify-start gap-[5rem] text-left text-[1.5rem] md:gap-[1.25rem] sm:flex-col">
        <FrameComponent1
          group19="/group-192.svg"
          ametMinimMollitNonDeserun="Amet minim mollit non deserunt ullamcest sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          propBackgroundColor="#1d1d1d"
        />
        <FrameComponent1
          group19="/group-193.svg"
          ametMinimMollitNonDeserun="Amet minim mollit non deserunt ullamcest sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          propBackgroundColor="#2e2e2e"
        />
        <FrameComponent1
          group19="/group-194.svg"
          ametMinimMollitNonDeserun="Amet minim mollit non deserunt ullamcestsit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        />
      </div>
    </section>
  );
};

export default WhyContactUs;
