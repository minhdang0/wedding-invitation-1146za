let SITE_CONTENT = null;

function setText(id, value) {
  const el = document.getElementById(id);
  if (el == null || value == null) return;
  el.innerHTML = value;
}

function applyContent(data) {
  SITE_CONTENT = data;

  // meta
  setText("meta-introHint", data.meta.introHint);
  const toastEl = document.getElementById("toast");
  if (toastEl) toastEl.textContent = data.meta.toastCopied;

  // hero
  setText("hero-badge", data.hero.badge);
  setText("hero-name1", data.hero.name1);
  setText("hero-name2", data.hero.name2);
  setText("hero-dateLabel1", data.hero.dateLabel1);
  setText("hero-dateNum", data.hero.dateNum);
  setText(
    "hero-dateLabel2",
    `${data.hero.dateLabel2}<br />${data.hero.dateYear}`,
  );
  setText("hero-cta", data.hero.cta);

  // profile
  setText("profile-groom-label", data.profile.groom.label);
  setText("profile-groom-name", data.profile.groom.name);
  setText("profile-groom-quote", `"${data.profile.groom.quote}"`);
  setText("profile-bride-label", data.profile.bride.label);
  setText("profile-bride-name", data.profile.bride.name);
  setText("profile-bride-quote", `"${data.profile.bride.quote}"`);

  // moments
  setText("moments-heading", data.moments.heading);

  // love story
  setText("loveStory-heading", data.loveStory.heading);
  setText("loveStory-sub", data.loveStory.sub);
  data.loveStory.timeline.forEach((item, i) => {
    setText(`loveStory-timeline-${i}-year`, item.year);
    setText(`loveStory-timeline-${i}-chapter`, item.chapter);
    setText(`loveStory-timeline-${i}-title`, item.title);
    setText(`loveStory-timeline-${i}-body`, item.body);
  });
  setText("loveStory-closingQuote", data.loveStory.closingQuote);
  setText("loveStory-closingSig", data.loveStory.closingSig);

  // gallery
  setText("gallery-heading", data.gallery.heading);

  // wedding info
  const wi = data.weddingInfo;
  setText("weddingInfo-sectionTitle", wi.sectionTitle);
  setText("weddingInfo-groomFamily-label", wi.groomFamily.label);
  setText("weddingInfo-groomFamily-names", wi.groomFamily.names);
  setText("weddingInfo-groomFamily-address", wi.groomFamily.address);
  setText("weddingInfo-brideFamily-label", wi.brideFamily.label);
  setText("weddingInfo-brideFamily-names", wi.brideFamily.names);
  setText("weddingInfo-brideFamily-address", wi.brideFamily.address);
  setText("weddingInfo-announce1", wi.announce1);
  setText("weddingInfo-announce2", wi.announce2);
  setText("weddingInfo-groom-name", wi.groom.name);
  setText("weddingInfo-groom-label", wi.groom.label);
  setText("weddingInfo-bride-name", wi.bride.name);
  setText("weddingInfo-bride-label", wi.bride.label);

  setText("weddingInfo-ceremony-note", wi.ceremony.note);
  setText("weddingInfo-ceremony-atLabel", wi.ceremony.atLabel);
  setText("weddingInfo-ceremony-time", wi.ceremony.time);
  setText("weddingInfo-ceremony-dayLabel", wi.ceremony.dayLabel);
  setText("weddingInfo-ceremony-dateNum", wi.ceremony.dateNum);
  setText("weddingInfo-ceremony-monthLabel", wi.ceremony.monthLabel);
  setText("weddingInfo-ceremony-year", wi.ceremony.year);
  setText("weddingInfo-ceremony-lunar", wi.ceremony.lunar);

  setText("weddingInfo-reception-title", wi.reception.title);
  setText("weddingInfo-reception-note", wi.reception.note);
  setText("weddingInfo-reception-time", wi.reception.time);
  setText("weddingInfo-reception-dayLabel", wi.reception.dayLabel);
  setText("weddingInfo-reception-dateNum", wi.reception.dateNum);
  setText("weddingInfo-reception-monthLabel", wi.reception.monthLabel);
  setText("weddingInfo-reception-year", wi.reception.year);
  setText("weddingInfo-reception-lunar", wi.reception.lunar);
  setText("weddingInfo-reception-welcomeLabel", wi.reception.welcomeLabel);
  setText("weddingInfo-reception-welcomeTime", wi.reception.welcomeTime);
  setText("weddingInfo-reception-startLabel", wi.reception.startLabel);
  setText("weddingInfo-reception-startTime", wi.reception.startTime);

  setText("weddingInfo-location-label", wi.location.label);
  setText("weddingInfo-location-venue", wi.location.venue);
  setText("weddingInfo-location-address", wi.location.address);

  // gift
  setText("gift-heading", data.gift.heading);
  setText("gift-envelopeNames", data.gift.envelopeNames);
  setText("gift-hint", data.gift.hint);

  // rsvp
  setText("rsvp-heading", data.rsvp.heading);
  const nameInput = document.getElementById("rsvp-nameInput");
  if (nameInput) nameInput.placeholder = data.rsvp.namePlaceholder;
  setText("rsvp-attendBtn", data.rsvp.attendBtn);
  setText("rsvp-declineBtn", data.rsvp.declineBtn);
  const wishInput = document.getElementById("rsvp-wishInput");
  if (wishInput) wishInput.placeholder = data.rsvp.wishPlaceholder;
  setText("rsvp-submitBtn", data.rsvp.submitBtn);

  // footer
  setText("footer-thankYou", data.footer.thankYou);
  setText("footer-signature", data.footer.signature);

  const lixiWrapper = document.getElementById("lixi-wrapper");
  if (lixiWrapper) {
    lixiWrapper.addEventListener("click", () => {
      copyToClipboard(data.gift.accountNumber, data.gift.envelopeNames);
    });
  }
}

