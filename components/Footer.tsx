import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx"
import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-instagram.tsx"
import IconPhone from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/phone.tsx"
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/mail.tsx"

const Footer = () => (
  <footer class="flex flex-col items-center gap-4 md:gap-8 bg-black pb-8 md:py-8 text-gray-50 font-light px-4">
    <div class="flex flex-col items-center gap-4 md:grid grid-cols-7 w-full mx-4 md:mx-0">
      <div class="col-span-1"></div>
      <div class="col-span-1">
        <img src="/logo.png" alt="ET logo" class="w-48" />
      </div>
      <div class="col-span-2"></div>
      <div class="col-span-2 flex flex-col md:flex-row gap-4 md:gap-8 w-full">
        <div class="flex flex-col gap-4 md:gap-8">
          <p>English theater improv club</p>
          <div class="flex flex-col gap-2">
            <a href="#events" title="Jump to events" class="hover:text-gray-500">Events</a>
            <a href="#productions" title="Jump to productions" class="hover:text-gray-500">Productions</a>
          </div>
        </div>
        <div class="flex flex-col gap-2 md:gap-8">
          <p class="text-xl">Contact</p>
          <div class="flex flex-col">
            <IconMail class="w-6 h-6" />
            <a href="mailto:email@email.com" class="hover:text-gray-500">email@email.com</a>
            <IconPhone class="w-6 h-6" />
            <a href="tel:+1234567890" class="hover:text-gray-500">+1234567890</a>
          </div>
          <div>
            <div class="flex flex-row">
              <IconBrandInstagram class="w-6 h-6" />
              <p>Instagram:</p>
            </div>
            <a href="http://instagram.com" class="hover:text-gray-500">@account</a>
          </div>
        </div>
      </div>
      <div class="col-span-1"></div>
      <div className="col-span-1"></div>
      <div className="col-span-5 flex flex-col gap-4">
        <div class="h-[1px] w-full bg-[#303C64]"></div>
        <div class="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
          <div class="flex flex-row items-center gap-4">
            <a href="https://fresh.deno.dev">
              <img
                width="197"
                height="37"
                src="https://fresh.deno.dev/fresh-badge-dark.svg"
                alt="Made with Fresh"
              />
            </a>
            <a href="https://github.com/evilmonkey19/et_theater" class="px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 flex gap-2"><IconBrandGithub class="w-6 h-6" />Go to the repo</a>
          </div>
          <p class="text-balance text-center">Made with ❤️ by&nbsp;
            <a href="https://www.linkedin.com/in/yan-zhang-899960244/" class="hover:text-gray-500">Yan Zhang (Designer)</a>
            &nbsp;&&nbsp;
            <a href="https://perpinya.eu/en" class="hover:text-gray-500">Enric Perpinyà (Programmer)</a> 
          </p>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  </footer>
)

export default Footer;