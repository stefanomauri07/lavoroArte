// PoliticaPlay - Infographic Page Logic

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));

  if (!window.TopicsData || isNaN(id) || id < 0 || id >= window.TopicsData.length) {
    showError();
    return;
  }

  const topic = window.TopicsData[id];
  renderInfographic(topic);
});

function showError() {
  const main = document.getElementById('infographicMain');
  main.innerHTML = `
    <div class="infographic-error">
      <div class="error-emoji">😕</div>
      <h2>Topic non trovato</h2>
      <p>L'infografica che cerchi non esiste o è stata rimossa.</p>
      <a href="../../index.html#topic" class="btn btn-primary">TORNA AI TOPIC</a>
    </div>
  `;
}

function renderInfographic(topic) {
  const main = document.getElementById('infographicMain');

  const timelineHtml = topic.timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot" style="background: ${topic.color};"></div>
      <div class="timeline-content">
        <span class="timeline-year">${item.year}</span>
        <p class="timeline-event">${item.event}</p>
      </div>
    </div>
  `).join('');

  const statsHtml = topic.stats.map(stat => `
    <div class="stat-card">
      <div class="stat-bar" style="width: ${parsePercent(stat.value)}%; background: ${stat.color};"></div>
      <span class="stat-value" style="color: ${stat.color};">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');

  const factsHtml = topic.keyFacts.map(fact => `
    <li class="fact-item">
      <span class="fact-check">✓</span>
      <span>${fact}</span>
    </li>
  `).join('');

  const heroImageHtml = topic.imageUrl
    ? `<img src="${topic.imageUrl}" alt="${topic.title}" class="hero-image">`
    : `<div class="hero-emoji">${topic.emoji}</div>`;

  main.innerHTML = `
    <section class="infographic-hero" style="background: linear-gradient(135deg, ${topic.color}, ${adjustColor(topic.color, -40)});">
      ${heroImageHtml}
      <h1 class="hero-title">${topic.title}</h1>
      <p class="hero-subtitle">${topic.subtitle}</p>
    </section>

    <div class="container infographic-body">
      <section class="infographic-section">
        <h2 class="section-heading">Panoramica</h2>
        <p class="section-text">${topic.description}</p>
      </section>

      <section class="infographic-section">
        <h2 class="section-heading">Numeri Chiave</h2>
        <div class="stats-grid">
          ${statsHtml}
        </div>
      </section>

      <section class="infographic-section">
        <h2 class="section-heading">Timeline</h2>
        <div class="timeline">
          ${timelineHtml}
        </div>
      </section>

      <section class="infographic-section">
        <h2 class="section-heading">Fatti Essenziali</h2>
        <ul class="key-facts">
          ${factsHtml}
        </ul>
      </section>

      <div class="infographic-actions">
        <a href="../../index.html#topic" class="btn btn-primary">TORNA AI TOPIC</a>
      </div>
    </div>
  `;
}

function parsePercent(value) {
  const num = parseFloat(value.replace(/[^0-9.,]/g, '').replace(',', '.'));
  if (isNaN(num)) return 50;
  if (num > 100) return Math.min(num / 10, 95);
  return Math.max(num, 10);
}

function adjustColor(hex, amount) {
  hex = hex.replace('#', '');
  const r = Math.max(0, Math.min(255, parseInt(hex.substring(0, 2), 16) + amount));
  const g = Math.max(0, Math.min(255, parseInt(hex.substring(2, 4), 16) + amount));
  const b = Math.max(0, Math.min(255, parseInt(hex.substring(4, 6), 16) + amount));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
