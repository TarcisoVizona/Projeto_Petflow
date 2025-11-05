const perfil = document.querySelector("#perfil_link");
const brinquedos_nav = document.querySelector("#brinquedos_nav");
const casinhas_nav = document.querySelector("#casinhas_nav");
const racoes_nav = document.querySelector("#racoes_nav");
const petiscos_nav = document.querySelector("#petiscos_nav");
const acessorios_nav = document.querySelector("#acessorios_nav");

//entrar no perfil
perfil.addEventListener("click", () => {
    if (localStorage.getItem("id")) {
      perfil.href = "../perfil/perfil.html";
    } else {
      perfil.href = "file:///C:/Users/Tarciso/Desktop/PetFlow/Projeto/front-end/loginCadastro/login/login.html";
    }
  });

//mostrar produtos
window.addEventListener("load", async () => {
  const div_content = document.querySelector(".product_cards");
  const resposta = await fetch("http://localhost:3000/pagina/inicial");
  const produtos = await resposta.json();

  produtos.map((p) => {
    const link = document.createElement("a");

    link.href = `../Detalhes/detalhes.html?id=${p.id_produto}`;
    link.target = "_blank";

    const div_card = document.createElement("div");
    div_card.id = "card";

    const imagem_card = document.createElement("img");
    imagem_card.src = p.img_url;

    const preco_card = document.createElement("h5");
    preco_card.innerText = "R$ " + p.valor_produto;

    const titulo_card = document.createElement("h6");
    titulo_card.innerText = p.nome_produto;

    div_card.appendChild(imagem_card);
    div_card.appendChild(preco_card);
    div_card.appendChild(titulo_card);

    link.appendChild(div_card);

    div_content.appendChild(link);
  });
});

//link da pagina dos produtos
brinquedos_nav.addEventListener("click", () => {
  window.location.href = "../paginasProduto/paginaBrinquedos/brinquedos.html";
});

casinhas_nav.addEventListener("click", () => {
  window.location.href = "../paginasProduto/paginaCasinhas/casinhas.html";
});

racoes_nav.addEventListener("click", () => {
  window.location.href = "../paginasProduto/paginaRacoes/racoes.html";
});

petiscos_nav.addEventListener("click", () => {
  window.location.href = "../paginasProduto/paginaPetiscos/petiscos.html";
});

acessorios_nav.addEventListener("click", () => {
  window.location.href = "../paginasProduto/paginaAcessorios/acessorios.html";
});
//link da pagina dos produtos

