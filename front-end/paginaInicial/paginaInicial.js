const perfil = document.querySelector("#perfil_link");
const racoes_nav = document.querySelector("#racoes_nav");

//mostrar produtos
window.addEventListener("load", async () => {
  const div_content = document.querySelector(".product_cards");
  const resposta = await fetch("http://localhost:3000/pagina/inicial");
  const produtos = await resposta.json();

  perfil.addEventListener("click" , () => {
    if (localStorage.getItem("id")) {
    perfil.href = "../perfil/perfil.html";
  } else {
    perfil.href = "../login/login.html";
  }
});

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



