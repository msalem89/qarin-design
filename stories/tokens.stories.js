export default {
  title: 'Foundation/Colors',
};

const swatch = (name, hex, bg) => `
<div style="background:var(--sa-white);border:1px solid var(--sa-border);border-radius:var(--sa-radius-md);overflow:hidden;box-shadow:var(--sa-shadow-sm);">
  <div style="height:64px;background:${bg}"></div>
  <div style="padding:0.5rem 0.75rem;">
    <div style="font-family:var(--sa-font-heading);font-size:var(--sa-text-xs);font-weight:600;color:var(--sa-dark);">${name}</div>
    <div style="font-family:var(--sa-font-mono);font-size:11px;color:var(--sa-text-muted);">${hex}</div>
  </div>
</div>`;

export const Primary = () => `
<div class="demo-section">
  <div class="demo-label">Primary Scale</div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;">
    ${swatch('Primary', '#8E85A3', '#8E85A3')}
    ${swatch('Primary Dark', '#5B5368', '#5B5368')}
    ${swatch('Primary Light', '#D8D4E4', '#D8D4E4')}
    ${swatch('Accent', '#B5A9C8', '#B5A9C8')}
  </div>
</div>
`;

export const Semantic = () => `
<div class="demo-section">
  <div class="demo-label">Semantic Colors</div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;">
    ${swatch('Success', '#6B9A7A', '#6B9A7A')}
    ${swatch('Warning', '#C4A855', '#C4A855')}
    ${swatch('Error', '#B87A73', '#B87A73')}
    ${swatch('Info', '#7B8EA8', '#7B8EA8')}
  </div>
</div>
`;

export const Surfaces = () => `
<div class="demo-section">
  <div class="demo-label">Surfaces</div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;">
    ${swatch('Background', '#F7F6FA', '#F7F6FA')}
    ${swatch('White', '#FFFFFF', '#FFFFFF')}
    ${swatch('Border', '#E5E3EC', '#E5E3EC')}
    ${swatch('Dark', '#2B2738', '#2B2738')}
  </div>
</div>
`;
