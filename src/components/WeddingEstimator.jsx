import { useState, useEffect, useRef } from "react";

// ─── Design Tokens (Tuscan Elegance) ───
const T = {
  ivory: "#FAF8F5", beige: "#E8E2D9", sage: "#8B9A7D", bordeaux: "#722F37",
  gold: "#C9A962", charcoal: "#2D2D2D",
  textPrimary: "#2D2D2D", textSecondary: "rgba(45,45,45,0.75)",
  textMuted: "rgba(45,45,45,0.55)", borderLight: "rgba(45,45,45,0.1)",
  borderMed: "rgba(45,45,45,0.15)", bgCard: "rgba(255,255,255,0.6)",
  bgSel: "#FFFFFF", serif: "'Cormorant Garamond', Georgia, serif",
  sans: "'Montserrat', system-ui, sans-serif",
};

// ─── SVG Icons (thin elegant strokes) ───
const I = {
  spring: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 28V12"/><path d="M16 12c0-4 3-8 8-8-1 4-4 7-8 8z"/><path d="M16 12c0-4-3-8-8-8 1 4 4 7 8 8z"/><path d="M16 18c0-3 2.5-6 6-6-.5 3-3 5.5-6 6z"/><path d="M16 18c0-3-2.5-6-6-6 .5 3 3 5.5 6 6z"/></svg>,
  summer: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="16" r="5"/><path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M6.8 25.2l2.8-2.8M22.4 9.6l2.8-2.8"/></svg>,
  autumn: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 4c6 2 10 8 10 14 0 5-3 9-7 10"/><path d="M17 4c-2 6-2 12 3 24"/><path d="M11 14c2 1 4 3 5 6"/><path d="M23 12c-2 1-4 3-5 6"/><path d="M8 28c2-2 5-3 8-3s6 1 8 3"/></svg>,
  winter: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 2v28M2 16h28"/><path d="M8 8l16 16M24 8L8 24"/><path d="M16 6l-2 2 2 2 2-2zM16 22l-2 2 2 2 2-2z"/><path d="M6 16l2-2 2 2-2 2zM22 16l2-2 2 2-2 2z"/></svg>,
  roma: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 24h20M6 24V12l8-8 8 8v12"/><path d="M10 24v-6h8v6"/><path d="M10 14h2M16 14h2"/></svg>,
  toscana: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v6M12 4h4"/><rect x="10" y="10" width="8" height="3"/><rect x="8" y="13" width="12" height="11"/><path d="M12 18v6M16 18v6M4 24h20"/></svg>,
  costiera: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20c3-2 5 0 8-2s5 0 8-2 5 0 8-2"/><path d="M2 24c3-2 5 0 8-2s5 0 8-2 5 0 8-2"/><path d="M18 16V8l4 4"/><path d="M6 16l4-8 4 8"/></svg>,
  lago: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1"/><path d="M4 22c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1"/><path d="M8 16V6l6 10M8 6L2 16"/><path d="M20 16V10l4 6M20 10l-4 6"/></svg>,
  umbria: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 24V10h4v14"/><path d="M6 10l5-6 5 6"/><path d="M16 24V14h6v10"/><path d="M16 14l3-4 3 4"/><path d="M2 24h24"/></svg>,
  pin: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2C9.6 2 6 5.6 6 10c0 6 8 16 8 16s8-10 8-16c0-4.4-3.6-8-8-8z"/><circle cx="14" cy="10" r="3"/></svg>,
  pinCheck: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2C9.6 2 6 5.6 6 10c0 6 8 16 8 16s8-10 8-16c0-4.4-3.6-8-8-8z"/><path d="M10.5 10l2.5 2.5 4.5-4.5"/></svg>,
  couple: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="8" r="3"/><circle cx="18" cy="8" r="3"/><path d="M4 22c0-4 3-7 6-7 1.5 0 2.5.5 4 .5s2.5-.5 4-.5c3 0 6 3 6 7"/></svg>,
  group: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="7" r="3"/><circle cx="6" cy="10" r="2.5"/><circle cx="22" cy="10" r="2.5"/><path d="M8 24c0-4 3-7 6-7s6 3 6 7"/><path d="M2 24c0-3 2-5 4-5.5M26 24c0-3-2-5-4-5.5"/></svg>,
  party: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v4M8 6l2 3M20 6l-2 3"/><path d="M6 14h16v2c0 4-3.5 8-8 8s-8-4-8-8v-2z"/><path d="M6 14c0-2 3.5-4 8-4s8 2 8 4"/></svg>,
  star: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/><path d="M6 24h16M8 20h12"/></svg>,
  heart: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 24s-8-4.5-8-11c0-3 2.5-5 5-5 1.5 0 2.5.5 3 1.5.5-1 1.5-1.5 3-1.5 2.5 0 5 2 5 5 0 6.5-8 11-8 11z"/></svg>,
  boho: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2c0 5-4 8-4 14 0 3 2 5 4 5s4-2 4-5c0-6-4-9-4-14z"/><path d="M10 16c-3 0-5 1-5 3s3 3 5 3"/><path d="M18 16c3 0 5 1 5 3s-3 3-5 3"/></svg>,
  minimal: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="20" height="20" rx="2"/><path d="M4 14h20M14 4v20"/></svg>,
  rustic: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4c-3 2-8 6-8 12 0 4 3 8 8 8s8-4 8-8c0-6-5-10-8-12z"/><path d="M14 14v10M11 17h6"/></svg>,
  plane: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22l8-16 4 8 4-4 4 12"/><circle cx="20" cy="6" r="2"/></svg>,
  clipboard: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>,
  church: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M10 4h4"/><path d="M6 10l6-4 6 4"/><path d="M4 22V10h16v12"/><path d="M10 22v-5h4v5"/></svg>,
  flower: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="2"/><path d="M12 8c0-3-1.5-5-1.5-5S12 5 12 8z"/><path d="M14 10c3 0 5-1.5 5-1.5S17 10 14 10z"/><path d="M12 12c0 3 1.5 5 1.5 5S12 15 12 12z"/><path d="M10 10c-3 0-5 1.5-5 1.5S7 10 10 10z"/><path d="M12 14v8"/></svg>,
  utensils: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v8c0 1.1.9 2 2 2h2a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M17 2c-2 0-4 2-4 6s2 6 4 6v8"/></svg>,
  music: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
  camera: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  envelope: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>,
  sparkle: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5z"/></svg>,
  calendar: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="20" height="18" rx="2"/><path d="M4 12h20M10 4v4M18 4v4"/></svg>,
  wallet: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="22" height="16" rx="2"/><path d="M3 11h22"/><circle cx="20" cy="17" r="1.5"/><path d="M7 7V5.5A1.5 1.5 0 018.5 4h11A1.5 1.5 0 0121 5.5V7"/></svg>,
  openBudget: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="14" r="10"/><path d="M14 8v12M10 11.5c0-1.4 1.8-2.5 4-2.5s4 1.1 4 2.5-1.8 2.5-4 2.5-4 1.1-4 2.5 1.8 2.5 4 2.5 4-1.1 4-2.5"/></svg>,
  check: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-6"/></svg>,
  arrowR: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>,
  arrowL: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 8H3M7 4L3 8l4 4"/></svg>,
  send: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 2L8 10M16 2l-5 14-3-6-6-3z"/></svg>,
};

