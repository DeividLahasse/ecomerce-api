import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Bem vindo aao curso de nodejs");
});

app.listen(3000, () => {
  console.log("servidor ativo na porta 3000");
});
