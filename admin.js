const sair = document.querySelector(".sair");
sair.addEventListener("click", () => {
  localStorage.removeItem("email");
  localStorage.removeItem("id");
  window.location.href = "../paginaInicial/paginaInicial.html";
});
