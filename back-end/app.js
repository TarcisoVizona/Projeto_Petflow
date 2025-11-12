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
  console.log(produtos);
  if (produtos) {
    return res.status(200).json(produtos);
  } else return res.status(400);
});

//rota para exibir produtos na tela inicial
app.get("/pagina/inicial", async (req, res) => {
  const produtos = await sql`SELECT * FROM produtos ORDER BY RANDOM() LIMIT 35`;
  console.log(produtos);
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

app.put("/produtosAdmin/:id", async (req, res) => {
  const { id } = req.params;
  const {
    nomeProduto,
    quantidadeProduto,
    descricao_produto,
    categoria_produto,
    imgUrl,
    valorProduto,
  } = req.body;

  await sql`UPDATE public.produtos SET 
  nome_produto=${nomeProduto}, 
  valor_produto=${valorProduto} 
  quantidade_produto=${quantidadeProduto}, 
  img_url=${imgUrl}, 
  categoria=${categoria_produto}
  descricao=${descricao_produto}
  WHERE id = ${id};`;

  return res.status(201).json("alterado");
});

//detalhes dos produtos
app.get("/produto/:id", async (req, res) => {
  const { id } = req.params;
  const produto = await sql`SELECT * FROM produtos WHERE id_produto = ${id}`;
  return res.status(200).json(produto[0]);
});

app.post("/comprar", async (req, res) => {
  const { id_produto, valor_total, data_venda, id_usuario } = req.body;
  console.log(id_produto);
  const comprar =
    await sql`insert into venda(id_produto, valor_total, data_venda, id_usuario) values (${id_produto}, ${valor_total}, ${data_venda}, ${id_usuario})`;
  if (comprar) {
    return res.status(200).json(cadastro[0]);
  }
  return res.status(401).json("Erro ao cadastrar");
});

//deletar produtos
app.delete("/deletar/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await sql`DELETE FROM produtos WHERE id_produto = ${id} `;
    return res.status(200).json("produto deletado");
  } catch (error) {
    console.log(error)
    res
      .status(409)
      .json("Produto não pode ser deletado por que ja foi vendido");
  }
});

// Cadastrar novo produto
app.post("/admin/produtos", async (req, res) => {
  const { nome_produto, valor_produto, quantidade_produto, img_url, categoria, descricao } = req.body;
  await sql`INSERT INTO produtos(nome_produto, valor_produto, quantidade_produto, img_url, categoria, descricao) 
  values(
  ${nome_produto},
  ${valor_produto},
  ${quantidade_produto},
  ${img_url},
  ${categoria},
  ${descricao})`;

  return res.status(201).json("produto criado");
});

//inicializar api
app.listen(3000, () => {
  console.log("No ar! 🚀");
});
