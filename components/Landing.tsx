const Landing = () => (
  <div className="h-svh bg-cover md:bg-contain bg-right bg-no-repeat bg-black md:grid grid-cols-7" 
    style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('background_landing.webp')" }}>
        <div className="col-span-1"></div>
        <div className="col-span-5 flex flex-col justify-center items-left gap-8 text-gray-50 mx-4 md:mx-0">
          <div className="h-16"></div>
          <p className="text-6xl md:text-8xl text-left text-balance">English Theater Improv Club</p>
          <div className="flex gap-4 w-max-32">
            <p className="font-rye text-6xl md:text-8xl text-[#5063a1] self-place-top h-24">“</p>
            <p className="text-pretty md:text-balance font-light leading-loose self-center text-lg">We are a theater association based in Stockholm, Sweden. 
            We try to bring the joy of <span className="font-bold">improv and theater</span> to local and international students.</p>
          </div>
          <div className="flex flex-row gap-4 items-center text-xl w-full">
            <a href="/" className="group w-56">
              <svg class="stroke-[#159288] group-hover:fill-[#159288] max-md:fill-[#159288]" viewBox="0 0 215 120" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,10 200,10 200,90 70,90 20,115 30,90 10,90" class="stroke-[3]" />
                <text x="60" y="60" class="group-hover:stroke-gray-50 group-hover:fill-gray-50 fill-[#159288] max-md:fill-gray-50 max-md:stroke-gray-50 font-sans text-3xl stroke-1">Hire us</text>
              </svg>
            </a>
            <a href="/" class="group w-56">
              <svg class="stroke-[#b961c1] group-hover:fill-[#b961c1] max-md:fill-[#b961c1]" viewBox="0 0 215 120" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,10 200,10 200,90 70,90 20,115 30,90 10,90" class="stroke-[3]" />
                <text x="60" y="60" class="group-hover:stroke-gray-50 group-hover:fill-gray-50 fill-[#b961c1] max-md:fill-gray-50 max-md:stroke-gray-50 font-sans text-3xl stroke-1">Join us</text>
              </svg>
            </a>
          </div>
        <div className="col-span-1"></div>
      </div>
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-b from-transparent to-black z-10 text-white"></div>
  </div>
);

export default Landing;