export const baseCss = String.raw`
:root {
  color-scheme: dark;
  --bg: #0b1221;
  --panel: #0f172a;
  --accent: #5dd6c9;
  --accent2: #90e0ef;
  --text: #e5e7eb;
  --muted: #cbd5e1;
  --border: #1e293b;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg);
  color: var(--text);
}
* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; background: radial-gradient(circle at 20% 20%, rgba(93,214,201,0.08), transparent 35%), var(--bg); }
a { color: inherit; text-decoration: none; }
header, footer { background: var(--panel); border-bottom: 1px solid var(--border); }
nav { display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap; }
main { display: flex; flex-direction: column; gap: 2rem; padding: clamp(1.5rem, 3vw, 3rem); max-width: 1200px; margin: 0 auto; width: 100%; }
.container { max-width: 1200px; margin: 0 auto; padding: 1rem 1.5rem; width: 100%; }
.nav-brand { font-weight: 700; letter-spacing: -0.02em; color: var(--accent); }
.nav-actions { margin-left: auto; display: flex; gap: 0.75rem; align-items: center; }
.btn { padding: 0.7rem 1.2rem; border-radius: 999px; border: 1px solid var(--accent); color: var(--bg); background: var(--accent); font-weight: 600; transition: transform 120ms ease, box-shadow 120ms ease; }
.btn:hover { transform: translateY(-1px); box-shadow: 0 10px 30px rgba(93,214,201,0.15); }
.btn.secondary { background: transparent; color: var(--text); border-color: var(--border); }
.hero-shell { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; padding: clamp(1.5rem, 3vw, 2.5rem); background: linear-gradient(120deg, rgba(93,214,201,0.12), rgba(144,224,239,0.08)); border: 1px solid var(--border); border-radius: 1.25rem; }
.hero-shell h1 { font-size: clamp(1.9rem, 3vw, 2.8rem); margin: 0 0 0.35rem; }
.hero-shell .lead { margin: 0 0 0.75rem; color: var(--muted); line-height: 1.7; }
.section-shell { border: 1px solid var(--border); border-radius: 1.1rem; padding: clamp(1.25rem, 2vw, 2rem); background: var(--panel); display: flex; flex-direction: column; gap: 1rem; }
.section-header { display: flex; align-items: baseline; gap: 0.75rem; justify-content: space-between; }
.section-header h2 { margin: 0; font-size: clamp(1.1rem, 2vw, 1.6rem); }
.section-header p { margin: 0; }
.grid { display: grid; gap: 1rem; }
.grid.two { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
.grid.three { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
.card-grid { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.75rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.card { padding: 1rem; border-radius: 0.9rem; border: 1px solid var(--border); background: rgba(255,255,255,0.02); margin: 0; }
.card.bordered { background: rgba(255,255,255,0.03); }
.card.soft { background: rgba(255,255,255,0.04); border-style: dashed; }
.card-title { margin: 0 0 0.4rem; font-size: 1rem; }
.pill-list, .pill-rows { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 0.5rem; }
.pill { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.35rem 0.8rem; border-radius: 999px; background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--muted); font-size: 0.9rem; }
.pill.accent { background: rgba(93,214,201,0.16); color: var(--text); border-color: rgba(93,214,201,0.4); }
.eyebrow { text-transform: uppercase; letter-spacing: 0.12em; font-weight: 700; color: var(--accent2); font-size: 0.8rem; margin: 0 0 0.4rem; }
.lead { font-size: 1.05rem; }
.body { color: var(--muted); line-height: 1.7; margin: 0; }
.muted { color: var(--muted); }
.faq-list { display: grid; gap: 0.75rem; margin: 0; }
.faq-item { padding: 0.9rem 1rem; border-radius: 0.9rem; border: 1px solid var(--border); background: rgba(255,255,255,0.02); }
.faq-item dt { margin: 0 0 0.35rem; font-weight: 700; }
.faq-item dd { margin: 0; color: var(--muted); line-height: 1.7; }
.cta-shell { border: 1px solid var(--border); border-radius: 1rem; padding: 1.25rem; background: linear-gradient(140deg, rgba(93,214,201,0.15), rgba(144,224,239,0.12)); display: flex; gap: 1rem; align-items: center; justify-content: space-between; flex-wrap: wrap; }
.cta-shell h2 { margin: 0.2rem 0; }
.cta-note { color: var(--muted); margin-left: 0.75rem; font-size: 0.9rem; }
.cta-actions { display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap; }
footer { border-top: 1px solid var(--border); padding: 1.5rem 0; }
footer .inner { max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; gap: 1rem; justify-content: space-between; padding: 0 1.5rem; color: var(--muted); }
@media (max-width: 640px) {
  .section-header { flex-direction: column; align-items: flex-start; }
  .cta-shell { flex-direction: column; align-items: flex-start; }
}
`;
