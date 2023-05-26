const Header = () => {
  return (
    <nav className="self-stretch bg-gray-300 flex flex-row py-[1.5rem] px-[9.38rem] items-center justify-between text-center text-[1rem] text-pure-white font-inter lg:gap-[3.13rem] md:gap-[12.19rem] md:pl-[5rem] md:pr-[5rem] md:box-border sm:pl-[1rem] sm:pr-[1rem] sm:box-border">
      <img
        className="relative w-[8.94rem] h-[1.89rem]"
        alt=""
        src="/logo.svg"
      />
      <ul
        className="w-[39.56rem] flex flex-row items-center justify-start gap-[2.56rem] md:hidden"
        id="Menubar"
      >
        <div className="flex-1 relative leading-[162.52%] font-semibold">
          Home
        </div>
        <div className="flex-1 relative leading-[162.52%] font-semibold">
          Attorneys
        </div>
        <div className="flex-1 relative leading-[162.52%] font-semibold">
          Practice Areas
        </div>
        <div className="flex-1 relative leading-[162.52%] font-semibold">
          About Us
        </div>
      </ul>
      <button className="cursor-pointer p-0 bg-[transparent] box-border w-[11rem] h-[3.19rem] flex flex-col items-center justify-center border-[2px] border-solid border-pure-white md:hidden sm:hidden">
        <div className="relative text-[1rem] font-semibold font-inter text-pure-white text-center">
          Contact Now
        </div>
      </button>
      <img
        className="relative w-[1.88rem] h-[0.99rem] hidden lg:hidden md:flex"
        alt=""
        src="/menu-icon-outline.svg"
      />
    </nav>
  );
};

export default Header;
