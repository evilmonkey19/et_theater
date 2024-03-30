const Landing = () => (
  <div className="h-svh bg-contain bg-right bg-no-repeat bg-black md:grid grid-cols-7" style="background-image: url('background_landing.webp')">
        <div className="col-span-1"></div>
        <div className="col-span-5 h-svh flex flex-col justify-center items-left gap-8 text-gray-50">
          <div className="md:h-16"></div>
          <p className="text-8xl text-left text-balance">English Theater Improv Club</p>
          <div className="flex gap-4 w-max-32">
            <p className="font-rye text-8xl text-[#5063a1] self-place-top h-24">“</p>
            <p className="text-balance font-light leading-loose self-center text-lg">We are a theater association based in Stockholm, Sweden. 
            We try to bring the joy of <span className="font-bold">improv and theater</span> to local and international students.</p>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="/" className="relative">
              <img className="w-full" src="/icons/union_green.svg" />
              <p className="text-[#159288] hover:bg-[#159288] hover:text-gray-50 absolute top-5 left-12 text-2xl font-semibold w-full">Hire us</p>
            </a>
            <a href="/" className="relative">
              <img className="w-full" src="/icons/union_pink.svg" />
              <p className="text-[#b961c1] hover:text-[#ffce5f] absolute top-5 left-12 text-2xl font-semibold">Join us</p>
            </a>
          </div>
        <div className="col-span-1"></div>
      </div>
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-b from-transparent to-black z-10 text-white"></div>
  </div>
);

export default Landing;