const svcIcons = { clipboard: I.clipboard, church: I.church, flower: I.flower, utensils: I.utensils, music: I.music, camera: I.camera, envelope: I.envelope, sparkle: I.sparkle };

// ─── Price Logic ───
const PM = {
  season: { primavera: 1.0, estate: 1.15, autunno: 0.9, inverno: 0.85 },
  location: { roma: { b: 8000, l: "Roma" }, toscana: { b: 10000, l: "Toscana" }, costiera: { b: 12000, l: "Costiera Amalfitana" }, lago: { b: 11000, l: "Lago" }, umbria: { b: 7500, l: "Umbria" }, scelta: { b: 9000, l: "Location già scelta" }, altro: { b: 8000, l: "Altra destinazione" } },
  guests: { intimo: { m: 0.7, l: "20–50 ospiti" }, medio: { m: 1.0, l: "50–100 ospiti" }, grande: { m: 1.4, l: "100–200 ospiti" }, gala: { m: 1.9, l: "200+ ospiti" } },
  style: { classico: "Romantico Classico", boho: "Boho Chic", moderno: "Moderno Minimal", rustico: "Rustico Elegante", destination: "Destination Wedding" },
  services: {
    coordinamento: { p: 5000, l: "Coordinamento Totale", i: "clipboard" },
    cerimonia: { p: 2000, l: "Design Cerimonia", i: "church" },
    floral: { p: 3000, l: "Floral Design", i: "flower" },
    catering: { p: 4000, l: "Catering & Banchetto", i: "utensils" },
    musica: { p: 2500, l: "Musica & Intrattenimento", i: "music" },
    fotovideo: { p: 3500, l: "Foto & Video", i: "camera" },
    inviti: { p: 1500, l: "Stationery & Inviti", i: "envelope" },
    trucco: { p: 1200, l: "Hair & Makeup", i: "sparkle" },
  },
  budget: {
    "15k": { l: "Fino a €15.000", max: 15000 },
    "25k": { l: "€15.000 – €25.000", max: 25000 },
    "40k": { l: "€25.000 – €40.000", max: 40000 },
    "60k": { l: "€40.000 – €60.000", max: 60000 },
    "80k": { l: "€60.000 – €80.000", max: 80000 },
    "100k+": { l: "Oltre €100.000", max: null },
    "open": { l: "Da definire insieme", max: null },
  },
};

function calcEstimate(d) {
  const lb = PM.location[d.location]?.b || 8000;
  const sm = PM.season[d.season] || 1;
  const gm = PM.guests[d.guests]?.m || 1;
  const st = d.services.reduce((s, k) => s + (PM.services[k]?.p || 0), 0);
  const base = (lb + st) * sm * gm;
  return { min: Math.round(base * 0.85 / 100) * 100, max: Math.round(base * 1.25 / 100) * 100 };
}

