document.documentElement.classList.add("js");

const languageButtons = document.querySelectorAll("[data-language]");
const translatedElements = document.querySelectorAll("[data-en][data-zh]");
const description = document.querySelector('meta[name="description"]');
const progressBar = document.querySelector(".scroll-progress span");
const localTime = document.querySelector("#local-time");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = document.querySelectorAll("[data-section]");

const pageCopy = {
  en: {
    description:
      "Yrei is an independent developer building self-hosted systems, mobile tools, and a more personal web.",
    title: "Yrei - Independent developer",
  },
  zh: {
    description: "Yrei 是一名独立开发者，构建自托管系统、移动工具，以及更属于个人的网络空间。",
    title: "Yrei - 独立开发者",
  },
};

function readSavedLanguage() {
  try {
    return localStorage.getItem("yrei-language");
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("yrei-language", language);
  } catch {
    // The page remains fully usable when storage is unavailable.
  }
}

function setLanguage(language) {
  const resolvedLanguage = language === "zh" ? "zh" : "en";

  document.documentElement.lang = resolvedLanguage === "zh" ? "zh-CN" : "en";
  document.title = pageCopy[resolvedLanguage].title;
  translatedElements.forEach((element) => {
    element.textContent = element.dataset[resolvedLanguage];
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === resolvedLanguage));
  });

  if (description) {
    description.content = pageCopy[resolvedLanguage].description;
  }

  saveLanguage(resolvedLanguage);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const browserLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
setLanguage(readSavedLanguage() || browserLanguage);

function updateTime() {
  if (!localTime) return;
  localTime.textContent = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

updateTime();
setInterval(updateTime, 30_000);

let scrollTicking = false;

function updateScrollProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  progressBar?.style.setProperty("transform", `scaleX(${Math.min(Math.max(progress, 0), 1)})`);
  scrollTicking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(updateScrollProgress);
  },
  { passive: true },
);

updateScrollProgress();

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!activeEntry) return;
      const activeSection = activeEntry.target.dataset.section;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeSection}`;
        if (isActive) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    { rootMargin: "-25% 0px -55%", threshold: [0, 0.2, 0.5] },
  );

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
