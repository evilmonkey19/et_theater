const Sessions = () => (
  <div className="py-32 bg-fill bg-no-repeat md:grid grid-cols-7" style="background-image: url('actors.webp')">
    <div className="col-span-1"></div>
    <div className="col-span-5 flex flex-col justify-center items-center gap-8 text-gray-50">
      <p className="text-6xl md:text-8xl text-center text-balance">Improv Sessions every Wednesday!</p>
      <p className="text-center text-2xl">It's open to everyone, come join us in Nymble, Drottning Kristinas väg 15-19, 3rd floor!</p>
      <a className="bg-[#ea7af4] py-4 px-8 text-4xl hover:bg-[#ffd461]" href="/">Sign up!</a>
    </div>
    <div className="col-span-1"></div>
  </div>
)

export default Sessions;