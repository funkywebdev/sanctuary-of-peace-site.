import Section from "../components/Section.jsx";
import Form, { Field } from "../components/Form.jsx";

export default function Prayer() {
  return (
    <Section title="Let us pray with you" intro="Share a request with our prayer team. Choose to keep it private.">
      <div className="max-w-xl">
        <Form cta="Send prayer request" done="We have received your request and will pray with you.">
          <Field label="Your name (optional)"><input className="input" /></Field>
          <Field label="How can we pray?"><textarea className="input" rows="4" required /></Field>
          <label className="flex items-center gap-3"><input type="checkbox" className="h-5 w-5" defaultChecked /> Keep this request private to the prayer team</label>
        </Form>
      </div>
    </Section>
  );
}
