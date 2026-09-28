import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import { MINISTRIES } from "../data.js";

export default function Ministries() {
  return (
    <Section title="Find your people" intro="Every ministry and small group welcomes newcomers.">
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {MINISTRIES.map(([n, d, w]) => (
          <div key={n} className="flex flex-col border-t-2 border-red pt-5">
            <h2 className="font-serif text-xl font-bold">{n}</h2>
            <p className="mt-2 flex-1 text-mute">{d}</p>
            <p className="mt-3 text-sm font-medium">{w}</p>
            <Link className="btn2 mt-4" to={`/register?type=ministry&name=${encodeURIComponent(n)}`}>Join</Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
