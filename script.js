const navBtns = document.querySelectorAll(".nav__btn");

navBtns.forEach((btn) => {
  const href = btn.href;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const selector = "#" + href.split("#")[1];
    window.location.hash = selector;
    const block = document.querySelector(selector);
    block.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