function loadContent() {
  return fetch("../assets/data/content.json")
    .then((r) => r.json())
    .then((data) => applyContent(data))
    .catch((e) => console.warn("content.json lỗi:", e));
}

loadContent();

// ── NHẠC NỀN: CHỈ PHÁT KHI BẤM VÀO CON DẤU MỞ CỔNG ──
// (không còn autoplay lúc tải trang / không còn phát khi chạm/scroll/gõ phím bất kỳ)

function createPetal() {
  const c = document.getElementById("petal-container");
  if (!c) return;
  const p = document.createElement("div");
  p.className = "petal";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = Math.random() * 4 + 6 + "s";
  p.style.width = Math.random() * 15 + 10 + "px";
  p.style.height = Math.random() * 15 + 10 + "px";
  c.appendChild(p);
  setTimeout(() => p.remove(), 10000);
}
setInterval(createPetal, 700);

function reveal() {
  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100)
      el.classList.add("active");
  });
}
window.addEventListener("scroll", reveal);
reveal();

document.querySelectorAll(".fan-item").forEach((item) => {
  item.addEventListener(
    "touchstart",
    () => {
      document
        .querySelectorAll(".fan-item")
        .forEach((el) => el.classList.remove("tapped"));
      item.classList.add("tapped");
    },
    { passive: true },
  );
});
document.addEventListener(
  "touchstart",
  (e) => {
    if (!e.target.closest(".fan-item"))
      document
        .querySelectorAll(".fan-item")
        .forEach((el) => el.classList.remove("tapped"));
  },
  { passive: true },
);

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener(
    "touchstart",
    () => {
      document
        .querySelectorAll(".gallery-item.touched")
        .forEach((el) => el.classList.remove("touched"));
      item.classList.add("touched");
      setTimeout(() => item.classList.remove("touched"), 700);
    },
    { passive: true },
  );
});

const gObs = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in-view");
    }),
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
);
document.querySelectorAll(".gallery-reveal").forEach((el) => gObs.observe(el));

const glowClasses = ["glow-1", "glow-2", "glow-3"];
const sparkSymbols = [
  "✦",
  "✧",
  "★",
  "☆",
  "✩",
  "✫",
  "✬",
  "✭",
  "✮",
  "❀",
  "✿",
  "❁",
  "❈",
  "❉",
  "•",
  "◦",
];
const MAX_SPARKS = 14;

document.querySelectorAll(".gallery-item").forEach((item, i) => {
  item.classList.add(glowClasses[i % 3]);
  item.style.animationDelay = i * 0.38 + "s";
});

