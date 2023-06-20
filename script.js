const navBtns = document.querySelectorAll(".nav__btn");

navBtns.forEach((btn) => {
  const href = btn.href;
  console.log(btn);
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const selector = "#" + href.split("#")[1];
    // убрать id у элемента к которому скроллим
    window.location.hash = selector;
    // вернуть id
    const block = document.querySelector(selector);
    block.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
