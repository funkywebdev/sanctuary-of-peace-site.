import { useState } from "react";

export const Field = ({ label, children }) => (
  <label className="block"><span className="text-sm font-medium">{label}</span><div className="mt-1">{children}</div></label>
);

// Demo form: replace the submit handler with a real API call (email service, Formspree, your backend).
export default function Form({ cta, done, children }) {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="card p-6" role="status"><p className="font-serif text-xl font-bold">{done}</p></div>;
  return (
    <form className="card space-y-4 p-6" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      {children}
      <button className="btn" type="submit">{cta}</button>
    </form>
  );
}
