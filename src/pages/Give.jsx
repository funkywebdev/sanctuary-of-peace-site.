import { useState } from "react";
import Section from "../components/Section.jsx";
import { Field } from "../components/Form.jsx";
import { FUNDS, BUILDING } from "../data.js";

const fmt = (n) => "₦" + Number(n).toLocaleString("en-NG");

export default function Give() {
  const [fund, setFund] = useState("Tithe");
  const [amt, setAmt] = useState(10000);
  const [rec, setRec] = useState(false);
  const [ok, setOk] = useState(false);
  const pct = Math.round((BUILDING.raised / BUILDING.goal) * 100);

  return (
    <Section title="Give with a glad heart" intro="Your giving supports worship, outreach and the building of God's house.">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="card space-y-4 p-6">
          {ok ? (
            // Replace with a redirect to Paystack / Flutterwave checkout.
            <p className="font-serif text-xl font-bold" role="status">Thank you. Payment will connect here once the church's payment account is set up.</p>
          ) : (
            <>
              <Field label="Where should it go?">
                <select className="input" value={fund} onChange={(e) => setFund(e.target.value)}>{FUNDS.map((f) => <option key={f}>{f}</option>)}</select>
              </Field>
              <div className="flex flex-wrap gap-2">
                {[5000, 10000, 20000, 50000].map((a) => <button key={a} aria-pressed={amt === a} onClick={() => setAmt(a)} className={amt === a ? "btn" : "btn2"}>{fmt(a)}</button>)}
              </div>
              <Field label="Or enter an amount (₦)"><input className="input" type="number" min="100" value={amt} onChange={(e) => setAmt(e.target.value)} /></Field>
              <label className="flex items-center gap-3"><input type="checkbox" className="h-5 w-5" checked={rec} onChange={(e) => setRec(e.target.checked)} /> Repeat this gift every month</label>
              <button className="btn-red w-full" onClick={() => setOk(true)}>Give {fmt(amt || 0)}{rec ? " monthly" : ""}</button>
              <p className="text-xs text-mute">Payments are handled by a secure provider. This page never stores card details.</p>
            </>
          )}
        </div>
        <div className="card p-6">
          <h2 className="font-serif text-2xl font-bold">Building fund</h2>
          <p className="mt-1 text-mute">Sample figures until the finance team confirms real ones.</p>
          <div className="mt-6 h-3 overflow-hidden rounded-full bg-soft" role="progressbar" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100">
            <div className="h-full rounded-full bg-red" style={{ width: pct + "%" }} />
          </div>
          <p className="mt-3 font-semibold">{fmt(BUILDING.raised)} raised of {fmt(BUILDING.goal)} ({pct}%)</p>
          <button className="btn2 mt-5" onClick={() => setFund("Building fund")}>Give to the building fund</button>
        </div>
      </div>
    </Section>
  );
}
