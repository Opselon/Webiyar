export const appCss = String.raw`
:root {
  --bg: #050915;
  --panel: #0b1224;
  --surface: #101932;
  --surface-2: #0c1a32;
  --surface-3: #142345;
  --accent: #59f6e1;
  --accent-2: #7cc5ff;
  --accent-3: #f4b86c;
  --text: #f8fafc;
  --muted: #c6d0e1;
  --muted-2: #9fb3c8;
  --border: #1c2d4f;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
  --radius-lg: 1.5rem;
  --radius-md: 1rem;
  --radius-sm: 0.65rem;
  --blur: blur(16px);
  color-scheme: dark;
  font-family: 'Inter', 'Vazirmatn', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: radial-gradient(circle at 20% 20%, rgba(89, 246, 225, 0.09), transparent 40%),
    radial-gradient(circle at 70% 10%, rgba(124, 197, 255, 0.1), transparent 35%),
    radial-gradient(circle at 40% 70%, rgba(244, 184, 108, 0.12), transparent 35%),
    var(--bg);
  color: var(--text);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background-attachment: fixed;
}

a {
  color: inherit;
  text-decoration: none;
}

main.client-shell {
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: clamp(1.25rem, 3vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.client-nav {
  position: sticky;
  top: 0;
  backdrop-filter: var(--blur);
  background: rgba(5, 9, 21, 0.8);
  border-bottom: 1px solid var(--border);
  z-index: 50;
}

.client-nav .inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.client-nav .brand {
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.client-nav .brand .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(140deg, var(--accent), var(--accent-2));
  box-shadow: 0 0 0 8px rgba(89, 246, 225, 0.12);
}

.client-nav nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.client-nav nav a {
  padding: 0.55rem 0.9rem;
  border-radius: var(--radius-sm);
  color: var(--muted);
  font-weight: 600;
  transition: color 160ms ease, background 160ms ease, transform 160ms ease;
}

.client-nav nav a:hover,
.client-nav nav a:focus-visible {
  color: var(--text);
  background: rgba(89, 246, 225, 0.08);
  transform: translateY(-1px);
}

.client-nav .actions {
  margin-left: auto;
  display: flex;
  gap: 0.6rem;
}

.btn-solid,
.btn-ghost,
.btn-outline {
  border-radius: 999px;
  padding: 0.65rem 1.25rem;
  font-weight: 700;
  border: 1px solid transparent;
  transition: transform 150ms ease, box-shadow 180ms ease, background 180ms ease, border-color 180ms ease;
  cursor: pointer;
}

.btn-solid {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #020617;
  box-shadow: 0 16px 40px rgba(89, 246, 225, 0.28);
  border-color: rgba(89, 246, 225, 0.8);
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.04);
  border-color: var(--border);
  color: var(--text);
}

.btn-outline {
  border-color: rgba(124, 197, 255, 0.5);
  color: var(--text);
  background: rgba(124, 197, 255, 0.08);
}

.btn-solid:hover,
.btn-outline:hover,
.btn-ghost:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 52px rgba(0, 0, 0, 0.28);
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  align-items: center;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: linear-gradient(120deg, rgba(89, 246, 225, 0.1), rgba(124, 197, 255, 0.12));
  box-shadow: var(--shadow);
}

.hero-grid .eyebrow {
  display: inline-flex;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: rgba(89, 246, 225, 0.14);
  color: var(--accent);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.hero-grid h1 {
  margin: 0 0 0.65rem;
  font-size: clamp(2.1rem, 4vw, 3.3rem);
  letter-spacing: -0.03em;
}

.hero-grid p.lead {
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.8;
  margin: 0 0 1rem;
}

.hero-grid .badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--muted-2);
  font-weight: 600;
}

.badge .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 6px rgba(89, 246, 225, 0.16);
}

.glass {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  padding: 1rem;
  box-shadow: var(--shadow);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 0.9rem;
}

.stat-card {
  padding: 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background: var(--surface);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.stat-card h3 {
  margin: 0;
  color: var(--accent);
  font-size: 1.9rem;
}

.stat-card p {
  margin: 0.35rem 0 0;
  color: var(--muted);
}

.section {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: clamp(1.25rem, 2vw, 2rem);
  background: var(--panel);
  box-shadow: var(--shadow);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.section-header h2 {
  margin: 0;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
}

.section-header .hint {
  color: var(--muted);
  margin: 0;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.9rem;
}

.service-card {
  background: var(--surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.service-card h3 {
  margin: 0;
}

.service-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.service-card .chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.chip {
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--muted-2);
  font-weight: 600;
}

.timeline {
  display: grid;
  gap: 1rem;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  inset: 0 0 0 12px;
  width: 2px;
  background: linear-gradient(180deg, rgba(89, 246, 225, 0.7), rgba(124, 197, 255, 0.7));
}

.timeline-item {
  position: relative;
  padding-left: 2.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background: var(--surface);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.timeline-item .dot {
  position: absolute;
  left: 6px;
  top: 1rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 8px rgba(89, 246, 225, 0.1);
}

.timeline-item h3 {
  margin: 0.8rem 0 0.25rem;
}

.timeline-item p {
  margin: 0 0 0.9rem;
  color: var(--muted);
  line-height: 1.65;
}

.checklist {
  display: grid;
  gap: 0.6rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.checklist li {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  color: var(--muted);
}

.checklist .icon {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: rgba(89, 246, 225, 0.12);
  border: 1px solid rgba(89, 246, 225, 0.3);
  display: grid;
  place-items: center;
  color: var(--accent);
  font-weight: 800;
}

.pricing-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.price-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: linear-gradient(160deg, rgba(89, 246, 225, 0.08), rgba(16, 25, 50, 0.8));
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
}

.price-card.highlight::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at 80% 0%, rgba(124, 197, 255, 0.16), transparent 32%);
}

.price-card h3 {
  margin: 0;
}

.price-card .value {
  font-size: 1.8rem;
  font-weight: 800;
}

.price-card .meta {
  color: var(--muted);
  margin: 0;
}

.price-card .features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.45rem;
}

.price-card .features li {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--muted);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.testimonial {
  padding: 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background: var(--surface-2);
  display: grid;
  gap: 0.6rem;
}

.testimonial .quote {
  color: var(--text);
  line-height: 1.7;
}

.testimonial .author {
  color: var(--muted);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.tag {
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--muted);
}

.split {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.footnote {
  color: var(--muted-2);
  font-size: 0.95rem;
  line-height: 1.6;
}

.code-block {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  background: #0a0f1c;
  color: #c9d1e1;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  padding: 0.9rem;
  overflow-x: auto;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}

.metric-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1rem;
  background: var(--surface);
  display: grid;
  gap: 0.35rem;
}

.metric-card .label {
  color: var(--muted-2);
  margin: 0;
}

.metric-card .value {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 800;
}

.metric-card .desc {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.card-cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  font-weight: 700;
}

.stepper {
  counter-reset: step;
  display: grid;
  gap: 0.8rem;
}

.stepper .step {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-3);
  padding: 1rem;
  position: relative;
}

.stepper .step::before {
  counter-increment: step;
  content: counter(step);
  position: absolute;
  inset: 1rem auto auto 1rem;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid rgba(89, 246, 225, 0.4);
  background: rgba(89, 246, 225, 0.1);
  display: grid;
  place-items: center;
  font-weight: 800;
  color: var(--accent);
}

.stepper .step h3 {
  margin: 0 0 0.35rem 2.4rem;
}

.stepper .step p {
  margin: 0 0 0 2.4rem;
  color: var(--muted);
  line-height: 1.6;
}

.featured-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1rem;
  background: linear-gradient(180deg, rgba(16, 25, 50, 0.95), rgba(16, 25, 50, 0.7));
  position: relative;
  overflow: hidden;
}

.featured-card .accented {
  color: var(--accent);
}

.featured-card .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.85rem;
}

.featured-card .pill {
  display: inline-flex;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--muted-2);
  gap: 0.35rem;
  align-items: center;
}

.callout {
  border: 1px dashed rgba(89, 246, 225, 0.6);
  padding: 1rem;
  border-radius: var(--radius-md);
  background: rgba(89, 246, 225, 0.05);
  color: var(--muted);
}

.dual {
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.footer {
  max-width: 1200px;
  margin: 2rem auto 3rem;
  padding: 1rem 1.5rem;
  display: grid;
  gap: 0.75rem;
  color: var(--muted-2);
}

.footer .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.9rem;
}

.footer .title {
  color: var(--text);
  font-weight: 800;
}

.lang-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  color: var(--muted);
}

.table {
  width: 100%;
  border-collapse: collapse;
  color: var(--muted);
}

.table th,
.table td {
  border: 1px solid var(--border);
  padding: 0.65rem 0.75rem;
}

.table th {
  background: var(--surface);
  color: var(--text);
}

.table tbody tr:nth-child(every) {
  background: rgba(255, 255, 255, 0.02);
}

.card-stack {
  display: grid;
  gap: 0.75rem;
}

.inline-badges {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.quote-block {
  border-left: 3px solid var(--accent);
  padding-left: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .client-nav .inner {
    flex-wrap: wrap;
  }
  .client-nav .actions {
    width: 100%;
    justify-content: flex-start;
  }
  .hero-grid {
    padding: 1.2rem;
  }
  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
`;
