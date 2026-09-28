import { useMemo, useState } from "react";
import Section from "../components/Section.jsx";
import { SERMONS } from "../data.js";

export default function Sermons() {
  const [q, setQ] = useState("");
  const [k, setK] = useState("All");
  const topics = ["All", ...new Set(SERMONS.map((s) => s.k))];
  const list = useMemo(() => SERMONS.filter((s) => (k === "All" || s.k === k) && (s.t + s.s).toLowerCase().includes(q.toLowerCase())), [q, k]);

  return (
    <Section title="Sermon library" intro="Search by title or speaker, or filter by topic. Listen or watch any time.">
      <div className="mb-6 flex flex-wrap gap-3">
        <div className="w-full sm:w-72"><input className="input" aria-label="Search sermons" placeholder="Search sermons" value={q} onChange={(e) => setQ(e.target.value)} /></div>
        {topics.map((t) => <button key={t} aria-pressed={k === t} onClick={() => setK(t)} className={k === t ? "btn" : "btn2"}>{t}</button>)}
      </div>
      <div className="card divide-y divide-line">
        {list.length === 0 && <p className="p-6 text-mute">No sermons match. Try a different word or topic.</p>}
        {list.map((s) => (
          <div key={s.t} className="flex items-center justify-between gap-4 p-5">
            <div>
              <h2 className="font-serif text-lg font-bold">{s.t}</h2>
              <p className="text-sm text-mute">{s.s}, {new Date(s.d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
            </div>
            <button className="btn2 btn-sm shrink-0">Play</button>
          </div>
        ))}
      </div>
    </Section>
  );
}
