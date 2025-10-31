import express from "express";
import cors from "cors";
import sql from "./database.js";

const app = express();
app.use(cors());
app.use(express.json());

//rota para registro de usuario
app.post("/cadastro", async (req,res) => {
  const { nome, email, senha, telefone} = req.body;
  console.log(nome)
  const cadastro = await sql `insert into usuario(nome_usuario, email_usuario, senha, telefone) values (${nome}, ${email}, ${senha}, ${telefone})`
  if (cadastro) {
    return res.status(200).json(cadastro[0]);
  }
  return res.status(401).json("Erro ao cadastrar");
}); 

//rota para login de usuario
app.post("/usuarios/login", async (req, res) => {
  const { email, senha } = req.body;
  const usuario =
    await sql `SELECT * FROM usuario WHERE email_usuario = ${email} AND senha = ${senha}`;
  if (usuario[0]) {
    return res.status(200).json(usuario[0]);
  }
  return res.status(401).json("Usuario ou Senha incorretos");
});

//rota para exibir produtos na tela inicial
app.get("/pagina/inicial", async (req, res) => {
  const produtos = await sql`SELECT * FROM produtos`;
  console.log(produtos)
  if (produtos){
    return res.status(200).json(produtos);
  }
  else
    return res.status(400);
});

//inicializar api
app.listen(3000, () => {
  console.log("No ar! 🚀");
});