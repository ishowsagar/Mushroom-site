const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector("#primary-nav");
navToggle.addEventListener("click", () => {
  const navOpened = navToggle.getAttribute("aria-expanded");
  if (navOpened === "false") {
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }
  // console.log(` ${navOpened} navToggle is clicked!`)
});
// whenever window resizes, it prevents the animation/transition to
// happen ( like we're seeing auto-animations of open-close
// whenever window gets resized)
const resizeObserver = new ResizeObserver(() => {
  document.body.classList.add("resizing");

  requestAnimationFrame(() => {
    document.body.classList.remove("resizing");
  });
});
// what to observer for...body animations.
resizeObserver.observe(document.body);