function spawnSpark(item) {
  if (item.querySelectorAll(".star-spark").length >= MAX_SPARKS) return;
  const spark = document.createElement("span");
  spark.className = "star-spark";
  spark.textContent =
    sparkSymbols[Math.floor(Math.random() * sparkSymbols.length)];
  const startX = 5 + Math.random() * 90;
  const startY = 5 + Math.random() * 90;
  spark.style.left = startX + "%";
  spark.style.top = startY + "%";
  const angle = Math.random() * Math.PI * 2;
  const radius = 35 + Math.random() * 45;
  const sx = Math.cos(angle) * radius;
  const sy = Math.sin(angle) * radius - 15;
  const sr = (Math.random() - 0.5) * 270;
  const dur = 1.2 + Math.random() * 1.2;
  spark.style.setProperty("--sx", sx + "px");
  spark.style.setProperty("--sy", sy + "px");
  spark.style.setProperty("--sr", sr + "deg");
  spark.style.animationDuration = dur + "s";
  spark.style.fontSize = 11 + Math.random() * 12 + "px";
  item.appendChild(spark);
  setTimeout(() => spark.remove(), dur * 1000 + 80);
}

const sparkObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        for (let i = 0; i < 10; i++)
          setTimeout(() => spawnSpark(e.target), i * 100);
        const interval = setInterval(() => {
          if (!document.contains(e.target)) {
            clearInterval(interval);
            return;
          }
          spawnSpark(e.target);
        }, 140);
        e.target._sparkInterval = interval;
      } else {
        clearInterval(e.target._sparkInterval);
      }
    });
  },
  { threshold: 0.1 },
);
document
  .querySelectorAll(".gallery-item")
  .forEach((el) => sparkObs.observe(el));

const bills = [
  { bg: "#2ecc71", text: "500K" },
  { bg: "#27ae60", text: "200K" },
  { bg: "#f1c40f", text: "100K" },
  { bg: "#2980b9", text: "50K" },
  { bg: "#16a085", text: "500K" },
];
function spawnMoney(cid) {
  const c = document.getElementById(cid);
  if (!c) return;
  const bill = document.createElement("div");
  bill.className = "money-bill";
  const b = bills[Math.floor(Math.random() * bills.length)];
  bill.style.background = b.bg;
  bill.textContent = b.text;
  const drift = (Math.random() - 0.5) * 140,
    spin = (Math.random() - 0.5) * 360,
    delay = Math.random() * 1.2,
    dur = 1.6 + Math.random() * 1.2;
  bill.style.setProperty("--drift", drift + "px");
  bill.style.setProperty("--spin", spin + "deg");
  bill.style.animationDuration = dur + "s";
  bill.style.animationDelay = delay + "s";
  c.appendChild(bill);
  setTimeout(() => bill.remove(), (dur + delay) * 1000 + 200);
}
setInterval(() => spawnMoney("money-main"), 900);
document.querySelectorAll(".lixi-wrapper").forEach((el) => {
  let fi = null;
  el.addEventListener("mouseenter", () => {
    fi = setInterval(() => spawnMoney("money-main"), 100);
  });
  el.addEventListener("mouseleave", () => {
    clearInterval(fi);
    fi = null;
  });
});

function copyToClipboard(text, name) {
  navigator.clipboard.writeText(text).catch(() => {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  });
  const toast = document.getElementById("toast");
  toast.style.transform = "translate(-50%, 0)";
  setTimeout(() => {
    toast.style.transform = "translate(-50%, 8rem)";
  }, 2200);
}

function createBubble() {
  const c = document.getElementById("seal-container");
  if (!c) return;
  const b = document.createElement("div");
  b.className = "seal-bubble";
  const s = Math.random() * 9 + 5;
  b.style.width = s + "px";
  b.style.height = s + "px";
  b.style.left = Math.random() * 60 + 20 + "%";
  b.style.bottom = "28%";
  b.style.animationDuration = Math.random() * 1.8 + 3 + "s";
  c.appendChild(b);
  setTimeout(() => b.remove(), 6500);
}
setInterval(createBubble, 140);

(function () {
  const lsObs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add("ls-visible");
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  );
  document.querySelectorAll(".ls-card, .ls-closing").forEach(function (el) {
    lsObs.observe(el);
  });
})();

