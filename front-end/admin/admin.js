const sair = document.querySelector("#sair");
sair.addEventListener("click", () => {
  localStorage.removeItem("email");
  localStorage.removeItem("cargo");
  localStorage.removeItem("nomeUsuario");
  localStorage.removeItem("id_usuario");
  window.location.href = "../paginaInicial/paginaInicial.html";
});
