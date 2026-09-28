import Section from "../components/Section.jsx";
import Form, { Field } from "../components/Form.jsx";

export default function Contact() {
  return (
    <Section title="Get in touch" intro="Write to the church office or a department.">
      <div className="max-w-xl">
        <Form cta="Send message" done="Thank you. The church office will reply soon.">
          <Field label="Who is this for?">
            <select className="input"><option>Church office</option><option>Pastoral care</option><option>Media team</option><option>Finance & giving</option></select>
          </Field>
          <Field label="Your name"><input className="input" required /></Field>
          <Field label="Email or phone"><input className="input" required /></Field>
          <Field label="Message"><textarea className="input" rows="4" required /></Field>
        </Form>
      </div>
    </Section>
  );
}
