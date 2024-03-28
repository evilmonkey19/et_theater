export default function Header() {
  return (
    <header className="fixed w-full px-16 py-1 flex justify-between items-center bg-gray-50 z-50">
      <a className="text-2xl font-bold" href="/" title="Jump to the beginning">
        <img src="/logo.png" alt="Logo from ET English Theater" width="40px" height="40px" />
      </a>
      <div className="flex gap-16 text-xl text-black-950 font-light">
        <a href="#events" title="Jump to events">Events</a>
        <a href="#productions" title="Jump to productions">Productions</a>
      </div>
    </header>
  );
}