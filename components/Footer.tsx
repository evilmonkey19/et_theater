const Footer = () => (
  <footer className="flex flex-col gap-8 bg-black py-8 text-gray-50 font-light">
    <div className="md:grid grid-cols-7">
      <div className="col-span-1"></div>
      <div className="col-span-1">
        <img src="/logo.png" alt="ET logo" width="200px" />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-3 flex flex-row gap-8 justify-end">
        <div className="flex flex-col gap-8">
          <p>English theater improv club</p>
          <div className="flex flex-col gap-2">
            <a href="#events" title="Jump to events" className="hover:text-gray-500">Events</a>
            <a href="#productions" title="Jump to productions" className="hover:text-gray-500">Productions</a>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p>Contact</p>
          <div className="flex flex-col">
            <a href="mailto:email@email.com" className="hover:text-gray-500">email@email.com</a>
            <a href="tel:+1234567890" className="hover:text-gray-500">+1234567890</a>
          </div>
          <div>
            <p>Instagram:</p>
            <a href="http://instagram.com" className="hover:text-gray-500">@account</a>
          </div>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
    <div className="mx-16 h-[1px] bg-[#303C64]"></div>
    <div className="mx-16 flex justify-end">
      <p>Made with ❤️ by&nbsp;
        <a href="https://www.linkedin.com/in/yan-zhang-899960244/" className="hover:text-gray-500">Yan Zhang (Designer)</a>
        &nbsp;&&nbsp;
        <a href="https://perpinya.eu/en" className="hover:text-gray-500">Enric Perpinyà (Programmer)</a> 
      </p>
    </div>
  </footer>
)

export default Footer;