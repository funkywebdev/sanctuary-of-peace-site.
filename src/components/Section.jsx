export default function Section({ title, intro, tint, children }) {
  return (
    <section className={"py-12 sm:py-16 lg:py-24 " + (tint ? "bg-soft" : "")}>
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <h1 className="max-w-2xl font-serif text-2xl font-bold sm:text-4xl lg:text-4xl">{title}</h1>
        {intro && <p className="mt-3 max-w-xl text-mute">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
