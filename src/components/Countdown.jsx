import { useEffect, useState } from "react";

function nextSunday() {
  const n = new Date(), d = new Date(n);
  d.setHours(8, 0, 0, 0);
  d.setDate(n.getDate() + ((7 - n.getDay()) % 7));
  if (d <= n) d.setDate(d.getDate() + 7);
  return d;
}

export default function Countdown() {
  const [target] = useState(nextSunday);
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const i = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(i); }, []);
  const s = Math.max(0, Math.floor((target - now) / 1000));
  const parts = [["days", Math.floor(s / 86400)], ["hours", Math.floor(s / 3600) % 24], ["minutes", Math.floor(s / 60) % 60], ["seconds", s % 60]];
  return (
    <div className="flex gap-3" role="timer" aria-label="Time until next Sunday service">
      {parts.map(([l, v]) => (
        <div key={l} className="min-w-[56px] text-center">
          <div className="font-serif text-2xl font-bold tabular-nums sm:text-4xl lg:text-4xl">{String(v).padStart(2, "0")}</div>
          <div className="text-xs text-white/70">{l}</div>
        </div>
      ))}
    </div>
  );
}
