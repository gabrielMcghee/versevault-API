import express from "express";
import cors from "cors";
import verseRoutes from "./routes/verseRoutes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("VerseVault API is running.");
});

app.use("/api/verses", verseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});