// ─── Animated Number ───
function Anim({ value, dur = 1400 }) {
  const [d, setD] = useState(0);
  const r = useRef(null);
  useEffect(() => {
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      setD(Math.round((1 - Math.pow(1 - p, 4)) * value));
      if (p < 1) r.current = requestAnimationFrame(tick);
    };
    r.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(r.current);
  }, [value, dur]);
  return <>{d.toLocaleString("it-IT")}</>;
}

// ─── Petals ───
function Petals() {
  const ps = Array.from({ length: 28 }, (_, i) => ({
    id: i, left: Math.random() * 100, delay: Math.random() * 2.5,
    dur: 3 + Math.random() * 3, size: 5 + Math.random() * 8, rot: Math.random() * 360,
    color: [T.gold, T.sage, T.bordeaux, T.beige, "#D4B896", "#E8D5C0"][i % 6],
    op: 0.45 + Math.random() * 0.35,
  }));
  return <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999, overflow: "hidden" }}>
    {ps.map(p => <div key={p.id} style={{ position: "absolute", left: `${p.left}%`, top: "-16px", width: `${p.size}px`, height: `${p.size * 1.5}px`, borderRadius: "50% 0 50% 0", background: p.color, opacity: p.op, transform: `rotate(${p.rot}deg)`, animation: `petalDrift ${p.dur}s ease-in ${p.delay}s forwards` }} />)}
  </div>;
}

// ─── Shared Card ───
function Card({ sel, onClick, icon, label, sub }) {
  return <button onClick={onClick} style={{
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    gap: "10px", padding: "26px 16px", background: sel ? T.bgSel : T.bgCard,
    border: sel ? `2px solid ${T.gold}` : `1px solid ${T.borderLight}`,
    borderRadius: "12px", cursor: "pointer",
    transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
    transform: sel ? "translateY(-2px)" : "translateY(0)",
    boxShadow: sel ? "0 8px 30px rgba(201,169,98,0.12)" : "0 1px 4px rgba(0,0,0,0.03)",
    color: sel ? T.bordeaux : T.textSecondary, position: "relative", overflow: "hidden",
  }}>
    {sel && <div style={{ position: "absolute", top: 8, right: 8, width: 20, height: 20, borderRadius: "50%", background: T.gold, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>{I.check}</div>}
    <div style={{ color: sel ? T.bordeaux : T.textMuted, transition: "color .3s" }}>{icon}</div>
    <div style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 600, color: sel ? T.charcoal : T.textPrimary, lineHeight: 1.2 }}>{label}</div>
    {sub && <div style={{ fontFamily: T.sans, fontSize: 12, letterSpacing: ".5px", color: T.textMuted }}>{sub}</div>}
  </button>;
}

// ─── Row Option (for style & budget) ───
function Row({ sel, onClick, icon, label }) {
  return <button onClick={onClick} style={{
    display: "flex", alignItems: "center", gap: 16, padding: "18px 24px",
    background: sel ? T.bgSel : T.bgCard,
    border: sel ? `2px solid ${T.gold}` : `1px solid ${T.borderLight}`,
    borderRadius: 12, cursor: "pointer",
    transition: "all .35s cubic-bezier(.22,1,.36,1)",
    transform: sel ? "translateX(6px)" : "translateX(0)",
    boxShadow: sel ? "0 4px 20px rgba(201,169,98,.1)" : "none",
    color: sel ? T.bordeaux : T.textSecondary,
  }}>
    <span style={{ color: sel ? T.bordeaux : T.textMuted, transition: "color .3s" }}>{icon}</span>
    <span style={{ fontFamily: T.serif, fontSize: 19, fontWeight: 500, color: sel ? T.charcoal : T.textPrimary }}>{label}</span>
    {sel && <span style={{ marginLeft: "auto", color: T.gold }}>{I.check}</span>}
  </button>;
}

// ─── Steps ───
function SSeason({ v, set }) {
  const opts = [
    { k: "primavera", l: "Primavera", s: "Marzo – Maggio", i: I.spring },
    { k: "estate", l: "Estate", s: "Giugno – Agosto", i: I.summer },
    { k: "autunno", l: "Autunno", s: "Settembre – Novembre", i: I.autumn },
    { k: "inverno", l: "Inverno", s: "Dicembre – Febbraio", i: I.winter },
  ];
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 480, margin: "0 auto" }}>
    {opts.map(o => <Card key={o.k} sel={v === o.k} onClick={() => set(o.k)} icon={o.i} label={o.l} sub={o.s} />)}
  </div>;
}

