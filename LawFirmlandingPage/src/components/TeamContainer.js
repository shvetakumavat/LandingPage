import FrameComponent3 from "./FrameComponent3";

const TeamContainer = () => {
  return (
    <div className="self-stretch bg-gray-300 overflow-hidden flex flex-col py-[5rem] px-[9.38rem] items-center justify-center gap-[5rem] text-left text-[3.38rem] text-pure-white font-inter sm:pl-[1rem] sm:pr-[1rem] sm:box-border">
      <h3 className="m-0 relative text-[inherit] leading-[143.02%] font-semibold font-inherit">
        Our Team
      </h3>
      <FrameComponent3
        ellipse15="/ellipse-158@2x.png"
        cesforila="Cesforila"
        cases="470 Cases"
        ellipse16="/ellipse-162@2x.png"
        sanfole="Sanfole"
        cases1="850 Cases"
        ellipse151="/ellipse-159@2x.png"
        nikJeo="Nik Jeo"
        cases2="350 Cases"
      />
      <FrameComponent3
        ellipse15="/ellipse-1510@2x.png"
        cesforila="Colleen"
        cases="180 Cases"
        ellipse16="/ellipse-164@2x.png"
        sanfole="Cesforila"
        cases1="470 Cases"
        ellipse151="/ellipse-1511@2x.png"
        nikJeo="Haldone"
        cases2="212 Cases"
        propWidth="5.56rem"
        propBackgroundColor="#111"
        propWidth1="6.56rem"
        propHeight="3.38rem"
        propColor="#fff"
        propColor1="#fff"
        propOpacity="0.3"
        propWidth2="6.06rem"
      />
    </div>
  );
};

export default TeamContainer;
