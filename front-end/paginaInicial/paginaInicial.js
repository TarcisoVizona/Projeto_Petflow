const perfil = document.querySelector("#perfil");
const logo = document.querySelector("#logo");
const brinquedos = document.querySelector("#Brinquedos");
const casinhas = document.querySelector("#Casinhas");
const racoes = document.querySelector("#Racoes");
const petiscos = document.querySelector("#Petiscos");
const remedios = document.querySelector("#Remedios");
const acessorios = document.querySelector("#Acessorios");
const vazia = document.querySelector("#product_cards");
const imagem_cao = document.querySelector("#image");
const bolinhas = document.querySelector("#icon_produtos");
const perfilM = document.querySelector("#perfilM");
const sair = document.querySelector("#sair");
const input_newname = document.querySelector("#input_newname");
const Xbutton = document.querySelector("#X");
const p = document.querySelector("p")

//entrar no perfil
perfil.addEventListener("click", () => {
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

//mostrar produtos
window.addEventListener("load", async () => {
  const resposta = await fetch("http://localhost:3000/pagina/inicial");
  const produtos = await resposta.json();
  vazia.innerHTML = "";

  produtos.map((p) => {
    const link = document.createElement("a");

    link.href = `../detalhes/detalhes.html?id=${p.id_produto}`;
    link.target = "_blank";

    const div_card = document.createElement("div");
    div_card.classList = "card";

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
    vazia.appendChild(link);
  });
});

//mostrar produtos categoria racao
racoes.addEventListener("click", async () => {
  bolinhas.innerHTML = "";
  imagem_cao.innerHTML = "";
  vazia.innerHTML = "";
  vazia.style.margin = "0"
  p.innerText = "Rações"
  
  const res = await fetch("http://localhost:3000/produtos/racao");
  const produtos = await res.json();
  if (res.status == 200) {
    produtos.map((p) => {
      const link = document.createElement("a");

      link.href = `../Detalhes/detalhes.html?id=${p.id_produto}`;
      link.target = "_blank";

      const div_card = document.createElement("div");
      div_card.classList = "card";

      const imagem_card = document.createElement("img");
      imagem_card.src = p.img_url;
      imagem_card.width = "150";
      imagem_card.height = "200";

      const preco_card = document.createElement("h5");
      preco_card.innerText = "R$ " + p.valor_produto;

      const titulo_card = document.createElement("h6");
      titulo_card.innerText = p.nome_produto;

      div_card.appendChild(imagem_card);
      div_card.appendChild(preco_card);
      div_card.appendChild(titulo_card);

      link.appendChild(div_card);

      vazia.appendChild(link);
    });
  } else alert("Produtos não encontrados");
});

//mostrar produtos categoria brinquedos
brinquedos.addEventListener("click", async () => {
  bolinhas.innerHTML = "";
  imagem_cao.innerHTML = "";
  vazia.innerHTML = "";
  vazia.style.margin = "0"
  p.innerText = "Brinquedos"
  const res = await fetch("http://localhost:3000/produtos/brinquedo");
  const produtos = await res.json();
  if (res.status == 200) {
    produtos.map((p) => {
      const link = document.createElement("a");

      link.href = `../Detalhes/detalhes.html?id=${p.id_produto}`;
      link.target = "_blank";

      const div_card = document.createElement("div");
      div_card.classList = "card";

      const imagem_card = document.createElement("img");
      imagem_card.src = p.img_url;
      imagem_card.width = "150";
      imagem_card.height = "200";

      const preco_card = document.createElement("h5");
      preco_card.innerText = "R$ " + p.valor_produto;

      const titulo_card = document.createElement("h6");
      titulo_card.innerText = p.nome_produto;

      div_card.appendChild(imagem_card);
      div_card.appendChild(preco_card);
      div_card.appendChild(titulo_card);

      link.appendChild(div_card);

      vazia.appendChild(link);
    });
  } else alert("Produtos não encontrados");
});

//mostrar produtos categoria acessorios
acessorios.addEventListener("click", async () => {
  bolinhas.innerHTML = "";
  imagem_cao.innerHTML = "";
  vazia.innerHTML = "";
  vazia.style.margin = "0"
  p.innerText = "Acessórios"
  const res = await fetch("http://localhost:3000/produtos/acessorios");
  const produtos = await res.json();
  if (res.status == 200) {
    produtos.map((p) => {
      const link = document.createElement("a");

      link.href = `../Detalhes/detalhes.html?id=${p.id_produto}`;
      link.target = "_blank";

      const div_card = document.createElement("div");
      div_card.classList = "card";

      const imagem_card = document.createElement("img");
      imagem_card.src = p.img_url;
      imagem_card.width = "150";
      imagem_card.height = "200";

      const preco_card = document.createElement("h5");
      preco_card.innerText = "R$ " + p.valor_produto;

      const titulo_card = document.createElement("h6");
      titulo_card.innerText = p.nome_produto;

      div_card.appendChild(imagem_card);
      div_card.appendChild(preco_card);
      div_card.appendChild(titulo_card);

      link.appendChild(div_card);

      vazia.appendChild(link);
    });
  } else alert("Produtos não encontrados");
});

//mostrar produtos categoria casinhas
casinhas.addEventListener("click", async () => {
  bolinhas.innerHTML = "";
  imagem_cao.innerHTML = "";
  vazia.innerHTML = "";
  vazia.style.margin = "0"
  p.innerText = "Casinhas"
  const res = await fetch("http://localhost:3000/produtos/casinha");
  const produtos = await res.json();
  if (res.status == 200) {
    produtos.map((p) => {
      const link = document.createElement("a");

      link.href = `../Detalhes/detalhes.html?id=${p.id_produto}`;
      link.target = "_blank";

      const div_card = document.createElement("div");
      div_card.classList = "card";

      const imagem_card = document.createElement("img");
      imagem_card.src = p.img_url;
      imagem_card.width = "150";
      imagem_card.height = "200";

      const preco_card = document.createElement("h5");
      preco_card.innerText = "R$ " + p.valor_produto;

      const titulo_card = document.createElement("h6");
      titulo_card.innerText = p.nome_produto;

      div_card.appendChild(imagem_card);
      div_card.appendChild(preco_card);
      div_card.appendChild(titulo_card);

      link.appendChild(div_card);

      vazia.appendChild(link);
    });
  } else alert("Produtos não encontrados");
});

//mostrar produtos categoria petiscos
petiscos.addEventListener("click", async () => {
  bolinhas.innerHTML = "";
  imagem_cao.innerHTML = "";
  vazia.innerHTML = "";
  vazia.style.margin = "0"
  p.innerText = "Pestiscos"
  const res = await fetch("http://localhost:3000/produtos/petiscos");
  const produtos = await res.json();
  if (res.status == 200) {
    produtos.map((p) => {
      const link = document.createElement("a");

      link.href = `../Detalhes/detalhes.html?id=${p.id_produto}`;
      link.target = "_blank";

      const div_card = document.createElement("div");
      div_card.classList = "card";

      const imagem_card = document.createElement("img");
      imagem_card.src = p.img_url;
      imagem_card.width = "150";
      imagem_card.height = "200";

      const preco_card = document.createElement("h5");
      preco_card.innerText = "R$ " + p.valor_produto;

      const titulo_card = document.createElement("h6");
      titulo_card.innerText = p.nome_produto;

      div_card.appendChild(imagem_card);
      div_card.appendChild(preco_card);
      div_card.appendChild(titulo_card);

      link.appendChild(div_card);

      vazia.appendChild(link);
    });
  } else alert("Produtos não encontrados");
});

remedios.addEventListener("click", async () => {
  bolinhas.innerHTML = "";
  imagem_cao.innerHTML = "";
  vazia.innerHTML = "";
  vazia.style.margin = "0"
  p.innerText = "Remédios"
  const res = await fetch("http://localhost:3000/produtos/remedios");
  const produtos = await res.json();
  if (res.status == 200) {
    produtos.map((p) => {
      const link = document.createElement("a");

      link.href = `../Detalhes/detalhes.html?id=${p.id_produto}`;
      link.target = "_blank";

      const div_card = document.createElement("div");
      div_card.classList = "card";

      const imagem_card = document.createElement("img");
      imagem_card.src = p.img_url;
      imagem_card.width = "150";
      imagem_card.height = "200";

      const preco_card = document.createElement("h5");
      preco_card.innerText = "R$ " + p.valor_produto;

      const titulo_card = document.createElement("h6");
      titulo_card.innerText = p.nome_produto;

      div_card.appendChild(imagem_card);
      div_card.appendChild(preco_card);
      div_card.appendChild(titulo_card);

      link.appendChild(div_card);

      vazia.appendChild(link);
    });
  } else alert("Produtos não encontrados");
});

//redireciona a pagina principal
logo.addEventListener("click", () => {
  window.location.href = "./paginaInicial.html";
});

//logout
sair.addEventListener("click", () => {
  localStorage.removeItem("email");
  localStorage.removeItem("cargo");
  localStorage.removeItem("id");
  window.location.href = "../paginaInicial/paginaInicial.html";
});
