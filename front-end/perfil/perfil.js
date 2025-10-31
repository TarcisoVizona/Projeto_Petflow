const sair = document.querySelector("#sair");
const alterarNome = document.querySelector("#alterarNome");
const input_newname = document.querySelector("#input_newname");

//da ola ao usuario
document.addEventListener("DOMContentLoaded", async () => {
  const nome = document.querySelector("h1");
  const nome_usuario = localStorage.getItem("nomeUsuario");
  nome.innerHTML = `Olá, ${nome_usuario}!`;
});

alterarNome.addEventListener("click", () => {
  if (alterarNome.innerText == "Ocultar") {
    alterarNome.innerText = "Alterar Nome";
    input_newname.style.display = "none";
  } else {
    alterarNome.innerText = "Ocultar";
    input_newname.style.display = "block";
  }
});

//logout
sair.addEventListener("click", () => {
  localStorage.removeItem("email");
  localStorage.removeItem("id");
  window.location.href = "../paginaInicial/paginaInicial.html";
});
