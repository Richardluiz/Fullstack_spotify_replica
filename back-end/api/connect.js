import { MongoClient } from "mongodb";

const URI = "mongodb+srv://richardluizborba:aGjNRGlrK3wkRtMv@cluster0.6eqix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

async function db() {
    try {
        await client.connect(); // Conectar ao MongoDB
        console.log("✅ Conectado ao MongoDB");

        const db = client.db("spotifyAula"); // Banco de dados correto

        // Teste: Buscar coleção de músicas
        const songCollection = await db.collection("songs").find({}).toArray();
        console.log("🎵 Songs:", songCollection);

        return db;
    } catch (error) {
        console.error("❌ Erro ao conectar no MongoDB:", error);
    }
}

// Exportando a função para ser usada em outros arquivos
export default db;
