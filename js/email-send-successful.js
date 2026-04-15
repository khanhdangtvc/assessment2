document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const successWindow = document.querySelector(".submit-success-window");
  const contactPage = document.querySelector(".contact-page");
  const clostBtn = document.querySelector(".close-btn");

  successWindow.classList.add("window-transition-enter");
  clostBtn.addEventListener("click", () => {
    successWindow.style.display = "none";
    contactPage.style.filter = "none";
    contactPage.style.pointerEvents = "auto";
  });
  successWindow.style.display = "block";
  contactPage.style.pointerEvents = "none";
  contactPage.style.filter = "blur(5px)";

});
