import cors from "cors";
import express from "express";
import routers from "./app/routes";
const data = require("../fakeService.json");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", routers);

app.get("/api/v1/services", (req, res) => {
  res.json(data);
});

export default app;