(function () {
  function initSmoke(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d");
    const particles = [];

    function spawn() {
      const edge = Math.random();
      let x, y;
      if (edge < 0.6) {
        x = canvas.width * (0.05 + Math.random() * 0.9);
        y = canvas.height * (0.72 + Math.random() * 0.18);
      } else if (edge < 0.8) {
        x = canvas.width * (0.02 + Math.random() * 0.14);
        y = canvas.height * (0.35 + Math.random() * 0.55);
      } else {
        x = canvas.width * (0.84 + Math.random() * 0.14);
        y = canvas.height * (0.35 + Math.random() * 0.55);
      }
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.55,
        vy: -(0.32 + Math.random() * 0.58),
        radius: 12 + Math.random() * 20,
        alpha: 0,
        maxAlpha: 0.2 + Math.random() * 0.22,
        life: 0,
        maxLife: 160 + Math.random() * 150,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.007 + Math.random() * 0.013,
        growRate: 0.1 + Math.random() * 0.11,
      });
    }

    let frame = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (frame % 20 === 0) spawn();
      frame++;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.wobble += p.wobbleSpeed;
        p.x += p.vx + Math.sin(p.wobble) * 0.52;
        p.y += p.vy;
        p.radius += p.growRate;
        if (p.life < 35) {
          p.alpha = (p.life / 35) * p.maxAlpha;
        } else if (p.life > p.maxLife - 70) {
          p.alpha = ((p.maxLife - p.life) / 70) * p.maxAlpha;
        } else {
          p.alpha = p.maxAlpha;
        }
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(26,42,58,${p.alpha * 0.65})`);
        grad.addColorStop(0.3, `rgba(44,62,80,${p.alpha * 0.42})`);
        grad.addColorStop(0.65, `rgba(70,90,110,${p.alpha * 0.18})`);
        grad.addColorStop(1, `rgba(90,110,130,0)`);
        ctx.beginPath();
        ctx.ellipse(
          p.x,
          p.y,
          p.radius,
          p.radius * 1.45,
          Math.sin(p.wobble) * 0.38,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = grad;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  window.addEventListener("load", () => {
    initSmoke("smoke-groom");
    initSmoke("smoke-bride");
  });
})();

(function () {
  const SHOW_INTERVAL = 30000;
  const DISPLAY_DURATION = 7000;
  let wishes = [],
    idx = 0;
  let container, nameEl, textEl, hideTimer;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function buildDom() {
    container = document.getElementById("wish-float");
    if (!container) return false;
    container.className = "wish-corner";
    container.innerHTML = `
          <div class="wish-corner-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2 .35v.16l8 5.8 8-5.8v-.16H4Zm16 2.4-7.43 5.39a1 1 0 0 1-1.14 0L4 8.25V18h16V8.25Z" />
            </svg>
          </div>
          <div class="wish-corner-bubble">
            <div class="wish-corner-name" id="wishCornerName"></div>
            <div class="wish-corner-text" id="wishCornerText"></div>
          </div>
        `;
    nameEl = container.querySelector("#wishCornerName");
    textEl = container.querySelector("#wishCornerText");
    return true;
  }

  function spawn() {
    if (!container || !wishes.length) return;
    const w = wishes[idx % wishes.length];
    idx++;
    nameEl.textContent = w.name;
    textEl.textContent = w.content_wish;

    clearTimeout(hideTimer);
    container.classList.add("show");
    hideTimer = setTimeout(
      () => container.classList.remove("show"),
      DISPLAY_DURATION,
    );
  }

  if (!buildDom()) return;

  fetch("../assets/data/wish.json")
    .then((r) => r.json())
    .then((json) => {
      wishes = shuffle(json.data || json);
      setTimeout(spawn, 1500); /* hiện lần đầu ngay sau khi tải xong */
      setInterval(spawn, SHOW_INTERVAL);
    })
    .catch((e) => console.warn("wish.json lỗi:", e));
})();

(function () {
  const gate = document.getElementById("intro-gate");
  const seal = document.getElementById("intro-gate-seal");
  if (!gate || !seal) return;

  document.documentElement.classList.add("intro-locked");

  function openGate() {
    if (gate.classList.contains("opening")) return;
    gate.classList.add("opening");

    const audio = document.getElementById("bg-music");
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }

    setTimeout(() => {
      document.documentElement.classList.remove("intro-locked");
      gate.classList.add("gate-hidden");
    }, 3300);

    setTimeout(() => {
      gate.remove();
    }, 3650);
  }

  seal.addEventListener("click", openGate);
  seal.addEventListener(
    "touchend",
    function (e) {
      e.preventDefault();
      openGate();
    },
    { passive: false },
  );
})();
