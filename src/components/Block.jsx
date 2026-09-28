// Landing-page section: heading + optional "see all" link.
import { Link } from "react-router-dom";

export default function Block({ id, title, intro, to, cta, tint, children }) {
  return (
    <section id={id} className={"py-12 sm:py-20 lg:py-28 " + (tint ? "bg-soft" : "")}>
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="max-w-2xl font-serif text-2xl font-bold sm:text-4xl lg:text-4xl">{title}</h2>
            {intro && <p className="mt-3 max-w-xl text-mute">{intro}</p>}
          </div>
          {to && <Link to={to} className="btn2">{cta}</Link>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
