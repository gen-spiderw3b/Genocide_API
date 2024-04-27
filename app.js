import express from "express";
import * as dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
dotenv.config();

const app = express();
const port = process.env.PORT || 5500;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

app.listen(port, () => console.log(`Server is running on ${port}`));
