export default {
  title: 'Components/Badges',
};

export const AllVariants = () => `
<div class="demo-section">
  <div class="demo-label">All badge variants</div>
  <div class="demo-row">
    <span class="sa-badge sa-badge-ok">Healthy</span>
    <span class="sa-badge sa-badge-error">Failed</span>
    <span class="sa-badge sa-badge-warning">Attention</span>
    <span class="sa-badge sa-badge-info">Messaging</span>
    <span class="sa-badge sa-badge-neutral">Infra</span>
  </div>
</div>
`;

export const Ok = () => `<div class="demo-row"><span class="sa-badge sa-badge-ok">Healthy</span></div>`;
export const Error = () => `<div class="demo-row"><span class="sa-badge sa-badge-error">Failed</span></div>`;
export const Warning = () => `<div class="demo-row"><span class="sa-badge sa-badge-warning">Attention</span></div>`;
export const Info = () => `<div class="demo-row"><span class="sa-badge sa-badge-info">Messaging</span></div>`;
export const Neutral = () => `<div class="demo-row"><span class="sa-badge sa-badge-neutral">Infra</span></div>`;

/* ── In table context ──────────────────────── */
export const InContext = () => `
<div class="sa-table-wrap">
  <table class="sa-table">
    <thead><tr><th>Agent</th><th>Status</th><th>Type</th></tr></thead>
    <tbody>
      <tr><td class="sa-cell-strong">nafs-brain</td><td><span class="sa-badge sa-badge-ok">Healthy</span></td><td><span class="sa-badge sa-badge-info">Management</span></td></tr>
      <tr><td class="sa-cell-strong">nafs-codex</td><td><span class="sa-badge sa-badge-ok">Healthy</span></td><td><span class="sa-badge sa-badge-neutral">Engineering</span></td></tr>
      <tr><td class="sa-cell-strong">equity-analyst</td><td><span class="sa-badge sa-badge-warning">Slow</span></td><td><span class="sa-badge sa-badge-info">Research</span></td></tr>
      <tr><td class="sa-cell-strong">nafs-gem</td><td><span class="sa-badge sa-badge-error">Failed</span></td><td><span class="sa-badge sa-badge-neutral">Automation</span></td></tr>
    </tbody>
  </table>
</div>
`;
