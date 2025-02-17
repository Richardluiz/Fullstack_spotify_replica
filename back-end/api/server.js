import express from "express";
import cors from "cors";
import db from "./connect.js"; // Importando a função db
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3002;

app.use(cors());
// app.use(express.json());

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

// Endpoint para artistas
app.get("/api/artists", async (request, response) => {
  try {
    const database = await db();  // Esperando pela conexão com o MongoDB
    const artistsCollection = await database.collection("artists").find({}).toArray();
    response.send(artistsCollection);
  } catch (error) {
    response.status(500).send({ error: "Erro ao acessar artistas" });
  }
});

// Endpoint para músicas
app.get("/api/songs", async (request, response) => {
  try {
    const database = await db();  // Esperando pela conexão com o MongoDB
    const songsCollection = await database.collection("songs").find({}).toArray();
    response.send(songsCollection);
  } catch (error) {
    response.status(500).send({ error: "Erro ao acessar músicas" });
  }
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

// Serve o frontend (index.html)
app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
