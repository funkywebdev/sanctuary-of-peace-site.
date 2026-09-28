import { useState, useEffect } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { CHURCH } from "../data.js";

const links = [["Visit", "/new"], ["Sermons", "/sermons"], ["Events", "/events"], ["Ministries", "/ministries"], ["Pray", "/prayer"], ["Contact", "/contact"], ["Register", "/register"]];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  const cls = ({ isActive }) => "font-medium hover:underline " + (isActive ? "underline decoration-red decoration-2 underline-offset-8" : "");

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-bg">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-12">
          <Link to="/" className="flex items-center gap-3">
            <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
              <circle cx="17" cy="17" r="16" fill="var(--brand)" />
              <path d="M17 8v18M10 15h14" stroke="var(--brand-ink)" strokeWidth="2.6" strokeLinecap="round" />
              <circle cx="17" cy="17" r="12.5" fill="none" stroke="var(--gold)" strokeWidth="1" />
            </svg>
            <span className="font-serif text-sm font-bold leading-tight sm:text-base">
              Sanctuary of Peace<br /><span className="text-xs font-medium text-mute">English Chapel, Osogbo</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {links.map(([l, h]) => <NavLink key={h} to={h} className={cls}>{l}</NavLink>)}
            <Link to="/give" className="btn-red">Give</Link>
          </nav>
          <button className="btn2 md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-3 bg-bg px-5 pb-5 md:hidden">
            {[...links, ["Give", "/give"]].map(([l, h]) => <NavLink key={h} to={h} className={cls}>{l}</NavLink>)}
          </nav>
        )}
      </header>
      <main><Outlet /></main>
      <footer className="bg-brand py-12 text-brand-ink">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:px-12 text-sm sm:grid-cols-3">
          <div><p className="font-serif text-xl font-bold">{CHURCH.name}</p><p className="mt-2 opacity-80">{CHURCH.sub}</p></div>
          <div><p className="font-semibold">Visit</p><p className="mt-1 opacity-80">{CHURCH.address}<br />Sundays {CHURCH.sunday}</p></div>
          <div><p className="font-semibold">Follow</p><p className="mt-1 opacity-80">Facebook, Instagram, YouTube, WhatsApp</p></div>
        </div>
      </footer>
    </>
  );
}