function SLocation({ v, set, locationName, setLocationName }) {
  const opts = [
    { k: "roma", l: "Roma", i: I.roma }, { k: "toscana", l: "Toscana", i: I.toscana },
    { k: "costiera", l: "Costiera", i: I.costiera }, { k: "lago", l: "Lago", i: I.lago },
    { k: "umbria", l: "Umbria", i: I.umbria }, { k: "scelta", l: "Già scelta", i: I.pinCheck },
  ];
  const showInput = v === "scelta" || v === "altro";
  const fo = e => e.target.style.borderColor = T.gold;
  const bl = e => e.target.style.borderColor = T.borderMed;
  return <div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, maxWidth: 480, margin: "0 auto" }}>
      {opts.map(o => <Card key={o.k} sel={v === o.k} onClick={() => set(o.k)} icon={o.i} label={o.l} />)}
    </div>
    <div style={{ maxWidth: 480, margin: "12px auto 0", display: "flex", justifyContent: "center" }}>
      <button onClick={() => set("altro")} style={{
        display: "flex", alignItems: "center", gap: 8, padding: "12px 28px",
        background: v === "altro" ? T.bgSel : T.bgCard,
        border: v === "altro" ? `2px solid ${T.gold}` : `1px solid ${T.borderLight}`,
        borderRadius: 12, cursor: "pointer", transition: "all .3s",
        fontFamily: T.serif, fontSize: 16, color: v === "altro" ? T.bordeaux : T.textSecondary,
      }}>
        <span style={{ color: v === "altro" ? T.bordeaux : T.textMuted }}>{I.pin}</span> Altra destinazione
      </button>
    </div>
    {showInput && <div style={{ maxWidth: 480, margin: "16px auto 0" }}>
      <input type="text" placeholder="Nome della location" value={locationName} onChange={e => setLocationName(e.target.value)} onFocus={fo} onBlur={bl} style={{ width: "100%", padding: "16px 20px", fontFamily: T.serif, fontSize: 18, background: T.bgCard, border: `1px solid ${T.borderMed}`, borderRadius: 10, color: T.charcoal, outline: "none", textAlign: "center", transition: "border-color .3s", boxSizing: "border-box" }} />
    </div>}
  </div>;
}

function SGuests({ v, set }) {
  const opts = [
    { k: "intimo", l: "Intimo", s: "20 – 50 ospiti", i: I.couple },
    { k: "medio", l: "Classico", s: "50 – 100 ospiti", i: I.group },
    { k: "grande", l: "Grande", s: "100 – 200 ospiti", i: I.party },
    { k: "gala", l: "Gran Gala", s: "200+ ospiti", i: I.star },
  ];
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 480, margin: "0 auto" }}>
    {opts.map(o => <Card key={o.k} sel={v === o.k} onClick={() => set(o.k)} icon={o.i} label={o.l} sub={o.s} />)}
  </div>;
}

function SStyle({ v, set }) {
  const opts = [
    { k: "classico", l: "Romantico Classico", i: I.heart },
    { k: "boho", l: "Boho Chic", i: I.boho },
    { k: "moderno", l: "Moderno Minimal", i: I.minimal },
    { k: "rustico", l: "Rustico Elegante", i: I.rustic },
    { k: "destination", l: "Destination Wedding", i: I.plane },
  ];
  return <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 440, margin: "0 auto" }}>
    {opts.map(o => <Row key={o.k} sel={v === o.k} onClick={() => set(o.k)} icon={o.i} label={o.l} />)}
  </div>;
}

function SServices({ v, set }) {
  const toggle = k => set(v.includes(k) ? v.filter(x => x !== k) : [...v, k]);
  return <div>
    <p style={{ fontFamily: T.sans, fontSize: 12, letterSpacing: "1.5px", textTransform: "uppercase", color: T.textMuted, textAlign: "center", marginBottom: 20 }}>Seleziona tutti i servizi desiderati</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, maxWidth: 500, margin: "0 auto" }}>
      {Object.entries(PM.services).map(([k, s]) => {
        const on = v.includes(k);
        return <button key={k} onClick={() => toggle(k)} style={{
          display: "flex", alignItems: "center", gap: 12, padding: "14px 16px",
          background: on ? T.bgSel : T.bgCard, border: on ? `2px solid ${T.gold}` : `1px solid ${T.borderLight}`,
          borderRadius: 10, cursor: "pointer", transition: "all .3s", color: on ? T.bordeaux : T.textSecondary,
        }}>
          <span style={{ color: on ? T.bordeaux : T.textMuted, flexShrink: 0, transition: "color .3s" }}>{svcIcons[s.i]}</span>
          <span style={{ fontFamily: T.sans, fontSize: 13, fontWeight: 500, textAlign: "left", color: on ? T.charcoal : T.textPrimary, lineHeight: 1.3 }}>{s.l}</span>
          {on && <span style={{ marginLeft: "auto", color: T.gold, flexShrink: 0 }}>{I.check}</span>}
        </button>;
      })}
    </div>
  </div>;
}

