const HeroSection = () => {
  return (
    <section className="self-stretch bg-gray-300 overflow-hidden flex flex-row py-[5rem] px-[9.38rem] items-center justify-start gap-[5rem] text-left text-[4.13rem] text-pure-white font-inter md:flex-col md:pl-[5rem] md:pr-[5rem] md:pb-[5rem] md:box-border sm:pl-[1rem] sm:pr-[1rem] sm:box-border">
      <div className="flex-1 flex flex-col items-start justify-center gap-[2.25rem] md:flex-[unset] md:self-stretch">
        <h1 className="m-0 self-stretch relative text-[inherit] leading-[147.52%] font-inherit sm:text-[3.13rem]">
          <span className="font-medium">{`You don’t have to `}</span>
          <b>Fight them Alone.</b>
        </h1>
        <p className="m-0 self-stretch relative text-[1.13rem] leading-[162.52%] font-medium inline-block h-[6.19rem] shrink-0 opacity-[0.3] sm:text-[0.94rem]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <form className="rounded-24xl bg-gray-400 w-[27.38rem] h-[4.63rem] flex flex-row p-[0.38rem] box-border items-center justify-end gap-[2.69rem] sm:w-[25rem]">
          <div className="w-[14rem] h-[1.63rem] flex flex-row items-center justify-start gap-[0.75rem] opacity-[0.2]">
            <img
              className="relative w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0"
              alt=""
              src="/hicon--bold--message-352.svg"
            />
            <div className="relative text-[1rem] leading-[162.52%] font-medium font-inter text-pure-white text-center sm:text-[0.88rem] sm:text-left">
              Enter your eamil address
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-goldenrod rounded-24xl w-[8.56rem] h-[3.88rem] flex flex-col items-center justify-center">
            <div className="relative text-[1rem] leading-[162.52%] font-semibold font-inter text-black text-center sm:text-[0.88rem]">
              Let’s Talk
            </div>
          </button>
        </form>
      </div>
      <img
        className="relative w-[29.19rem] h-[34.04rem] object-cover md:h-[34rem] sm:w-[70%] sm:h-[70%]"
        alt=""
        src="/group-105912@2x.png"
      />
    </section>
  );
};

export default HeroSection;
