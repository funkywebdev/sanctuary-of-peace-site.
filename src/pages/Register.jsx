import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Section from "../components/Section.jsx";
import Form, { Field } from "../components/Form.jsx";
import { EVENTS, MINISTRIES } from "../data.js";

const TYPES = [["member", "Become a member"], ["event", "Sign up for an event"], ["ministry", "Join a ministry or group"], ["volunteer", "Volunteer"]];

// One page for every sign-up. Event and Ministry buttons link here as /register?type=event&name=Youth%20Rally
export default function Register() {
  const [params] = useSearchParams();
  const [type, setType] = useState(params.get("type") || "member");
  const [name, setName] = useState(params.get("name") || "");
  const options = type === "event" ? EVENTS.map((e) => e.t) : type === "ministry" ? MINISTRIES.map((m) => m[0]) : [];

  return (
    <Section title="Register" intro="One form for everything: join the church, sign up for an event, or join a ministry.">
      <div className="max-w-2xl">
        <Form cta="Submit registration" done="Thank you. We have your details and will be in touch soon.">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name"><input className="input" required /></Field>
            <Field label="Phone (WhatsApp if possible)"><input className="input" type="tel" required /></Field>
          </div>
          <Field label="Email (optional)"><input className="input" type="email" /></Field>
          <Field label="I want to">
            <select className="input" value={type} onChange={(e) => { setType(e.target.value); setName(""); }}>
              {TYPES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
            </select>
          </Field>
          {options.length > 0 && (
            <Field label={type === "event" ? "Which event?" : "Which ministry?"}>
              <select className="input" value={name} onChange={(e) => setName(e.target.value)} required>
                <option value="">Choose one</option>
                {options.map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>
          )}
          <Field label="Anything we should know? (optional)"><textarea className="input" rows="3" /></Field>
        </Form>
      </div>
    </Section>
  );
}