function SBudget({ v, set }) {
  const gridOpts = [
    { k: "15k", l: "Fino a €15.000" },
    { k: "25k", l: "€15.000 – €25.000" },
    { k: "40k", l: "€25.000 – €40.000" },
    { k: "60k", l: "€40.000 – €60.000" },
    { k: "80k", l: "€60.000 – €80.000" },
    { k: "100k+", l: "Oltre €100.000" },
  ];
  const BudgetBtn = ({ k, icon, label }) => {
    const on = v === k;
    return <button onClick={() => set(k)} style={{
      display: "flex", alignItems: "center", gap: 12, padding: "14px 16px",
      background: on ? T.bgSel : T.bgCard, border: on ? `2px solid ${T.gold}` : `1px solid ${T.borderLight}`,
      borderRadius: 10, cursor: "pointer", transition: "all .3s", color: on ? T.bordeaux : T.textSecondary,
    }}>
      <span style={{ color: on ? T.bordeaux : T.textMuted, flexShrink: 0, transition: "color .3s" }}>{icon}</span>
      <span style={{ fontFamily: T.sans, fontSize: 13, fontWeight: 500, textAlign: "left", color: on ? T.charcoal : T.textPrimary, lineHeight: 1.3 }}>{label}</span>
      {on && <span style={{ marginLeft: "auto", color: T.gold, flexShrink: 0 }}>{I.check}</span>}
    </button>;
  };
  return <div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, maxWidth: 500, margin: "0 auto" }}>
      {gridOpts.map(o => <BudgetBtn key={o.k} k={o.k} icon={I.wallet} label={o.l} />)}
    </div>
    <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      <BudgetBtn k="open" icon={I.openBudget} label="Da definire insieme" />
    </div>
  </div>;
}

function SDate({ v, set }) {
  const [mode, setMode] = useState(v === "da-decidere" ? "undecided" : v?.length === 10 ? "exact" : "month");
  const chg = m => { setMode(m); if (m === "undecided") set("da-decidere"); else set(""); };
  const inp = { width: "100%", padding: "16px 20px", fontFamily: T.serif, fontSize: 18, background: T.bgCard, border: `1px solid ${T.borderMed}`, borderRadius: 10, color: T.charcoal, outline: "none", textAlign: "center", cursor: "pointer", transition: "border-color .3s" };
  const fo = e => e.target.style.borderColor = T.gold;
  const bl = e => e.target.style.borderColor = T.borderMed;
  return <div style={{ maxWidth: 440, margin: "0 auto" }}>
    <div style={{ display: "flex", gap: 8, marginBottom: 24, justifyContent: "center", flexWrap: "wrap" }}>
      {[{ k: "exact", l: "Data esatta" }, { k: "month", l: "Mese indicativo" }, { k: "undecided", l: "Non ancora decisa" }].map(o => (
        <button key={o.k} onClick={() => chg(o.k)} style={{
          padding: "10px 18px", fontFamily: T.sans, fontSize: 12, letterSpacing: ".5px",
          background: mode === o.k ? T.charcoal : "transparent", color: mode === o.k ? T.ivory : T.textSecondary,
          border: mode === o.k ? `1px solid ${T.charcoal}` : `1px solid ${T.borderMed}`,
          borderRadius: 8, cursor: "pointer", transition: "all .3s", fontWeight: mode === o.k ? 500 : 400,
        }}>{o.l}</button>
      ))}
    </div>
    {mode === "exact" && <input type="date" value={v === "da-decidere" ? "" : v} onChange={e => set(e.target.value)} min="2025-06-01" max="2028-12-31" style={inp} onFocus={fo} onBlur={bl} />}
    {mode === "month" && <input type="month" value={v === "da-decidere" ? "" : v} onChange={e => set(e.target.value)} min="2025-06" max="2028-12" style={inp} onFocus={fo} onBlur={bl} />}
    {mode === "undecided" && <div style={{ textAlign: "center", padding: "28px 24px", background: T.bgCard, borderRadius: 12, border: `1px solid ${T.borderLight}` }}>
      <div style={{ color: T.textMuted, marginBottom: 10, display: "flex", justifyContent: "center" }}>{I.calendar}</div>
      <p style={{ fontFamily: T.serif, fontSize: 18, color: T.textSecondary, fontStyle: "italic", margin: 0 }}>Nessun problema, ne parleremo insieme</p>
    </div>}
  </div>;
}

