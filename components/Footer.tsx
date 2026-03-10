import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 rounded-t-[2.5rem] border border-white/55 bg-[#fff8f7]/70 px-6 py-14 backdrop-blur-sm sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="text-xl font-semibold tracking-tight text-[#35292d]">Lumière Skin</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#6f5962]">
            Thoughtful skincare rituals inspired by science, nature, and modern luxury.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#735e67]">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#58454d]">
            <li>
              <a href="#" className="transition hover:text-[#2f2528]">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#2f2528]">
                Ingredients
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#2f2528]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#2f2528]">
                Contact
              </a>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3 text-[#725f67]">
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/70 p-2 transition hover:bg-white">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/70 p-2 transition hover:bg-white">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-full bg-white/70 p-2 transition hover:bg-white">
              <Twitter size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#735e67]">Newsletter</h3>
          <p className="mt-3 text-sm text-[#6f5962]">Get product drops and skincare insights.</p>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-full border border-[#e2cfd6] bg-white/85 px-4 py-2.5 text-sm text-[#2f2528] placeholder:text-[#a08690] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a9b3]"
            />
            <button className="rounded-full bg-[#3f3136] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#2f2428]">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}