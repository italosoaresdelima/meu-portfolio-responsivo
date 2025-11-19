let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");
let btnFechar = document.getElementById("btn-fechar");
let linksMobile = document.querySelectorAll(".mobile-link");

// 2. Função para abrir o menu
btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
  overlay.classList.add("abrir-menu");
});

function fecharMenu() {
  menu.classList.remove("abrir-menu");
  overlay.classList.remove("abrir-menu");
}

btnFechar.addEventListener("click", fecharMenu);

overlay.addEventListener("click", fecharMenu);

linksMobile.forEach((link) => {
  link.addEventListener("click", fecharMenu);
});
