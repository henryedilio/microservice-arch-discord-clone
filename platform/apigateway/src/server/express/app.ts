import express from "express";
import type { Request, Response } from "express";

import SignupHandler from "./handlers/SignupHandler.js";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hola mundo");
});

app.post("/api/authentication/signup", SignupHandler);

export default app;
