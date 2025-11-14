const urlParams = new URLSearchParams(window.location.search);
const perfil = document.querySelector("#perfil");
const logo = document.querySelector("#logo");
const div1nav = document.querySelector("#div1nav");
const perfilM = document.querySelector("#perfilM");
const alterarNome = document.querySelector("#alterarNome");
const sair = document.querySelector("#sair");
const input_newname = document.querySelector("#input_newname");
const Xbutton = document.querySelector("#X");

perfil.addEventListener("click", () => {
  input_newname.style.display = "none";
  const cargo = localStorage.getItem("cargo");
  console.log(cargo);
  if (cargo == "Sem cargo") {
    const nome = document.querySelector("#nome_usuario");
    const nome_usuario = localStorage.getItem("nomeUsuario");
    nome.innerHTML = `Olá, ${nome_usuario}!`;
    return perfilM.showModal();

  } else if (cargo == 2) {
    return (window.location.href = "../admin/admin.html");
  } else {
    return (window.location.href = "../loginCadastro/login/login.html");
  }
});

window.addEventListener("load", async () => {
  div1nav.innerText = ""
  const nprod = document.createElement("h1")
  nprod.innerText = `Produto`
  div1nav.appendChild(nprod)
  
  const id = urlParams.get("id");
  const resposta = await fetch(`http://localhost:3000/produto/${id}`);
  const produto = await resposta.json();

  const div_esquerda = document.querySelector("#esquerda");
  const div_direita = document.querySelector("#direita");

  const imagem = document.createElement("img");
  imagem.src = produto.img_url;

  div_esquerda.appendChild(imagem);

  const titulo = document.createElement("h1");
  titulo.innerText = produto.nome_produto;

  const preco = document.createElement("h3");
  preco.innerText = `R$ ${produto.valor_produto}`;

  const descricao = document.createElement("p");
  descricao.innerText = produto.descricao;

  const carrinho = document.createElement("img");
  carrinho.src = 'icons/carrinho.svg'
  carrinho.classList.add("carrinho");
  carrinho.innerText = produto.carrinho;

  const coracao = document.createElement("img");
  coracao.src = 'icons/coracao.svg'
  coracao.id = 'coracao2'

  const div_botao = document.createElement("div");
  div_botao.id = "div_botao";

  const botao_comprar = document.createElement("button");
  botao_comprar.classList.add("botao_comprar");
  botao_comprar.innerText = "Comprar";

  div_botao.appendChild(botao_comprar);
  div_botao.appendChild(carrinho);
  div_botao.appendChild(coracao);

  div_direita.append(titulo);
  div_direita.append(preco);
  div_direita.append(descricao);
  div_direita.append(div_botao);
  
  botao_comprar.addEventListener("click", async () => {
    if (localStorage.getItem("id")) {
      alert("Compra realizada com sucesso!");
    } else {
      localStorage.setItem("voltarpaginalog", window.location.href);

      window.location = "../loginCadastro/login/login.html";
    }
  });
  localStorage.setItem("id", usuario.id);

  const voltarpagina = localStorage.getItem("voltarpaginalog");
  if (voltarpagina) {
    localStorage.removeItem("voltarpaginalog");

    window.location = voltarpagina;
  } else {
    window.location = "../detalhes/detalhes.html";
  }
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

//fechar modal do perfil
Xbutton.addEventListener('click', () => {
  perfilM.close();
})


logo.addEventListener("click", () => {
  window.location.href = "../paginaInicial/paginaInicial.html";
});

//logout
sair.addEventListener("click", () => {
  localStorage.removeItem("email");
  localStorage.removeItem("cargo");
  localStorage.removeItem("id");
  window.location.href = "../paginaInicial/paginaInicial.html";
});
