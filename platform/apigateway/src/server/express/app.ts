import express from "express";
import type { Request, Response } from "express";

import SignupHandler from "./handlers/SignUpHandler.js";

const app = express();

// ⚡ Middleware to parse JSON bodies
app.use(express.json());

// Simple test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hola mundo");
});

// Signup route - use POST, not GET
app.post("/api/signup", SignupHandler);

export default app;
