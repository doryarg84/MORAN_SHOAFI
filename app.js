const menuBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.getElementById("nav-menu");

// פתיחה/סגירה של תפריט המבורגר
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// סגירת תפריט כשלוחצים על קישור (ניווט פנימי)
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// שינוי עיצוב ה-Header בגלילה
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// אנימציות חשיפה בגלילה
const reveal = () => {
  const elements = document.querySelectorAll(
    ".reveal-up, .reveal-right, .reveal-left, .reveal-slow",
  );
  elements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
