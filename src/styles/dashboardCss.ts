export const dashboardCss = String.raw`
.dashboard { display: grid; gap: 1rem; max-width: 1200px; margin: 0 auto; }
.dashboard .panels { display: grid; gap: 0.9rem; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
.dashboard .panel { border: 1px solid var(--border); background: rgba(255,255,255,0.03); border-radius: 0.9rem; padding: 1rem; }
.dashboard .panel h3 { margin: 0 0 0.35rem; font-size: 1rem; }
.dashboard .metric { font-size: 1.3rem; font-weight: 700; color: var(--accent); }
.dashboard .muted { color: var(--muted); font-size: 0.95rem; }
.dashboard .table { width: 100%; border-collapse: collapse; }
.dashboard .table th, .dashboard .table td { border: 1px solid var(--border); padding: 0.6rem 0.75rem; text-align: start; color: var(--muted); }
.dashboard .table th { color: var(--text); background: rgba(255,255,255,0.04); }
.dashboard .badge { padding: 0.25rem 0.6rem; border-radius: 999px; border: 1px solid var(--border); font-size: 0.85rem; color: var(--text); }
.dashboard form { display: grid; gap: 0.6rem; background: var(--panel); border: 1px solid var(--border); border-radius: 0.9rem; padding: 1rem; }
.dashboard label { display: flex; flex-direction: column; gap: 0.3rem; font-weight: 600; color: var(--text); }
.dashboard input, .dashboard textarea, .dashboard select { width: 100%; padding: 0.65rem 0.75rem; border-radius: 0.6rem; border: 1px solid var(--border); background: rgba(255,255,255,0.04); color: var(--text); }
.dashboard textarea { min-height: 120px; resize: vertical; }
.dashboard code { background: rgba(255,255,255,0.06); padding: 0.2rem 0.35rem; border-radius: 0.45rem; }
.dashboard .flex { display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center; }
.dashboard .endpoint { display: flex; gap: 0.4rem; align-items: center; font-family: 'JetBrains Mono', 'Fira Code', monospace; }
.dashboard .endpoint .method { padding: 0.25rem 0.5rem; border-radius: 0.5rem; font-weight: 700; }
.dashboard .method.get { color: #7dd3fc; border: 1px solid rgba(125,211,252,0.5); }
.dashboard .method.post { color: #86efac; border: 1px solid rgba(134,239,172,0.5); }
.dashboard .method.put { color: #fcd34d; border: 1px solid rgba(252,211,77,0.5); }
.dashboard .method.delete { color: #fca5a5; border: 1px solid rgba(252,165,165,0.5); }
.dashboard .cards { display: grid; gap: 0.75rem; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
.dashboard .card-title { display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; }
.dashboard .note { font-size: 0.9rem; color: var(--muted); }
`;
