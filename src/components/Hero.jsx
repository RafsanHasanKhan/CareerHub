import HeroLogo from '../assets/hero-section/hero-logo.png'

const Hero = () => {
  return (
    <div className="bg-primary-gradient px-5 2xl:px-0">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-16 items-center pt-[150px]">
        <div>
          <h1 className="text-4xl xl:text-6xl lg:text-5xl 2xl:text-[80px] font-extrabold 2xl:leading-[100px]">
            One Step <br /> Closer To Your <br />
            <span className="font-[900] rounded-lg text-transparent bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text">
              Dream Job
            </span>
          </h1>
          <p className="text-[13px] sm:text-base md:text-base  xl:text-base font-medium mt-6 mb-8">
            Explore thousands of job opportunities with all the <br /> information you
            need. Its your future. Come find it. Manage all <br /> your job application
            from start to finish.
          </p>
          <button className="px-5 py-3 font-extrabold rounded-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            Get Started
          </button>
        </div>
        <div className="w-full">
          <img className="w-full" src={HeroLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;