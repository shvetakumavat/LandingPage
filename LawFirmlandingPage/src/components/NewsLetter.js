const NewsLetter = () => {
  return (
    <div className="self-stretch bg-gray-300 overflow-hidden flex flex-row py-[5rem] px-[9.38rem] items-center justify-start text-center text-[3.44rem] text-pure-white font-actor md:pl-[5rem] md:pr-[5rem] md:box-border sm:pl-[1rem] sm:pr-[1rem] sm:box-border">
      <div className="flex-1 bg-darkslategray-200 flex flex-col py-[5.81rem] px-[17.44rem] items-start justify-start md:pl-[3.13rem] md:pr-[3.13rem] md:box-border sm:p-[0.31rem] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[2.63rem]">
          <div className="self-stretch relative leading-[137%]">
            Subscribe Our Newsletter
          </div>
          <form className="self-stretch flex flex-row items-start justify-start gap-[0.56rem] md:flex-row sm:flex-col">
            <input
              className="[border:none] flex font-poppins text-[0.88rem] bg-gainsboro-100 rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[14rem] h-[3.31rem] flex-col py-[0.88rem] px-[0rem] box-border items-end justify-end"
              type="text"
              placeholder="Name : "
            />
            <input
              className="[border:none] flex font-poppins text-[0.88rem] bg-gainsboro-100 w-[14rem] h-[3.31rem] flex-col py-[0.88rem] px-[0.56rem] box-border items-end justify-end"
              type="text"
              placeholder="Enter your Email"
            />
            <button className="cursor-pointer [border:none] py-[0.88rem] px-[1.19rem] bg-goldenrod rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none w-[7.25rem] h-[3.31rem] flex flex-col box-border items-start justify-end">
              <b className="relative text-[0.88rem] leading-[137%] inline-block font-poppins text-black text-center w-[4.81rem] h-[1.31rem] shrink-0">
                SEND
              </b>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
