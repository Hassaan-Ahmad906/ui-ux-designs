const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
});
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }),
);
const form = document.querySelector("#contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  document.querySelector("#form-status").textContent =
    "Demo form: your message is validated but not sent to a server.";
  form.reset();
});
