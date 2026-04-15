/// contact button display

const contactBtn = document.querySelector(".contact-btn");
contactBtn.style.display = "none";
window.addEventListener("scroll", () =>
{
  const currentScrollY = window.scrollY;
  if (currentScrollY > 400){
    contactBtn.style.display = "flex";
  } else {
    contactBtn.style.display = "none";
  }
})