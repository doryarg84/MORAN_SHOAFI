// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(anchor.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Testimonials slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");
function nextTestimonial() {
  testimonials[currentTestimonial].classList.remove("active");
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add("active");
}
setInterval(nextTestimonial, 5000);
testimonials[0].classList.add("active");

// Contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("הודעה נשלחה! נחזור אלייך  בקרוב. 🙏");
  e.target.reset();
});

// Parallax
window.addEventListener("scroll", () => {
  document.querySelector(".hero").style.transform =
    `translateY(${window.pageYOffset * 0.3}px)`;
});
