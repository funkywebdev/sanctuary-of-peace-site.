import { Link } from "react-router-dom";
import Countdown from "../components/Countdown.jsx";
import FAQ from "../components/FAQ.jsx";
import { CHURCH, ABOUT, SERMONS, EVENTS, MINISTRIES, FAQ as FAQS, BUILDING } from "../data.js";

const VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4";
const fmt = (n) => "₦" + Number(n).toLocaleString("en-NG");
const wrap = "mx-auto max-w-7xl px-5 lg:px-12";
const h2 = "font-serif text-2xl font-bold sm:text-3xl lg:text-4xl";
const glow = { background: "radial-gradient(60% 55% at 78% 35%, rgba(184,38,45,.45), transparent 70%), radial-gradient(50% 50% at 15% 90%, rgba(120,150,255,.25), transparent 70%), #0E1738" };

export default function Home() {
  const pct = Math.round((BUILDING.raised / BUILDING.goal) * 100);
  return (
    <>
      {/* HERO: dark sanctuary with an arched window */}
      <section className="text-white" style={glow}>
        <div className={wrap + " grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:py-24"}>
          <div>
            <p className="text-sm font-medium text-white/70">{CHURCH.name}, {CHURCH.sub}</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">Come as you are.<br />Find peace here.</h1>
            <p className="mt-5 max-w-md text-base text-white/80">Worship with us on Sundays, watch from home, or join a small group during the week.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/new" className="btn-red">Plan your first visit</Link>
              <a href="#live" className="btn-ghost">Watch live</a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <div className="arch border border-white/25 bg-white/10 px-6 pb-8 pt-16 text-center backdrop-blur-sm">
              <svg className="mx-auto" width="34" height="44" viewBox="0 0 34 44" aria-hidden="true"><path d="M17 2v40M4 15h26" stroke="#fff" strokeWidth="3" strokeLinecap="round" /></svg>
              <p className="mt-4 text-sm text-white/70">Next Sunday service in</p>
              <div className="mt-2 flex justify-center"><Countdown /></div>
              <p className="mt-5 text-sm text-white/80">Sundays {CHURCH.sunday}<br />{CHURCH.midweek}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE TIMES STRIP */}
      <section className="border-b border-line bg-surface">
        <div className={wrap + " grid divide-y divide-line py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0"}>
          {[["Sunday worship", CHURCH.sunday], ["Midweek prayer", CHURCH.midweek], ["Find us", CHURCH.address]].map(([t, v]) => (
            <div key={t} className="px-2 py-5 sm:px-8"><p className="text-sm text-mute">{t}</p><p className="font-serif text-lg font-bold">{v}</p></div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-14 sm:py-20 lg:py-24">
        <div className={wrap + " grid gap-12 lg:grid-cols-2"}>
          <div>
            <h2 className={h2}>A church for the whole family</h2>
            <p className="mt-4 font-serif text-xl leading-snug text-mute">{ABOUT.mission}</p>
            <p className="mt-4 max-w-md text-mute">Our vision: {ABOUT.vision}</p>
            <div className="mt-8 flex gap-6">
              {ABOUT.leaders.map(([n, r]) => (
                <div key={r} className="w-24 text-center">
                  <div className="arch mx-auto grid h-28 w-20 place-items-end justify-center bg-soft pb-3 font-serif text-2xl font-bold text-red" aria-hidden="true">{n.replace(/[^A-Za-z]/g, "").slice(0, 1) || "P"}</div>
                  <p className="mt-2 text-sm font-semibold leading-tight">{n}</p><p className="text-xs text-mute">{r}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            {ABOUT.beliefs.map(([t, d]) => (
              <div key={t} className="border-l-2 border-red pl-5"><h3 className="font-serif text-xl font-bold">{t}</h3><p className="mt-1 text-mute">{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE */}
      <section id="live" className="bg-soft py-14 sm:py-20">
        <div className={wrap}>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className={h2}>Worship live, from wherever you are</h2>
            <span className="rounded bg-red px-2.5 py-1 text-sm font-semibold text-white">Live on Sundays</span>
          </div>
          {/* Sample video for now. To use YouTube instead, see the comment below. */}
          <div className="mt-8 aspect-video overflow-hidden rounded-t-[3rem] rounded-b-xl bg-night sm:rounded-t-[6rem]">
            <video className="h-full w-full object-cover" src={VIDEO_URL} controls playsInline preload="metadata" />
            {/* YouTube: replace the <video> above with
                <iframe className="h-full w-full" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Sunday service" allowFullScreen /> */}
          </div>
        </div>
      </section>

      {/* SERMONS */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className={wrap + " grid gap-10 lg:grid-cols-[1fr_2fr]"}>
          <div><h2 className={h2}>Recent sermons</h2><p className="mt-3 text-mute">Catch up on messages you missed.</p><Link to="/sermons" className="btn2 mt-6">All sermons</Link></div>
          <div className="divide-y divide-line border-y border-line">
            {SERMONS.slice(0, 4).map((s) => (
              <div key={s.t} className="flex items-center justify-between gap-4 py-5">
                <div><p className="text-sm font-medium text-red">{s.k}</p><h3 className="font-serif text-lg font-bold">{s.t}</h3><p className="text-sm text-mute">{s.s}</p></div>
                <button className="btn2 btn-sm shrink-0">Play</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-soft py-14 sm:py-20 lg:py-24">
        <div className={wrap + " grid gap-10 lg:grid-cols-[1fr_2fr]"}>
          <div><h2 className={h2}>What is coming up</h2><p className="mt-3 text-mute">Register for any event in a minute.</p><Link to="/events" className="btn2 mt-6">All events</Link></div>
          <div className="divide-y divide-line border-y border-line">
            {EVENTS.map((e) => (
              <div key={e.t} className="flex flex-wrap items-center gap-5 py-5">
                <div className="w-14 text-center text-red"><div className="text-xs font-semibold">{e.m}</div><div className="font-serif text-3xl font-bold leading-none">{e.d}</div></div>
                <div className="flex-1"><h3 className="font-serif text-lg font-bold">{e.t}</h3><p className="text-sm text-mute">{e.w}, {e.p}</p></div>
                <Link className="btn-red btn-sm" to={`/register?type=event&name=${encodeURIComponent(e.t)}`}>Sign up</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINISTRIES */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className={wrap}>
          <div className="flex flex-wrap items-end justify-between gap-4"><h2 className={h2}>Find your people</h2><Link to="/ministries" className="btn2">All ministries</Link></div>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {MINISTRIES.map(([n, d, w]) => (
              <div key={n} className="border-t-2 border-red pt-5"><h3 className="font-serif text-xl font-bold">{n}</h3><p className="mt-2 text-mute">{d}</p><p className="mt-2 text-sm font-medium">{w}</p>
                <Link to={`/register?type=ministry&name=${encodeURIComponent(n)}`} className="mt-3 inline-block font-semibold text-red underline underline-offset-4">Join this group</Link></div>
            ))}
          </div>
        </div>
      </section>

      {/* GIVE */}
      <section className="bg-red py-14 text-white sm:py-16">
        <div className={wrap + " grid items-center gap-8 md:grid-cols-2"}>
          <div><h2 className={h2}>Give with a glad heart</h2><p className="mt-3 max-w-md text-white/90">Tithes, offerings and gifts to the building fund, one time or every month.</p>
            <Link to="/give" className="btn-white mt-6">Give online</Link></div>
          <div><p className="font-semibold">Building fund (sample figures)</p>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/30"><div className="h-full rounded-full bg-white" style={{ width: pct + "%" }} /></div>
            <p className="mt-2 text-sm">{fmt(BUILDING.raised)} of {fmt(BUILDING.goal)} ({pct}%)</p></div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 sm:py-20 lg:py-24">
        <div className={wrap + " grid gap-10 lg:grid-cols-[1fr_2fr]"}>
          <div><h2 className={h2}>Questions people ask</h2><p className="mt-3 text-mute">Can't find your answer? Write to us.</p><Link to="/contact" className="btn2 mt-6">Contact us</Link></div>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* CLOSING */}
      <section className="text-center text-white" style={glow}>
        <div className="mx-auto max-w-2xl px-5 py-16 sm:py-20">
          <h2 className={h2}>We would love to meet you</h2>
          <p className="mt-3 text-white/80">{CHURCH.address}. Sundays at {CHURCH.sunday}.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3"><Link to="/register" className="btn-red">Register with us</Link><Link to="/new" className="btn-ghost">Plan your visit</Link></div>
        </div>
      </section>
    </>
  );
}
