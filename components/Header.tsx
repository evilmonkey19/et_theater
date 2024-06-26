export default function Header() {
  return (
    <header className="fixed w-full px-4 md:px-16 py-1 flex flex-row justify-between items-center bg-gray-50 z-50">
      <a className="text-2xl font-bold" href="/" title="Jump to the beginning">
        <img src="/logo.png" alt="Logo from ET English Theater" width="40px" height="40px" />
      </a>
      <div className="flex gap-4 md:gap-16 text-lg md:text-xl text-black-950 font-light">
        <a href="#events" title="Jump to events">Events</a>
        <a href="#productions" title="Jump to productions">Productions</a>
      </div>
    </header>
  );
}