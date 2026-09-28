import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import { EVENTS } from "../data.js";

export default function Events() {
  return (
    <Section title="What is coming up" intro="Pick an event and register in a minute.">
      <div className="divide-y divide-line border-y border-line">
        {EVENTS.map((e) => (
          <div key={e.t} className="flex flex-wrap items-center gap-5 py-6">
            <div className="w-16 text-center text-red"><div className="text-sm font-semibold">{e.m}</div><div className="font-serif text-4xl font-bold leading-none">{e.d}</div></div>
            <div className="flex-1"><h2 className="font-serif text-xl font-bold">{e.t}</h2><p className="text-sm text-mute">{e.w}, {e.p}</p></div>
            <Link className="btn-red btn-sm" to={`/register?type=event&name=${encodeURIComponent(e.t)}`}>Sign up</Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
