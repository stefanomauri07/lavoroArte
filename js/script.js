// PoliticaPlay - Main JavaScript
// Handles navigation, topics carousel with Wikipedia images, drag-to-scroll, and interactions

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Load hero background with Wikipedia image
  loadHeroBackground();

  // Render topics carousel with Wikipedia images
  renderTopicsCarousel();
});

// Fetch single image from Wikipedia API
async function fetchWikiImage(title, size = 600) {
  try {
    const url = `https://it.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=${size}&format=json&origin=*`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.query || !data.query.pages) return null;

    const pages = Object.values(data.query.pages);
    if (pages.length === 0 || !pages[0].thumbnail) return null;

    return pages[0].thumbnail.source;
  } catch (error) {
    console.warn(`Failed to fetch image for "${title}":`, error.message);
    return null;
  }
}

// Fetch images for all topics in parallel
async function fetchTopicImages() {
  if (!window.TopicsData) return;

  const promises = window.TopicsData.map(async (topic) => {
    if (topic.wikiTitle) {
      topic.imageUrl = await fetchWikiImage(topic.wikiTitle, 600);
    }
    // Fallback to hardcoded image if Wikipedia API returns nothing
    if (!topic.imageUrl && topic.fallbackImage) {
      topic.imageUrl = topic.fallbackImage;
    }
  });

  await Promise.all(promises);
}

// Load hero background with Parliament image from Wikipedia
async function loadHeroBackground() {
  const heroBg = document.getElementById('heroBg');
  if (!heroBg) return;

  const fallback = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
  const imageUrl = await fetchWikiImage('Palazzo Montecitorio', 1920);

  if (imageUrl) {
    heroBg.style.background = `linear-gradient(135deg, rgba(26, 26, 46, 0.85) 0%, rgba(22, 33, 62, 0.85) 100%), url("${imageUrl}") center/cover no-repeat fixed`;
  } else {
    heroBg.style.background = fallback;
  }
}

// Render topics carousel with loading placeholders then images
async function renderTopicsCarousel() {
  const carousel = document.getElementById('topicsCarousel');
  if (!carousel || !window.TopicsData) return;

  // Show loading placeholders first
  carousel.innerHTML = '';

  window.TopicsData.forEach((topic) => {
    const card = document.createElement('a');
    card.className = 'topic-card';
    card.href = `games/infographic/index.html?id=${topic.id}`;
    card.style.setProperty('--card-color', topic.color);
    card.dataset.topicId = topic.id;

    card.innerHTML = `
      <div class="topic-card-bg">
        <div class="topic-card-emoji">${topic.emoji}</div>
      </div>
      <div class="topic-card-overlay">
        <h3 class="topic-card-title">${topic.title}</h3>
        <p class="topic-card-subtitle">${topic.subtitle}</p>
      </div>
    `;

    carousel.appendChild(card);
  });

  // Initialize drag-to-scroll immediately
  initDragScroll(carousel);

  // Fetch images in background and update cards
  await fetchTopicImages();

  window.TopicsData.forEach((topic) => {
    if (topic.imageUrl) {
      const card = carousel.querySelector(`[data-topic-id="${topic.id}"]`);
      if (card) {
        const bg = card.querySelector('.topic-card-bg');
        bg.innerHTML = `<img src="${topic.imageUrl}" alt="${topic.title}" class="topic-card-image" loading="lazy">`;
        bg.classList.add('has-image');
      }
    }
  });
}

// Drag-to-scroll implementation
function initDragScroll(container) {
  let isDown = false;
  let startX;
  let scrollLeft;
  let velocity = 0;
  let lastX = 0;
  let lastTime = 0;
  let animationId = null;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.style.cursor = 'grabbing';
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    lastX = e.pageX;
    lastTime = Date.now();
    velocity = 0;
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  });

  container.addEventListener('mouseleave', () => {
    if (isDown) {
      isDown = false;
      container.style.cursor = 'grab';
      applyInertia(container, velocity);
    }
  });

  container.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      container.style.cursor = 'grab';
      applyInertia(container, velocity);
    }
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;

    const now = Date.now();
    const dt = now - lastTime;
    if (dt > 0) {
      velocity = (e.pageX - lastX) / dt * 15;
    }
    lastX = e.pageX;
    lastTime = now;
  });

  // Touch events
  let touchStartX = 0;
  let touchScrollLeft = 0;
  let touchLastX = 0;
  let touchLastTime = 0;
  let touchVelocity = 0;

  container.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX - container.offsetLeft;
    touchScrollLeft = container.scrollLeft;
    touchLastX = e.touches[0].pageX;
    touchLastTime = Date.now();
    touchVelocity = 0;
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - touchStartX) * 1.5;
    container.scrollLeft = touchScrollLeft - walk;

    const now = Date.now();
    const dt = now - touchLastTime;
    if (dt > 0) {
      touchVelocity = (e.touches[0].pageX - touchLastX) / dt * 15;
    }
    touchLastX = e.touches[0].pageX;
    touchLastTime = now;
  }, { passive: true });

  container.addEventListener('touchend', () => {
    applyInertia(container, touchVelocity);
  });

  function applyInertia(el, vel) {
    if (Math.abs(vel) < 0.5) return;
    function step() {
      el.scrollLeft -= vel;
      vel *= 0.92;
      if (Math.abs(vel) > 0.5) {
        animationId = requestAnimationFrame(step);
      }
    }
    animationId = requestAnimationFrame(step);
  }
}
