const { animate, utils, stagger, splitText } = anime;

// ===== Intro text color hover effect =====
const colors = [];
splitText(".text-introduction", {
  lines: true,
}).addEffect((split) => {
  split.words.forEach(($el, i) => {
    $el.addEventListener("pointerenter", () => {
      animate($el, {
        color: utils.randomPick(["#FF4B4B", "#FFCC2A", "#B7FF54", "#57F695"]),
        duration: 300,
      });
    });
  });
});

// ===== Scroll-triggered reveal animations =====
const observerOptions = {
  root: null,
  rootMargin: "0px 0px -60px 0px",
  threshold: 0.1,
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("Observing:", entry.target);

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => {
  revealObserver.observe(el);
});

//  Navbar scroll effect 
const navbar = document.querySelector(".navbar");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  console.log("Scroll Y:", currentScrollY);
  if (currentScrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScrollY = currentScrollY;
}, { passive: true });

 
// Contact button scroll effect display

//  Staggered project card entrance 
const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll(".project-item");
        animate(items, {
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 800,
          delay: stagger(150, { start: 200 }),
          easing: "easeOutCubic",
        });
        projectObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

const projectList = document.querySelector(".project-list");
if (projectList) {
  // Hide items initially for animation
  projectList.querySelectorAll(".project-item").forEach((item) => {
    item.style.opacity = "0";
  });
  projectObserver.observe(projectList);
}

//  Project title reveal 
const titleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target, {
          opacity: [0, 1],
          translateX: [-30, 0],
          duration: 800,
          easing: "easeOutCubic",
        });
        titleObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".project-title h1, .project-title h2").forEach((el) => {
  el.style.opacity = "0";
  titleObserver.observe(el);
});

//  Smooth section transitions for about/contact pages 
document.addEventListener("DOMContentLoaded", () => {
  // Add page transition class
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    pageContent.classList.add("page-transition");
  }

  // Reveal animations for about page elements
  document.querySelectorAll(".about-text p, .skill-tag, .form-group").forEach((el, i) => {
    el.classList.add("reveal");
    el.classList.add(`reveal-delay-${(i % 4) + 1}`);
  });

  // Re-observe new reveal elements
  document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
  });
});

