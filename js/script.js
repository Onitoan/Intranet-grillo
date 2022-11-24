const beginning = document.querySelector(".Beginning");
const btnAcess = document.querySelector(".bt-acess");
const help = document.querySelector(".help");
const logout = document.querySelector(".logout");
const subMenu = document.querySelector(".sub-menu");
const notice = document.querySelector(".notice");

const acess = () => {
  beginning.classList.remove("open");
  help.classList.add("open");
  logout.classList.add("open");
  subMenu.classList.add("open");
  notice.classList.add("open");
};

const exit = () => {
  beginning.classList.add("open");
  help.classList.remove("open");
  logout.classList.remove("open");
  subMenu.classList.remove("open");
  notice.classList.remove("open");
};

btnAcess.addEventListener("click", acess);
logout.addEventListener('click', exit);
