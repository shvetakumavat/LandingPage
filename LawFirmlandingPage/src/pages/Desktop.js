import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyContactUs from "../components/WhyContactUs";
import AreaOfPractices from "../components/AreaOfPractices";
import Testimonials from "../components/Testimonials";
import TeamContainer from "../components/TeamContainer";
import FAQContainer from "../components/FAQContainer";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Desktop = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start">
      <Header />
      <HeroSection />
      <section className="self-stretch bg-gray-300 overflow-hidden flex flex-row py-[5rem] px-[9.38rem] items-center justify-center gap-[5rem] text-left text-[3.38rem] text-pure-white font-inter md:flex-col md:pl-[5rem] md:pr-[5rem] md:box-border sm:pl-[1rem] sm:pr-[1rem] sm:box-border">
        <h2 className="m-0 flex-1 relative text-[inherit] leading-[161.52%] font-semibold font-inherit md:flex-[unset] md:self-stretch">
          <p className="m-0">{`Let’s Introduce `}</p>
          <p className="m-0">Ourself</p>
        </h2>
        <div className="relative box-border w-[0.06rem] h-[12.94rem] border-r-[1px] border-solid border-dimgray md:hidden" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] text-[2rem] md:flex-[unset] md:self-stretch">
          <h3 className="m-0 self-stretch relative text-[inherit] leading-[162.52%] font-semibold font-inherit">
            Criminal Lawyer
          </h3>
          <p className="m-0 self-stretch relative text-[1.13rem] leading-[162.52%] font-medium opacity-[0.3]">
            <span className="block">
              Amet minim mollit non deserunt ullamco est
            </span>
            <span className="block">
              sit aliqua dolor do amet sint. Velit officia consequatduis
            </span>
            <span className="block">enim velit mollit Exercitation.</span>
          </p>
        </div>
      </section>
      <WhyContactUs />
      <AreaOfPractices />
      <Testimonials />
      <TeamContainer />
      <FAQContainer />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Desktop;
