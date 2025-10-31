const esqueceu_senha = document.querySelector("#esqueceu_senha");
const cadastrar = document.querySelector("#cadastrar");
const entrar = document.querySelector("#entrar");

//login
entrar.addEventListener("click", async () => {
  const email = document.querySelector("#input_email").value;
  const senha = document.querySelector("#input_senha").value;
  const resposta = await fetch("http://localhost:3000/usuarios/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      senha,
    }),
  });
  
  const usuario = await resposta.json();
  if (resposta.status == 200) {
    localStorage.setItem("nomeUsuario", usuario.nome_usuario);
    localStorage.setItem("email", usuario.email_usuario);
    localStorage.setItem("id", usuario.id_usuario);
    return (window.location.href = "../paginaInicial/paginaInicial.html");
  } 
    else {
    alert("Usuario ou senha incorretos");
  }
});

//redirecionamento para a pagina de cadastro
cadastrar.addEventListener("click", async () => {
  window.location.href = "../cadastro/cadastro.html";
});
