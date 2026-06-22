export default {
  title: 'Components/Tables',
};

/* ── Basic Table ────────────────────────────── */
const tableRows = `
<tr><td class="sa-cell-num">1</td><td class="sa-cell-strong">nafs-brain</td><td class="sa-cell-mono">claude-opus-4</td><td>10m</td><td><span class="sa-badge sa-badge-ok">Healthy</span></td></tr>
<tr><td class="sa-cell-num">2</td><td class="sa-cell-strong">nafs-codex</td><td class="sa-cell-mono">claude-opus-4</td><td>10m</td><td><span class="sa-badge sa-badge-ok">Healthy</span></td></tr>
<tr><td class="sa-cell-num">3</td><td class="sa-cell-strong">nafs-qa</td><td class="sa-cell-mono">claude-haiku-4-5</td><td>1m</td><td><span class="sa-badge sa-badge-ok">Healthy</span></td></tr>
<tr><td class="sa-cell-num">4</td><td class="sa-cell-strong">nafs-biz</td><td class="sa-cell-mono">claude-sonnet-4-6</td><td>60m</td><td><span class="sa-badge sa-badge-ok">Healthy</span></td></tr>
<tr><td class="sa-cell-num">5</td><td class="sa-cell-strong">equity-analyst</td><td class="sa-cell-mono">claude-haiku-4-5</td><td>15m</td><td><span class="sa-badge sa-badge-warning">Slow</span></td></tr>
`;

export const Default = () => `
<div class="sa-table-wrap">
  <table class="sa-table">
    <thead><tr><th>#</th><th>Agent</th><th>Model</th><th>Schedule</th><th>Status</th></tr></thead>
    <tbody>${tableRows}</tbody>
  </table>
</div>
`;

/* ── With Toolbar ──────────────────────────── */
export const WithToolbar = () => `
<div class="sa-table-wrap">
  <div class="sa-table-toolbar">
    <div>
      <div class="sa-table-title">Agent Fleet</div>
      <div class="sa-table-meta">All routed through FCC proxy · 127.0.0.1:8082</div>
    </div>
    <input class="sa-table-search" type="text" placeholder="Search agents…">
  </div>
  <table class="sa-table">
    <thead><tr><th>#</th><th>Agent</th><th>Model</th><th>Schedule</th><th>Status</th></tr></thead>
    <tbody>${tableRows}</tbody>
  </table>
</div>
`;

/* ── Compact ───────────────────────────────── */
export const Compact = () => `
<div class="sa-table-wrap">
  <table class="sa-table sa-table-compact">
    <thead><tr><th>#</th><th>Agent</th><th>Model</th><th>Schedule</th><th>Status</th></tr></thead>
    <tbody>${tableRows}</tbody>
  </table>
</div>
`;

/* ── Striped ───────────────────────────────── */
export const Striped = () => `
<div class="sa-table-wrap">
  <table class="sa-table sa-table-striped">
    <thead><tr><th>#</th><th>Agent</th><th>Model</th><th>Schedule</th><th>Status</th></tr></thead>
    <tbody>${tableRows}</tbody>
  </table>
</div>
`;

/* ── Sortable Headers ──────────────────────── */
export const Sortable = () => `
<div class="sa-table-wrap">
  <table class="sa-table">
    <thead><tr><th>#</th><th data-sort="">Agent</th><th data-sort="">Model</th><th data-sort="asc">Schedule ↑</th><th data-sort="">Status</th></tr></thead>
    <tbody>${tableRows}</tbody>
  </table>
</div>
`;

/* ── With Footer ───────────────────────────── */
export const WithFooter = () => `
<div class="sa-table-wrap">
  <table class="sa-table sa-table-striped">
    <thead><tr><th>#</th><th>Agent</th><th>Model</th><th>Schedule</th><th>Status</th></tr></thead>
    <tbody>${tableRows}</tbody>
  </table>
  <div class="sa-table-footer">
    <span>5 agents · All FCC</span>
    <span>⬤ 2 Opus · ⬤ 1 Sonnet · ⬤ 2 Haiku</span>
  </div>
</div>
`;
