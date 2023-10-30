import IconArrowBigDown from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/arrow-big-down.tsx"

const FrontPage = () => (
  <div className="relative flex flex-col xl:flex-row justify-center items-center gap-8 w-full text-white" style="height: 100svh;">
    <img src="logo.png" alt="Logo ET Theater" className="h-96" />
    <div class="flex flex-col gap-4 w-full justify-center text-center">
      <p className="text-xl">We are a theater association based in Stockholm, Sweden. We try to bring the joy of improv and theater to local and international students.</p>
      <a href="https://forms.gle/VAEicYUXS4c7GseWA" type="button" className="text-white px-8 py-4 bg-[#954864] hover:(bg-[#d67264] text-black) rounded-lg text-lg font-bold w-36 place-self-center">Join Us</a>
    </div>
    <IconArrowBigDown class="absolute bottom-4 animate-bounce w-12 h-12" />
  </div>
);

export default FrontPage;