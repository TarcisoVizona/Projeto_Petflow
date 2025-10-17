window.addEventListener("load", async () => {
  const div_root = document.querySelector("#root");
  const resposta = await fetch("http://192.168.1.15:3000/produtos");
  const produtos = await resposta.json();

  produtos.map((p) => {
    const div_card = document.createElement("div");
    div_card.id = "card";

    const imagem_card = document.createElement("img");
    imagem_card.src = p.imagem;

    const titulo_card = document.createElement("h5");
    titulo_card.innerText = p.titulo;

    const preco_card = document.createElement("h6");
    preco_card.innerText = "R$ " + p.preco;

    div_card.appendChild(imagem_card);
    div_card.appendChild(titulo_card);
    div_card.appendChild(preco_card);
    div_root.appendChild(div_card);
  });
});