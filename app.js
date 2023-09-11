document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".background-img");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // 初始显示第一张图片
  showSlide(currentSlide);

  // 每隔三秒切换图片
  setInterval(nextSlide, 3000);
});