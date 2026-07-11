import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT ?? 8080);
const DIST = path.join(__dirname, "dist");

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "manual-de-marca", ts: new Date().toISOString() });
});

app.use(express.static(DIST, { maxAge: "1h" }));

app.get("*", (_req, res) => {
  res.sendFile(path.join(DIST, "index.html"));
});

app.listen(PORT, () => {
  console.log(`manual-de-marca escuchando en puerto ${PORT}`);
});
