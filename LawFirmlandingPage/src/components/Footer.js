const Footer = () => {
  return (
    <div className="self-stretch bg-gray-300 overflow-hidden flex flex-col py-[5rem] px-[9.38rem] items-center justify-center gap-[5rem] text-left text-[1rem] text-pure-white font-inter md:pl-[5rem] md:pr-[5rem] md:box-border sm:pl-[1rem] sm:pr-[1rem] sm:box-border">
      <div className="self-stretch flex flex-row items-center justify-center gap-[6.25rem] sm:flex-col">
        <img
          className="relative w-[9.56rem] h-[1.89rem]"
          alt=""
          src="/group-103864.svg"
        />
        <div className="flex-1 flex flex-row items-center justify-center gap-[6.25rem] md:hidden sm:flex-[unset] sm:self-stretch">
          <div className="relative tracking-[0.1px] leading-[1.5rem]">{`Home `}</div>
          <div className="relative leading-[162.52%] font-semibold">
            Attorneys
          </div>
          <div className="relative tracking-[0.1px] leading-[1.5rem]">
            <b>Practice Areas</b>
            <span>{` `}</span>
          </div>
          <div className="relative leading-[162.52%] font-semibold">
            About Us
          </div>
        </div>
        <div className="relative w-[11.69rem] h-[1.88rem]">
          <img
            className="absolute top-[calc(50%_-_15px)] right-[9.81rem] w-[1.88rem] h-[1.88rem]"
            alt=""
            src="/icon.svg"
          />
          <img
            className="absolute top-[calc(50%_-_15px)] right-[6.5rem] w-[1.88rem] h-[1.88rem]"
            alt=""
            src="/icon1.svg"
          />
          <img
            className="absolute top-[calc(50%_-_15px)] right-[3.25rem] w-[1.88rem] h-[1.88rem]"
            alt=""
            src="/icon2.svg"
          />
          <img
            className="absolute top-[calc(50%_-_15px)] right-[0rem] w-[1.88rem] h-[1.88rem]"
            alt=""
            src="/icon3.svg"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[1.44rem] text-[0.88rem] font-poppins sm:flex-col">
        <div className="relative leading-[1.25rem]">
          © 2020 Acme. All right reserved.
        </div>
        <div className="relative leading-[1.25rem]">Privacy Policy</div>
        <div className="relative leading-[1.25rem]">Terms of Service</div>
      </div>
    </div>
  );
};

export default Footer;
