import{MongoClient} from "mongodb";

const URI = "mongodb+srv://richardluizborba:aGjNRGlrK3wkRtMv@cluster0.6eqix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula")
const songCollection = await db.collection("songs").find({}).toArray()

console.log(songCollection)
