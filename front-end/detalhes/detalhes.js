const urlParams = new URLSearchParams(window.location.search);
const perfil = document.querySelector("#perfil_link");
const logo = document.querySelector("#logo");
const div1nav = document.querySelector("#div1nav");

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

      window.location = "../login/login.html";
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

logo.addEventListener("click", () => {
  window.location.href = "../paginaInicial/paginaInicial.html";
});

