// 1. אפקט Sticky Header (התפריט נשאר למעלה ומשנה רקע בגלילה)
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// 2. תפריט מובייל (המבורגר)
const menuToggle = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// סגירת התפריט בלחיצה על קישור (כדי שלא יישאר פתוח אחרי מעבר)
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// 3. אנימציית הופעה בגלילה (Scroll Reveal)
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// הפעלה ראשונית בטעינת הדף
reveal();
