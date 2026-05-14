// PoliTikTok - Chat Page Logic

let activeTopicId = null;

document.addEventListener('DOMContentLoaded', () => {
  if (!window.ChatData) return;

  // Default to first topic
  activeTopicId = window.ChatData.topics[0]?.id || null;

  renderTopics();
  renderMessages();
  initChatInput();
});

function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  return `hsl(${h}, 60%, 45%)`;
}

function getInitials(name) {
  return name.charAt(0).toUpperCase();
}

function formatTimestamp(ts) {
  const now = Date.now();
  const diff = now - ts;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "Adesso";
  if (minutes < 60) return `${minutes} min fa`;
  if (hours < 24) return `${hours} ore fa`;
  if (days === 1) return "Ieri";
  return `${days} giorni fa`;
}

function setActiveTopic(topicId) {
  activeTopicId = topicId;
  renderTopics();
  renderMessages();
  updateChannelHeader();
}

function updateChannelHeader() {
  const header = document.getElementById('activeChannelHeader');
  if (!header) return;

  const topic = window.ChatData.topics.find(t => t.id === activeTopicId);
  if (!topic) {
    header.innerHTML = '';
    return;
  }

  header.innerHTML = `
    <div class="channel-header-content">
      <span class="channel-header-emoji">${topic.emoji}</span>
      <div class="channel-header-info">
        <h2 class="channel-header-title">${topic.title}</h2>
        <a href="${topic.url}" target="_blank" rel="noopener noreferrer" class="channel-header-link">
          🔗 Fonte: ${topic.source}
        </a>
      </div>
    </div>
  `;
}

function renderTopics() {
  const topicList = document.getElementById('topicList');
  if (!topicList || !window.ChatData.topics) return;

  topicList.innerHTML = '';

  window.ChatData.topics.forEach(topic => {
    const item = document.createElement('button');
    item.className = `topic-item${topic.id === activeTopicId ? ' active' : ''}`;
    item.dataset.topicId = topic.id;

    const msgCount = window.ChatData.messages.filter(m => m.topicId === topic.id).length;

    item.innerHTML = `
      <span class="topic-item-emoji">${topic.emoji}</span>
      <div class="topic-item-info">
        <div class="topic-item-title">${topic.title}</div>
        <div class="topic-item-source">${topic.source} · ${msgCount} messaggi</div>
      </div>
    `;

    item.addEventListener('click', () => setActiveTopic(topic.id));

    topicList.appendChild(item);
  });
}

function renderMessages() {
  const container = document.getElementById('chatMessages');
  if (!container || !window.ChatData.messages) return;

  container.innerHTML = '';

  const filtered = window.ChatData.messages.filter(m => m.topicId === activeTopicId);
  const sorted = [...filtered].sort((a, b) => a.timestamp - b.timestamp);

  if (sorted.length === 0) {
    container.innerHTML = `
      <div class="no-messages">
        <span class="no-messages-emoji">💬</span>
        <p>Nessun messaggio in questo canale.</p>
        <p class="no-messages-hint">Sii il primo a scrivere!</p>
      </div>
    `;
    return;
  }

  sorted.forEach(msg => {
    const el = createMessageElement(msg);
    container.appendChild(el);
  });

  container.scrollTop = container.scrollHeight;
}

function createMessageElement(msg) {
  const div = document.createElement('div');
  div.className = `message${msg.isModerator ? ' moderator' : ''}`;
  div.dataset.messageId = msg.id;
  div.dataset.topicId = msg.topicId;

  const user = findUser(msg.userId);
  const avatarColor = getAvatarColor(msg.userId);
  const initials = getInitials(msg.userId);
  const timeStr = formatTimestamp(msg.timestamp);

  const reactionsHtml = Object.entries(msg.reactions || {}).map(([emoji, count]) => `
    <span class="reaction" data-emoji="${emoji}" data-message-id="${msg.id}">
      <span class="reaction-emoji">${emoji}</span>
      <span class="reaction-count">${count}</span>
    </span>
  `).join('');

  const badgeHtml = msg.isModerator ? `<span class="message-badge">${user?.badge || 'MOD'}</span>` : '';

  const textHtml = msg.text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');

  div.innerHTML = `
    <div class="message-header">
      <div class="message-avatar" style="background: ${avatarColor};">${initials}</div>
      <div class="message-info">
        <span class="message-name">${msg.userId}</span>
        ${badgeHtml}
        <span class="message-time">${timeStr}</span>
      </div>
    </div>
    <div class="message-text">${textHtml}</div>
    <div class="message-reactions">${reactionsHtml}</div>
  `;

  return div;
}

function findUser(userId) {
  const mod = window.ChatData.moderators.find(m => m.id === userId || m.name === userId);
  return mod || null;
}

function initChatInput() {
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSendBtn');
  const container = document.getElementById('chatMessages');

  if (!input || !sendBtn || !container) return;

  // Update placeholder with active topic name
  const topic = window.ChatData.topics.find(t => t.id === activeTopicId);
  if (topic) {
    input.placeholder = `Scrivi un messaggio in ${topic.title}...`;
  }

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    const msg = {
      id: `user_${Date.now()}`,
      userId: "Anonimo",
      isModerator: false,
      topicId: activeTopicId,
      text: text,
      timestamp: Date.now(),
      reactions: {}
    };

    // Add to data so it persists when switching channels
    window.ChatData.messages.push(msg);

    const el = createMessageElement(msg);
    container.appendChild(el);
    container.scrollTop = container.scrollHeight;

    input.value = '';
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  container.addEventListener('click', (e) => {
    const reaction = e.target.closest('.reaction');
    if (!reaction) return;

    const countEl = reaction.querySelector('.reaction-count');
    const emoji = reaction.dataset.emoji;
    const msgId = reaction.dataset.messageId;

    let count = parseInt(countEl.textContent);

    if (reaction.classList.contains('active')) {
      count--;
      reaction.classList.remove('active');
    } else {
      count++;
      reaction.classList.add('active');
    }

    countEl.textContent = count;

    if (count === 0) {
      reaction.remove();
    }
  });
}