function SContact({ v, set }) {
  const u = (f, val) => set({ ...v, [f]: val });
  const s = { width: "100%", padding: "14px 18px", fontFamily: T.sans, fontSize: 14, background: T.bgCard, border: `1px solid ${T.borderMed}`, borderRadius: 10, color: T.charcoal, outline: "none", transition: "border-color .3s", boxSizing: "border-box" };
  const lb = { fontFamily: T.sans, fontSize: 12, letterSpacing: "1.5px", textTransform: "uppercase", color: T.textMuted, marginBottom: 6, display: "block" };
  const fo = e => e.target.style.borderColor = T.gold;
  const bl = e => e.target.style.borderColor = T.borderMed;
  return <div style={{ maxWidth: 440, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
      <div><label style={lb}>Nome *</label><input type="text" placeholder="Il vostro nome" value={v.name} onChange={e => u("name", e.target.value)} style={s} onFocus={fo} onBlur={bl} /></div>
      <div><label style={lb}>Cognome</label><input type="text" placeholder="Cognome" value={v.surname} onChange={e => u("surname", e.target.value)} style={s} onFocus={fo} onBlur={bl} /></div>
    </div>
    <div><label style={lb}>Email *</label><input type="email" placeholder="la-vostra@email.com" value={v.email} onChange={e => u("email", e.target.value)} style={s} onFocus={fo} onBlur={bl} /></div>
    <div><label style={lb}>Telefono</label><input type="tel" placeholder="+39 ..." value={v.phone} onChange={e => u("phone", e.target.value)} style={s} onFocus={fo} onBlur={bl} /></div>
    <div><label style={lb}>Raccontateci la vostra visione</label><textarea placeholder="Ogni dettaglio ci aiuta a creare qualcosa di speciale..." value={v.message} onChange={e => u("message", e.target.value)} rows={3} style={{ ...s, resize: "vertical", minHeight: 80 }} onFocus={fo} onBlur={bl} /></div>
  </div>;
}

function Summary({ data, locationName }) {
  const locationLabel = PM.location[data.location]?.l || "—";
  const locationDisplay = locationName ? `${locationLabel} — ${locationName}` : locationLabel;
  const items = [
    { l: "Stagione", v: data.season ? data.season[0].toUpperCase() + data.season.slice(1) : "—" },
    { l: "Location", v: locationDisplay },
    { l: "Ospiti", v: PM.guests[data.guests]?.l || "—" },
    { l: "Stile", v: PM.style[data.style] || "—" },
  ];
  return <div style={{ maxWidth: 500, margin: "0 auto", background: "#fff", border: `1px solid ${T.borderLight}`, borderRadius: 16, padding: 32, boxShadow: "0 4px 30px rgba(0,0,0,.04)" }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 24 }}>
      {items.map((it, i) => <div key={i} style={{ textAlign: "center", padding: 14, background: T.ivory, borderRadius: 10 }}>
        <div style={{ fontFamily: T.sans, fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: T.textMuted, marginBottom: 6 }}>{it.l}</div>
        <div style={{ fontFamily: T.serif, fontSize: 17, color: T.charcoal, fontWeight: 500 }}>{it.v}</div>
      </div>)}
    </div>
    {data.budget && data.budget !== "open" && <div style={{ textAlign: "center", padding: "10px 16px", background: T.ivory, borderRadius: 10, marginBottom: 14 }}>
      <div style={{ fontFamily: T.sans, fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: T.textMuted, marginBottom: 4 }}>Budget</div>
      <div style={{ fontFamily: T.serif, fontSize: 17, color: T.charcoal, fontWeight: 500 }}>{PM.budget[data.budget]?.l}</div>
    </div>}
    {data.services.length > 0 && <div style={{ marginBottom: 24 }}>
      <div style={{ fontFamily: T.sans, fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: T.textMuted, marginBottom: 10, textAlign: "center" }}>Servizi Selezionati</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
        {data.services.map(s => <span key={s} style={{ fontFamily: T.sans, fontSize: 12, background: T.ivory, border: `1px solid ${T.borderLight}`, borderRadius: 20, padding: "5px 14px", color: T.charcoal }}>{PM.services[s]?.l}</span>)}
      </div>
    </div>}
    <div style={{ textAlign: "center", padding: 24, background: `linear-gradient(135deg, ${T.ivory}, ${T.beige})`, borderRadius: 12, border: `1px solid ${T.borderLight}` }}>
      <div style={{ fontFamily: T.serif, fontSize: 24, fontWeight: 400, color: T.charcoal, marginBottom: 8, lineHeight: 1.3 }}>Tutto pronto!</div>
      <div style={{ fontFamily: T.sans, fontSize: 13, color: T.textSecondary, lineHeight: 1.7 }}>Verifica le vostre scelte e cliccate il pulsante qui sotto per inviarci la richiesta. Vi contatteremo al più presto per una consulenza gratuita e senza impegno.</div>
    </div>
    {/* Animated arrow pointing to submit button */}
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T.bordeaux} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "bounceArrow 1.5s ease-in-out infinite" }}>
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </div>
    <style>{`@keyframes bounceArrow { 0%,100% { transform: translateY(0); opacity: .6; } 50% { transform: translateY(8px); opacity: 1; } }`}</style>
  </div>;
}

