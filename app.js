document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navMenu = document.getElementById("nav-menu");
  const header = document.getElementById("header");

  // פתיחה/סגירה של תפריט המבורגר
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // סגירת תפריט כשלוחצים על קישור
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // שינוי עיצוב ה-Header בגלילה
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- אנימציות חשיפה חכמות (Intersection Observer) ---
  const observerOptions = {
    threshold: 0.15, // יתחיל כשרואים 15% מהאלמנט
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // אופציונלי: הפסקת מעקב אחרי שהאלמנט נחשף פעם אחת
        // revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToReveal = document.querySelectorAll(
    ".reveal-up, .reveal-right, .reveal-left, .reveal-slow",
  );

  elementsToReveal.forEach((el) => revealObserver.observe(el));
});
