import Section from "../components/Section.jsx";
import Form, { Field } from "../components/Form.jsx";

const QA = [
  ["Where do I park?", "Ushers will guide you at the gate. Arrive ten minutes early."],
  ["What should I wear?", "Come comfortable. Many wear their Sunday best; nobody will mind either way."],
  ["What about my children?", "Children's Ministry runs during the main service, with trained teachers."],
  ["How long is the service?", "About two hours, with songs, prayer, giving and a sermon."],
];

export default function NewHere() {
  return (
    <Section title="If this is your first Sunday" intro="You are welcome here. Here is what to expect.">
      <div className="grid gap-5 sm:grid-cols-2">
        {QA.map(([a, b]) => <div key={a} className="card p-6"><h2 className="font-serif text-xl font-bold">{a}</h2><p className="mt-2 text-mute">{b}</p></div>)}
      </div>
      <div className="mt-8 max-w-2xl">
        <Form cta="Tell us you're coming" done="Thank you. We will save you a warm welcome.">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name"><input className="input" required /></Field>
            <Field label="Phone or email"><input className="input" required /></Field>
          </div>
        </Form>
      </div>
    </Section>
  );
}
