// Effet scroll reveal
document.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".slide-left, .slide-right, .zoom-in");
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateX(0) scale(1)";
    }
  });
});

