const sair = document.querySelector("#sair");
const comeco_pagina = document.querySelector("h1");
const criar_produto = document.querySelector("#criarProduto")

async function ListarMeusProdutos() {
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
      await ExcluirProduto(p.id_produto);
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
}

async function ExcluirProduto(id_produto) {
  const resposta = await fetch(
    `http://localhost:3000/deletar/produtos/${id_produto}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (resposta.status == 200) {
    LimparProdutos();
    ListarMeusProdutos();
    return alert("Produto deletado!");
  } else {
    const mensagem = await resposta.json();
    return alert(mensagem);
  }
}

function HabilitarFormularioEdicaoProdutos(
  id_produto,
  nome_produto,
  valor_produto,
  quantidade_produto,
  img_url,
  categoria,
  descricao
) {
    id_produto,
    nome_produto,
    valor_produto,
    quantidade_produto,
    img_url,
    categoria,
    descricao
  
  document.querySelector("#nome").value = nome_produto;
  document.querySelector("#valor").value = valor_produto;
  document.querySelector("#quantidade").value = quantidade_produto;
  document.querySelector("#imagem").value = img_url;
  document.querySelector("#categoria").value = categoria;
  document.querySelector("#descricao").value = descricao;

  let new_botao = botao_novo_produto.cloneNode(true);
  botao_novo_produto.parentNode.replaceChild(new_botao, botao_novo_produto);
  botao_novo_produto = new_botao;
  botao_novo_produto.addEventListener("click", () => {
    AlterarProduto(id_produto);
  });
  botao_novo_produto.innerText = "Salvar mudanças";

  return;
}

function HabilitarFormularioCadastrarProdutos() {
  LimparCampos();
  LimparProdutos();
  ListarMeusProdutos();
}

async function CadastrarProduto() {
  const nome_produto = document.querySelector("#nome").value 
  const valor_produto = document.querySelector("#valor").value 
  const quantidade_produto = document.querySelector("#quantidade").value 
  const img_url = document.querySelector("#imagem").value 
  const categoria = document.querySelector("#categoria").value 
  const descricao = document.querySelector("#descricao").value 

  console.log(nome_produto, valor_produto, quantidade_produto, img_url, categoria, descricao);
  const resposta = await fetch("http://localhost:3000/admin/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome_produto,
      valor_produto,
      quantidade_produto,
      img_url,
      categoria,
      descricao
    }),
  });
  if (resposta.status == 201) {
    alert("Produto cadastrado!");
    LimparProdutos();
    ListarMeusProdutos();
    LimparCampos();
    return;
  }
};

function LimparCampos() {
  document.querySelector("#nome").value = "";
  document.querySelector("#valor").value = "";
  document.querySelector("#quantidade").value = "";
  document.querySelector("#descricao").value = "";
  document.querySelector("#imagem").value = "";
  document.querySelector("#categoria").value = "";
}

function LimparProdutos() {
  const div_content = document.querySelector("#produtos");

  while (div_content.firstChild) {
    div_content.removeChild(div_content.firstChild);
  }

  return;
}

sair.addEventListener("click", () => {
  localStorage.removeItem("email");
  localStorage.removeItem("cargo");
  localStorage.removeItem("nomeUsuario");
  localStorage.removeItem("id_usuario");
  window.location.href = "../paginaInicial/paginaInicial.html";
});

ListarMeusProdutos();
criar_produto.addEventListener("click", () => [
  HabilitarFormularioCadastrarProdutos(),
  CadastrarProduto()
])
