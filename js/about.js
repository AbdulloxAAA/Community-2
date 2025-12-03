/* ============================
   DARK MODE
============================ */

// Desktop toggle
const toggleDesktop = document.getElementById("modeToggle");
toggleDesktop?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Mobile toggle
const toggleMobile = document.getElementById("modeToggleMobile");
toggleMobile?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* ============================
   DROPDOWN MENU
============================ */

const dropdown = document.querySelector(".menu-item.dropdown");

if (dropdown) {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("active");
  });

  // Tashqariga bosilganda yopish
  window.addEventListener("click", () => {
    dropdown.classList.remove("active");
  });
}

/* ============================
   HAMBURGER MENU
============================ */

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

/* ============================
   BACK TO TOP BUTTON
============================ */

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 200 ? "flex" : "none";
});

backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ============================
   COUNTER ANIMATION
============================ */

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 150;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
////////////////////////page home/
