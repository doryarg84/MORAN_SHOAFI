// 1. טיפול בתפריט מובייל
const menuBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// סגירת התפריט לאחר לחיצה על קישור
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// 2. אפקט שינוי Header בגלילה
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// 3. מערכת אנימציות בחשיפה (Scroll Reveal System)
// פונקציה כללית לבדיקת נראות אלמנטים
function revealElements() {
  // איסוף כל האלמנטים עם מחלקות reveal שונות
  const reveals = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right, .reveal-slow",
  );

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100; // נקודת החשיפה (פיקסלים מהתחתית)

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
    // אופציונלי: להסיר את ה-active אם רוצים שהאנימציה תחזור בגלילה למעלה
    // else {
    //     element.classList.remove('active');
    // }
  });
}

// הפעלת הפונקציה בעת גלילה
window.addEventListener("scroll", revealElements);

// הפעלה ראשונית בטעינת הדף (כדי שמה שכבר במסך יופיע)
window.addEventListener("load", revealElements);
