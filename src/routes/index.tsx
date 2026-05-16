import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

import { Star, Scissors, MapPin, Instagram, Clock } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Igna Blendzz — DMV Barber | Book a Cut" },
      { name: "description", content: "Igna Blendzz — young DMV barber delivering clean fades, lineups, and tapers. Book your cut today." },
      { property: "og:title", content: "Igna Blendzz — DMV Barber" },
      { property: "og:description", content: "Fresh fades and lineups in the DMV. Book with Igna Blendzz." },
    ],
  }),
  component: Index,
});

const BOOK_URL = "https://app.thecut.co/barbers/ignacio-amaya-ia5q2w7";

const services = [
  { name: "Male Haircut", price: "$30", desc: "Full cut with fade, taper, and clean lineup. 1 hour in the chair." },
  { name: "Lineup", price: "$5", desc: "Quick edge-up to keep you sharp in between cuts. 15 minutes." },
];

function Index() {
  return (
    <div className="bg-cream text-foreground min-h-screen">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6 flex items-center justify-between">
        <img src={logo} alt="Igna Blendzz" className="h-14 w-14 rounded-full object-cover" />
        <nav className="hidden md:flex gap-10 text-sm uppercase tracking-[0.2em] text-cream">
          <a href="#services" className="hover:text-gold transition">Services</a>
          <a href="#visit" className="hover:text-gold transition">Book</a>
        </nav>
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
           className="text-xs uppercase tracking-[0.2em] border border-cream/40 text-cream px-5 py-3 hover:bg-gold hover:text-ink hover:border-gold transition">
          Book
        </a>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-ink text-cream overflow-hidden">
        {/* decorative gold accents */}
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-gold-deep/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]"
             style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent 0 18px, currentColor 18px 19px)" }} />

        <div className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-12 items-center w-full pt-32 pb-20">
          <div>
            <p className="text-gold uppercase tracking-[0.4em] text-xs mb-6">DMV · Est. 2024</p>
            <h1 className="text-5xl md:text-8xl font-display leading-[0.95]">
              Sharp cuts.<br/>
              <span className="italic text-gold">Sharper</span> standards.
            </h1>
            <p className="mt-8 max-w-xl text-cream/75 text-lg">
              Igna Blendzz is a young DMV barber building a name on clean fades, surgical lineups, and chairs that feel like home.
            </p>
            <div className="mt-10 flex gap-4 items-center flex-wrap">
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
                 className="bg-gold text-ink px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-cream transition">
                Book a Cut
              </a>
              <div className="flex items-center gap-2 text-cream/70 text-sm">
                <div className="flex gap-0.5">
                  {Array.from({length:5}).map((_,i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <span>5.0 · 60+ cuts</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full" />
              <img src={logo} alt="Igna Blendzz logo" className="relative w-80 h-80 object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 md:px-12 py-24 md:py-32 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="text-gold-deep uppercase tracking-[0.3em] text-xs mb-3">The Menu</p>
            <h2 className="text-4xl md:text-6xl font-display">Services & rates.</h2>
          </div>
          <Scissors className="h-10 w-10 text-gold" />
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-ink/15">
          {services.map((s) => (
            <div key={s.name} className="bg-cream p-8 md:p-10 group hover:bg-ink hover:text-cream transition">
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-2xl md:text-3xl font-display">{s.name}</h3>
                <span className="text-gold-deep group-hover:text-gold text-xl font-display">{s.price}</span>
              </div>
              <p className="text-sm opacity-70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="visit" className="bg-ink text-cream px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Pull Up</p>
            <h2 className="text-4xl md:text-6xl font-display mb-4">Book your chair.</h2>
            <p className="text-cream/70 max-w-xl mx-auto">
              Pick your slot below — bookings powered by TheCut. If it doesn't load, use the direct link.
            </p>
          </div>

          <div className="relative bg-cream rounded-sm overflow-hidden border border-gold/20">
            <iframe
              src={BOOK_URL}
              title="Book with Igna Blendzz on TheCut"
              className="w-full h-[720px] border-0"
              loading="lazy"
              allow="payment"
            />
          </div>

          <div className="mt-8 text-center">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
               className="inline-block bg-gold text-ink px-10 py-5 text-sm uppercase tracking-[0.25em] hover:bg-cream transition">
              Open TheCut in a new tab →
            </a>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="border border-cream/15 p-6 flex items-start gap-4">
              <MapPin className="h-5 w-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-cream/60 mb-1">Area</p>
                <p className="font-display text-lg">Hazelcrest · Gaithersburg, MD 20877</p>
              </div>
            </div>
            <div className="border border-cream/15 p-6 flex items-start gap-4">
              <Clock className="h-5 w-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-cream/60 mb-1">Hours</p>
                <p className="font-display text-lg">Tue – Sun · By appointment</p>
              </div>
            </div>
            <div className="border border-cream/15 p-6 flex items-start gap-4">
              <Instagram className="h-5 w-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-cream/60 mb-1">Socials</p>
                <p className="font-display text-base space-x-2">
                  <a href="https://www.instagram.com/igna_blendzz/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition underline-offset-4 hover:underline">
                    IG @igna_blendzz
                  </a>
                  <span className="text-cream/30">·</span>
                  <a href="https://www.tiktok.com/@igna_blendzz" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition underline-offset-4 hover:underline">
                    TikTok @igna_blendzz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-cream/60 px-6 md:px-12 py-10 flex flex-wrap justify-between items-center gap-4 text-xs uppercase tracking-[0.2em]">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-8 w-8 rounded-full" />
          <span>Igna Blendzz © 2024</span>
        </div>
        <span>DMV · Built for the chair</span>
      </footer>
    </div>
  );
}
