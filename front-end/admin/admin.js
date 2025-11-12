const sair = document.querySelector("#sair");

window.addEventListener("load", async () => {
  const div_content = document.querySelector("#produtos");

  const resposta = await fetch(`http://localhost:3000/pagina/admin`);
  const produtos = await resposta.json();

  produtos.map((p) => {
    const div_card = document.createElement("div");
    div_card.id = "card";

    const imagem_card = document.createElement("img");
    imagem_card.src = p.img_url;

    const titulo_card = document.createElement("h5");
    titulo_card.innerText = p.nome_produto;

    const descricao_card = document.createElement("p");
    descricao_card.innerText = p.descricao;

    const preco_card = document.createElement("h6");
    preco_card.innerText = "R$ " + p.valor_produto;

    const div_botoes = document.createElement("div");
    div_botoes.id = "div_acoes";

    const botao_editar = document.createElement("button");
    botao_editar.id = "editar";
    botao_editar.className = "botao_acao";
    botao_editar.innerText = "✏️";
    botao_editar.addEventListener("click", () => {
      comeco_pagina.scrollIntoView();
      HabilitarFormularioEdicaoProdutos(
        p.id_produto,
        p.nome_produto,
        p.valor_produto,
        p.quantidade_produto,
        p.descricao,
        p.img_url,
        p.categoria
      );
    });

    const botao_excluir = document.createElement("button");
    botao_excluir.id = "excluir";
    botao_excluir.className = "botao_acao";
    botao_excluir.innerText = "❌";
    botao_excluir.addEventListener("click", async () => {
      await ExcluirProduto(p.id);
    });

    div_botoes.append(botao_editar, botao_excluir);

    div_card.append(
      imagem_card,
      titulo_card,
      descricao_card,
      preco_card,
      div_botoes
    );

    div_content.appendChild(div_card);
  });
});

sair.addEventListener("click", () => {
  localStorage.removeItem("email");
  localStorage.removeItem("cargo");
  localStorage.removeItem("nomeUsuario");
  localStorage.removeItem("id_usuario");
  window.location.href = "../paginaInicial/paginaInicial.html";
});
