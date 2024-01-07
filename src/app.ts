import cors from "cors";
import express from "express";
import routers from "./app/routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", routers);

app.get("/", (req, res) => {
  res.send("Hello world");
});

export default app;
