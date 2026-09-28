import { useState } from "react";

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="card divide-y divide-line">
      {items.map(([q, a], i) => (
        <div key={q}>
          <h3>
            <button className="flex w-full items-center justify-between gap-4 p-5 text-left font-serif text-lg font-bold" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              {q}
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red text-white" aria-hidden="true">{open === i ? "–" : "+"}</span>
            </button>
          </h3>
          {open === i && <p className="px-5 pb-5 text-mute">{a}</p>}
        </div>
      ))}
    </div>
  );
}
