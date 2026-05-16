import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
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

const reviews = [
  { name: "Marcus T.", text: "Yo Igna got the cleanest taper in the DMV. Lineup was sharp, fade was crispy. New regular fr.", date: "2 weeks ago" },
  { name: "Devon R.", text: "Young bull got real talent. Took his time, made sure everything was perfect. 10/10.", date: "1 month ago" },
  { name: "Jamal K.", text: "Best cut I've had in a minute. Vibe in the chair was chill, conversation was real. Salute.", date: "3 weeks ago" },
  { name: "Andre P.", text: "Walked in tapped out, walked out a new man. Igna got hands. Booking again next week.", date: "5 days ago" },
  { name: "Quan W.", text: "Mid taper fade with the curly top — he ate that up. Worth every dollar.", date: "2 months ago" },
  { name: "Tre S.", text: "On time, on point, on God. Igna the truth. DMV got a problem on his hands.", date: "1 week ago" },
];

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
        <nav className="hidden md:flex gap-10 text-sm uppercase tracking-[0.2em] text-ink">
          <a href="#services" className="hover:text-gold transition">Services</a>
          <a href="#reviews" className="hover:text-gold transition">Reviews</a>
          <a href="#visit" className="hover:text-gold transition">Visit</a>
        </nav>
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
           className="text-xs uppercase tracking-[0.2em] border border-ink px-5 py-3 hover:bg-ink hover:text-cream transition">
          Book
        </a>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img src={hero} alt="Igna Blendzz barber at work" width={1600} height={1100}
             className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        <div className="relative z-10 px-6 md:px-12 pb-20 md:pb-32 max-w-5xl">
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-6">DMV · Est. 2024</p>
          <h1 className="text-5xl md:text-8xl font-display text-cream leading-[0.95]">
            Sharp cuts.<br/>
            <span className="italic text-gold">Sharper</span> standards.
          </h1>
          <p className="mt-8 max-w-xl text-cream/80 text-lg">
            Igna Blendzz is a young DMV barber building a name on clean fades, surgical lineups, and chairs that feel like home.
          </p>
          <div className="mt-10 flex gap-4 items-center">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
               className="bg-gold text-ink px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-cream transition">
              Book a Cut
            </a>
            <div className="flex items-center gap-2 text-cream/80 text-sm">
              <div className="flex gap-0.5">
                {Array.from({length:5}).map((_,i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <span>5.0 · 60+ cuts</span>
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

      {/* Reviews */}
      <section id="reviews" className="bg-ink text-cream px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Word on the Block</p>
          <h2 className="text-4xl md:text-6xl font-display mb-16">What the chair says.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <figure key={r.name} className="border border-cream/15 p-8 hover:border-gold transition">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({length:5}).map((_,i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <blockquote className="text-cream/90 leading-relaxed mb-6 font-display text-xl italic">
                  "{r.text}"
                </blockquote>
                <figcaption className="text-xs uppercase tracking-[0.2em] text-cream/60">
                  {r.name} · {r.date}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="visit" className="px-6 md:px-12 py-24 md:py-32 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold-deep uppercase tracking-[0.3em] text-xs mb-3">Pull Up</p>
            <h2 className="text-4xl md:text-6xl font-display mb-6">Book your chair.</h2>
            <p className="text-foreground/70 text-lg mb-8 max-w-md">
              All bookings handled through TheCut. Pick your slot, lock it in, and show up fresh-faced ready for a fresh face.
            </p>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
               className="inline-block bg-ink text-cream px-10 py-5 text-sm uppercase tracking-[0.25em] hover:bg-gold hover:text-ink transition">
              Book on TheCut →
            </a>
          </div>
          <div className="border border-ink/20 p-8 md:p-10 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-gold-deep mt-1 shrink-0" />
              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-foreground/60 mb-1">Area</p>
                <p className="font-display text-xl">Hazelcrest · Gaithersburg, MD 20877</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 text-gold-deep mt-1 shrink-0" />
              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-foreground/60 mb-1">Hours</p>
                <p className="font-display text-xl">Tue – Sun · By appointment</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Instagram className="h-5 w-5 text-gold-deep mt-1 shrink-0" />
              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-foreground/60 mb-1">Socials</p>
                <p className="font-display text-xl">@igna_blendzz</p>
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
