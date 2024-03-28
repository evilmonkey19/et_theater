
const AboutUs = () => (
  <div className="bg-black py-8 md:grid grid-cols-7">
    <div className="col-span-1"></div>
    <div className="col-span-5 text-gray-50 font-light flex flex-col gap-8">
      <h1 className="text-6xl text-left font-light">About Us</h1>
      <div className="md:grid grid-cols-3 gap-8">
        <div className="flex flex-row gap-4">
          <img src="/icons/location-marker.svg" alt="Location marker of where we are." className="self-start" />
          <div className="flex flex-col gap-4 text-lg">
            <p className="text-balance">Hey there! We're the cool cats from the English Theater Improv Club, chilling out</p>
            <p className="font-bold">Stockholm, Sweden.</p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <img src="/icons/emoji-happy.svg" alt="A happy emoji like us." className="self-start" />
          <div className="flex flex-col gap-4 text-lg">
            <p className="text-balance">Our mission? Simple – spreading the joy of improv and theater to both local and international students.</p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <img src="/icons/sparkles.svg" alt="Sparkles of joy to meet you soon." className="self-start" />
          <div className="flex flex-col gap-4 text-lg">
            <p className="text-balance">We throw an <span className="font-bold">annual show</span>. It's unique, it's interactive, and it's so much fun, your laughter might be mistaken for applause.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;