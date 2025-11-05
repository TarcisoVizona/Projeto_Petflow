const sair = document.querySelector("#sair");
const alterarNome = document.querySelector("#alterarNome");
const input_newname = document.querySelector("#input_newname");

//da ola ao usuario
document.addEventListener("DOMContentLoaded", async () => {
  const nome = document.querySelector("h1");
  const nome_usuario = localStorage.getItem("nomeUsuario");
  nome.innerHTML = `Olá, ${nome_usuario}!`;
});

//alterar nome
alterarNome.addEventListener("click", () => {
  alterarNome.innerText = "Salvar";
  input_newname.style.display = "block";

  alterarNome.addEventListener("click", async () => {
    const nomeUsuario = input_newname.value;
    localStorage.setItem("nomeUsuario", nomeUsuario);
    window.location.reload();
  });
  return;
});

//logout
sair.addEventListener("click", () => {
  localStorage.removeItem("email");
  localStorage.removeItem("id");
  window.location.href = "../paginaInicial/paginaInicial.html";
});