// ═══════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════
const STEPS = [
  { k: "season", t: "Quando sognate il vostro matrimonio?", s: "La stagione influenza atmosfera e disponibilità" },
  { k: "location", t: "Dove immaginate la celebrazione?", s: "L'Italia offre scenari unici in ogni angolo" },
  { k: "guests", t: "Quanti ospiti condivideranno la gioia?", s: "Ogni formato ha il suo fascino" },
  { k: "style", t: "Qual è il vostro stile?", s: "L'atmosfera che vi rappresenta" },
  { k: "services", t: "Di quali servizi avete bisogno?", s: "Costruiamo insieme il vostro pacchetto ideale" },
  { k: "budget", t: "Avete un budget in mente?", s: "Ci aiuta a calibrare la proposta perfetta per voi" },
  { k: "date", t: "Avete già una data?", s: "Ci aiuta a verificare le disponibilità" },
  { k: "contact", t: "Come possiamo raggiungervi?", s: "Per inviarvi il preventivo personalizzato" },
  { k: "summary", t: "La vostra visione", s: "Riepilogo delle vostre scelte" },
];

export default function WeddingEstimator() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [anim, setAnim] = useState(false);
  const [conf, setConf] = useState(false);
  const [done, setDone] = useState(false);
  const [locationName, setLocationName] = useState("");
  const [data, setData] = useState({
    season: "", location: "", guests: "", style: "", services: [], budget: "", date: "",
    contact: { name: "", surname: "", email: "", phone: "", message: "" },
  });

  const progress = (step / (STEPS.length - 1)) * 100;
  const canNext = () => {
    const k = STEPS[step].k;
    if (k === "contact") return data.contact.name && data.contact.email;
    if (k === "services") return data.services.length > 0;
    if (k === "summary") return true;
    return !!data[k];
  };

  const goTo = n => {
    if (anim) return;
    setDir(n > step ? 1 : -1);
    setAnim(true);
    setTimeout(() => { setStep(n); setAnim(false); }, 280);
    if (n === STEPS.length - 1 && step !== STEPS.length - 1) {
      setConf(true); setTimeout(() => setConf(false), 5000);
    }
  };

  const submit = async () => {
    const formData = {
      access_key: "98f6d7ca-b9d6-4aed-9926-61d1fa53e1a1",
      subject: "Nuovo Preventivo Matrimonio — " + data.contact.name + " " + data.contact.surname,
      from_name: "Gaia Events Wedding Estimator",
      "Nome": data.contact.name + " " + data.contact.surname,
      "Email": data.contact.email,
      "Telefono": data.contact.phone || "Non indicato",
      "Stagione": data.season ? data.season[0].toUpperCase() + data.season.slice(1) : "—",
      "Location": PM.location[data.location]?.l || "—",
      "Location Specifica": locationName || "",
      "Ospiti": PM.guests[data.guests]?.l || "—",
      "Stile": PM.style[data.style] || "—",
      "Servizi": data.services.map(s => PM.services[s]?.l).join(", ") || "Nessuno",
      "Budget": PM.budget[data.budget]?.l || "Da definire",
      "Data Matrimonio": data.date === "da-decidere" ? "Da decidere" : data.date || "Non indicata",
      "Note": data.contact.message || "Nessuna nota",
      redirect: false,
    };
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const responseData = await res.json();
      if (responseData.success) {
        setDone(true);
      } else {
        setDone(true);
      }
    } catch (err) {
      console.error("Submit error:", err);
      setDone(true);
    }
  };

  const up = (k, v) => setData(d => ({ ...d, [k]: v }));

  const renderStep = () => {
    const k = STEPS[step].k;
    if (k === "season") return <SSeason v={data.season} set={v => up("season", v)} />;
    if (k === "location") return <SLocation v={data.location} set={v => up("location", v)} locationName={locationName} setLocationName={setLocationName} />;
    if (k === "guests") return <SGuests v={data.guests} set={v => up("guests", v)} />;
    if (k === "style") return <SStyle v={data.style} set={v => up("style", v)} />;
    if (k === "services") return <SServices v={data.services} set={v => up("services", v)} />;
    if (k === "budget") return <SBudget v={data.budget} set={v => up("budget", v)} />;
    if (k === "date") return <SDate v={data.date} set={v => up("date", v)} />;
    if (k === "contact") return <SContact v={data.contact} set={v => up("contact", v)} />;
    if (k === "summary") return <Summary data={data} locationName={locationName} />;
    return null;
  };

  if (done) return (
    <div style={{ minHeight: "100vh", background: T.ivory, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", maxWidth: 480, animation: "fadeUp .8s ease" }}>
        <div style={{ color: T.gold, marginBottom: 24, display: "flex", justifyContent: "center" }}>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="12" width="40" height="32" rx="3"/><path d="M48 12L28 30 8 12"/></svg>
        </div>
        <h2 style={{ fontFamily: T.serif, fontSize: 36, fontWeight: 400, color: T.charcoal, margin: "0 0 16px", lineHeight: 1.2 }}>Grazie, {data.contact.name}</h2>
        <p style={{ fontFamily: T.sans, fontSize: 15, color: T.textSecondary, lineHeight: 1.8, margin: "0 0 32px" }}>Abbiamo ricevuto la vostra richiesta e siamo già entusiasti di iniziare a lavorare insieme. Vi contatteremo entro 24 ore con un preventivo personalizzato.</p>
        <div style={{ width: 48, height: 1, background: T.gold, margin: "0 auto 32px" }} />
        <p style={{ fontFamily: T.serif, fontSize: 20, fontStyle: "italic", color: T.textMuted, margin: "0 0 40px" }}>Ogni grande storia d'amore merita un inizio indimenticabile</p>
        <a href="/" style={{ fontFamily: T.sans, fontSize: 13, letterSpacing: "1px", textTransform: "uppercase", fontWeight: 500, padding: "14px 32px", background: T.charcoal, color: T.ivory, borderRadius: 8, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, transition: "all .3s" }}>{I.arrowL} Torna al Sito</a>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: T.ivory, position: "relative" }}>
      {conf && <Petals />}

      {/* Header */}
      <div style={{ padding: "160px 24px 0", textAlign: "center" }}>
        <a href="/" style={{ fontFamily: T.sans, fontSize: 12, letterSpacing: "3px", textTransform: "uppercase", color: T.gold, marginBottom: 8, display: "block", textDecoration: "none" }}>Gaia Events</a>
        <h1 style={{ fontFamily: T.serif, fontSize: "clamp(28px,4vw,38px)", fontWeight: 400, color: T.charcoal, margin: "0 0 6px", letterSpacing: "-.01em" }}>Il Vostro Matrimonio da Sogno</h1>
        <p style={{ fontFamily: T.sans, fontSize: 14, color: T.textMuted, margin: "0 0 28px" }}>Rispondete a poche domande per ricevere un preventivo personalizzato</p>
      </div>

      {/* Progress */}
      <div style={{ maxWidth: 560, margin: "24px auto 0", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontFamily: T.sans, fontSize: 12, color: T.textMuted }}>Passo {step + 1} di {STEPS.length}</span>
          <span style={{ fontFamily: T.sans, fontSize: 12, color: T.textMuted }}>{Math.round(progress)}%</span>
        </div>
        <div style={{ height: 2, background: T.beige, borderRadius: 2, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg,${T.sage},${T.gold})`, borderRadius: 2, transition: "width .6s cubic-bezier(.22,1,.36,1)" }} />
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "36px 24px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 32, opacity: anim ? 0 : 1, transform: anim ? `translateX(${dir * -20}px)` : "translateX(0)", transition: "all .28s ease" }}>
          <h2 style={{ fontFamily: T.serif, fontSize: "clamp(24px,3.5vw,30px)", fontWeight: 400, color: T.charcoal, margin: "0 0 6px", lineHeight: 1.3 }}>{STEPS[step].t}</h2>
          <p style={{ fontFamily: T.sans, fontSize: 13, color: T.textMuted, margin: 0 }}>{STEPS[step].s}</p>
        </div>
        <div style={{ opacity: anim ? 0 : 1, transform: anim ? `translateX(${dir * 30}px)` : "translateX(0)", transition: "all .28s ease" }}>
          {renderStep()}
        </div>
      </div>

      {/* Nav */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "20px 24px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={() => step > 0 && goTo(step - 1)} style={{
          visibility: step === 0 ? "hidden" : "visible", display: "flex", alignItems: "center", gap: 8,
          background: "transparent", border: "none", padding: "12px 4px", color: T.textSecondary,
          fontFamily: T.sans, fontSize: 13, cursor: "pointer", transition: "all .3s",
        }}>{I.arrowL} Indietro</button>
        {step < STEPS.length - 1 ? (
          <button onClick={() => canNext() && goTo(step + 1)} disabled={!canNext()} style={{
            display: "flex", alignItems: "center", gap: 8,
            background: canNext() ? T.charcoal : T.beige, border: "none", borderRadius: 8,
            padding: "14px 32px", color: canNext() ? T.ivory : T.textMuted,
            fontFamily: T.sans, fontSize: 13, fontWeight: 500,
            cursor: canNext() ? "pointer" : "not-allowed", transition: "all .4s cubic-bezier(.22,1,.36,1)",
          }}>Continua {I.arrowR}</button>
        ) : (
          <button onClick={submit} style={{
            display: "flex", alignItems: "center", gap: 10,
            background: T.bordeaux, border: "none", borderRadius: 8,
            padding: "16px 36px", color: T.ivory, fontFamily: T.sans, fontSize: 13,
            fontWeight: 600, cursor: "pointer", letterSpacing: "1px", textTransform: "uppercase",
          }}>{I.send} Invia Richiesta</button>
        )}
      </div>

      <div style={{ textAlign: "center", padding: "8px 24px 40px" }}>
        <p style={{ fontFamily: T.sans, fontSize: 12, color: T.textMuted, margin: 0 }}>Consulenza iniziale gratuita e senza impegno</p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box}
        ::placeholder{color:${T.textMuted}}
        button:hover{opacity:.92}
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="month"]::-webkit-calendar-picker-indicator{opacity:.4;cursor:pointer}
        @keyframes petalDrift{0%{transform:translateY(0) rotate(0deg);opacity:.7}100%{transform:translateY(110vh) rotate(540deg);opacity:0}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
      `}</style>
    </div>
  );
}
