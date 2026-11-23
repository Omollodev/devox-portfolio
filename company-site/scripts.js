function setCopyightYear() {
  const yearElements = document.querySelectorAll(".current-year");
  const currentYear = new Date().getFullYear();
  yearElements.forEach((el) => (el.textContent = currentYear));
}

document.addEventListener("DOMContentLoaded", async function () {
  await loadPartials();
  setCopyightYear();
  initNavToggle();
  initThemeToggle();
  initHeaderScroll();
  highlightActiveNavLink();
  initContactForm();
  initScrollBlur();
  hidePreloader();
});

async function loadPartials() {
  const slots = document.querySelectorAll("[data-include]");
  await Promise.all(
    Array.from(slots).map(async function (slot) {
      const url = slot.getAttribute("data-include");
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to load " + url);
        slot.outerHTML = await response.text();
      } catch (error) {
        console.error("Could not load partial:", url, error);
        slot.innerHTML =
          "<!-- Could not load " +
          url +
          ". Serve this site over http(s), not file://, and check the path. -->";
      }
    }),
  );
}

function highlightActiveNavLink() {
  const current = document.body.getAttribute("data-page");
  if (!current) return;
  document.querySelectorAll(".nav-links a[data-page]").forEach(function (link) {
    if (link.getAttribute("data-page") === current) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function initScrollBlur() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReduced) {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
}

/* Mobile nav toggle -------------------------------------------------- */
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu after a link is chosen (mobile)
  links.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const GOOGLE_SHEETS_PLACEHOLDER = "PASTE-YOUR-APPS-SCRIPT-WEB-APP-URL-HERE";
const GOOGLE_SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbytWbFB5mApYu3_bJhVSUSS4B9Ztpf2kgcl87TsxjIwdpX6tS1G9_-RJbrxRlGe9Y8chA/exec";

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector(".form-status");
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const service = form.querySelector("#service")
      ? form.querySelector("#service").value
      : "";
    const message = form.querySelector("#message").value.trim();
    const honeypot = form.querySelector("#company_website")
      ? form.querySelector("#company_website").value.trim()
      : "";

    if (!name || !email || !message) {
      showStatus(
        "err",
        "Please fill in your name, email, and message before sending.",
      );
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showStatus(
        "err",
        "That email address doesn't look right. Double-check it and try again.",
      );
      return;
    }

    // Honeypot tripped — a real visitor never fills or sees this field.
    // Pretend success without sending anything, so a bot learns nothing.
    if (honeypot) {
      showStatus("ok", "Thanks — we'll be in touch shortly.");
      form.reset();
      return;
    }

    if (
      !GOOGLE_SHEETS_ENDPOINT ||
      GOOGLE_SHEETS_ENDPOINT === GOOGLE_SHEETS_PLACEHOLDER
    ) {
      showStatus(
        "err",
        "This form isn't connected yet — set GOOGLE_SHEETS_ENDPOINT in scripts.js to your deployed Apps Script Web App URL (see google-apps-script/Code.gs).",
      );
      return;
    }

    const payload = new URLSearchParams({
      name: name,
      email: email,
      service: service,
      message: message,
      page: window.location.href,
    });

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.dataset.originalText = submitButton.textContent;
      submitButton.textContent = "Sending...";
    }

    fetch(GOOGLE_SHEETS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
    })
      .then(function () {
        showStatus("ok", "Thanks — we'll be in touch shortly.");
        form.reset();
      })
      .catch(function (error) {
        console.error("Contact form submission failed:", error);
        showStatus(
          "err",
          "Couldn't send that just now. Please try again, or email us directly at devoxomollo@gmail.com.",
        );
      })
      .finally(function () {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent =
            submitButton.dataset.originalText || "Send message";
        }
      });
  });

  function showStatus(kind, text) {
    status.textContent = text;
    status.classList.remove("ok", "err");
    status.classList.add(kind, "is-visible");
  }
}

/* Light / dark theme toggle ---------------------------------------------
   The actual theme is applied as early as possible by a small inline
   script in each page's <head> (before CSS/partials load), reading the
   same "devoxsec-theme" localStorage key, to avoid a flash of the wrong
   theme. This function just wires up the button (which lives inside
   partials/navbar.html, so it only exists after loadPartials() runs)
   and keeps localStorage + the button's a11y state in sync going forward.
------------------------------------------------------------------------- */
function initThemeToggle() {
  const button = document.querySelector(".theme-toggle");
  if (!button) return;

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function reflectState() {
    const isDark = currentTheme() === "dark";
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  }

  reflectState();

  button.addEventListener("click", function () {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("devoxsec-theme", next);
    } catch (error) {
      console.warn("Couldn't save theme preference:", error);
    }
    reflectState();
  });
}

/* Header scroll effect: transparent -> solid ------------------------------
   Adds "is-scrolled" to the header once the page scrolls past a small
   threshold. On the home page specifically, main.css also swaps the nav
   text from white to dark alongside this, since only the home page has
   a dark hero directly under the header (see main.css for that rule).
------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const THRESHOLD = 40;

  function update() {
    header.classList.toggle("is-scrolled", window.scrollY > THRESHOLD);
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
}

/* Preloader ---------------------------------------------------------------
   Hidden once the shared navbar/footer partials have loaded, so it never
   disappears to reveal a page missing its nav. A CSS transition handles
   the fade; this just toggles the class after a tiny delay so the fade
   is visible rather than instant.
---------------------------------------------------------------------------*/
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;
  requestAnimationFrame(function () {
    preloader.classList.add("is-hidden");
    setTimeout(function () {
      preloader.remove();
    }, 400);
  });
}
