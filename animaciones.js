const animated = document.querySelectorAll(
  ".anim, .anim-left, .anim-right, .anim-zoom",
);

function scrollAnim() {
  animated.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 120) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", scrollAnim);
scrollAnim();