const cadastrar = document.querySelector("button");

//registro de usuarios
cadastrar.addEventListener("click", async () => {
  const nome = document.querySelector("#usuario").value;
  const email = document.querySelector("#email").value;
  const telefone = document.querySelector("#telefone").value;
  const senha = document.querySelector("#senha").value;
  if (nome == "" || email == "" || telefone == "" || senha == "") {
    return alert("Todos os campos devem ser preenchidos");
  }

  if (nome.length < 3) {
    alert("O nome deve ter pelo menos 3 caracteres!");
    return;
  }
  if (!email.includes("@")) {
    alert("Digite um e-mail válido!");
    return;
  }
  if (senha.length < 8) {
    alert("A senha deve ter pelo menos 8 caracteres!");
    return;
  }
  if (telefone.length < 11) {
    alert("Digite um número de telefone válido!");
    return;
  }
  const dados = { nome, email, senha, telefone };

  try {
    const resposta = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });
    if (resposta.status == 200) {
      return (window.location.href = "../login/login.html");
    } 
  } catch (error) {
    alert("Erro ao Cadastrar. Tente novamente.");
  }
});
