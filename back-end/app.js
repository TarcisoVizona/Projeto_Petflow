import express from "express";
import cors from "cors";
import sql from "./database.js";

const app = express();
app.use(cors());
app.use(express.json());

//rota para registro de usuario
app.post("/cadastro", async (req, res) => {
  const { nome, email, senha, telefone } = req.body;
  console.log(nome);
  const cadastro =
    await sql`insert into usuario(nome_usuario, email_usuario, senha, telefone) values (${nome}, ${email}, ${senha}, ${telefone})`;
  if (cadastro) {
    return res.status(200).json(cadastro[0]);
  }
  return res.status(401).json("Erro ao cadastrar");
});

//rota para login de usuario
app.post("/usuarios/login", async (req, res) => {
  const { email, senha } = req.body;
  const usuario =
    await sql`SELECT * FROM usuario WHERE email_usuario = ${email} AND senha = ${senha}`;
  if (usuario[0]) {
    return res.status(200).json(usuario[0]);
  }
  return res.status(401).json("Usuario ou Senha incorretos");
});

//pagina admin
app.get("/pagina/admin", async (req, res) => {
  const produtos = await sql`SELECT * FROM produtos`;
  if (produtos) {
    return res.status(200).json(produtos);
  } else return res.status(400);
});

//rota para exibir produtos na tela inicial
app.get("/pagina/inicial", async (req, res) => {
  const produtos = await sql`SELECT * FROM produtos ORDER BY RANDOM() LIMIT 35`;
  if (produtos) {
    return res.status(200).json(produtos);
  } else return res.status(400);
});

//searchbar
app.get("/produtosSearch", async (req, res) => {
  const {search} = req.query
  console.log(search)
  const produtos = await sql `SELECT * FROM produtos WHERE nome_produto LIKE ${'%' + search + '%'}`;
  if (produtos) {
    return res.status(200).json(produtos);
  } else return res.status(400);
});

//detalhes por categoria
app.get("/produtos/:categoria", async (req, res) => {
  const { categoria } = req.params;
  const produtos =
    await sql`SELECT * FROM produtos WHERE categoria = ${categoria}`;
  if (produtos) {
    return res.status(200).json(produtos);
  } else return res.status(400);
});

//detalhes dos produtos
app.get("/produto/:id", async (req, res) => {
  const { id } = req.params;
  const produto = await sql`SELECT * FROM produtos WHERE id_produto = ${id}`;
  return res.status(200).json(produto[0]);
});

//criar venda
app.post("/comprar", async (req, res) => {
  const { id_produto, forma_pagamento , valor_total, data_venda, id_usuario } = req.body;
  const comprar = await sql`INSERT INTO venda(id_produto, forma_pagamento, valor_total, data_venda, status_venda, id_usuario) VALUES (${id_produto}, ${forma_pagamento} , ${valor_total}, ${data_venda}, 'sucedida' , ${id_usuario})`;
  if (comprar) {
    return res.status(200).json(comprar[0]);
  }
  return res.status(401).json("Erro ao realizar compra");
});

//deletar produtos
app.delete("/deletar/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await sql`DELETE FROM produtos WHERE id_produto = ${id} `;
    return res.status(200).json("produto deletado");
  } catch (error) {
    console.log(error);
    res
      .status(409)
      .json("Produto não pode ser deletado por que ja foi vendido");
  }
});

//alterar produtos
app.put("/alterarProduto/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, valor, quantidade, imagem, categoria, descricao } = req.body;

  console.log(req.body)

  await sql`UPDATE produtos SET 
  nome_produto=${nome}, 
  valor_produto=${valor}, 
  quantidade_produto=${quantidade},
  img_url=${imagem}, 
  categoria=${categoria},
  descricao=${descricao}
  WHERE id_produto = ${id};`;

  return res.status(201).json("alterado");
});

// cadastrar novo produto
app.post("/cadastrarProdutos", async (req, res) => {
  const {
    nome_produto,
    valor_produto,
    quantidade_produto,
    img_url,
    categoria,
    descricao,
  } = req.body;
 
  await sql`INSERT INTO produtos(nome_produto, valor_produto, quantidade_produto, img_url, categoria, descricao) 
  values(
  ${nome_produto},
  ${valor_produto},
  ${quantidade_produto},
  ${img_url},
  ${categoria},
  ${descricao}
  )`;

  return res.status(201).json("produto criado");
});

//inicializar api
app.listen(3000, () => {
  console.log("No ar! 🚀");
});
