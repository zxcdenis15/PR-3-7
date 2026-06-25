console.log("Привет! Скрипт подключен и работает.");
const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});
const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");

toggleBtn.addEventListener("click", () => {
  extraInfo.classList.toggle("expanded");
  toggleBtn.textContent = extraInfo.classList.contains("expanded")
    ? "Скрыть"
    : "Показать больше";
});
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}
const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Введите имя";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Введите корректный email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (isValid) {
    alert("Форма заполнена верно! (отправка на сервер не настроена)");
    form.reset();
  }
});