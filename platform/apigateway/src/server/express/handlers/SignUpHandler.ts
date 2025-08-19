import type { Request, Response } from "express";
import environment from "../../../environment.js";

const AUTH_SERVICE_URL = environment.AUTHSERVICEURL;

type SignupData = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export default async function SignupHandler(req: Request, res: Response) {
  try {
    const data: SignupData = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    if (!data.name || !data.username || !data.email || !data.password) {
      return res.status(400).json({
        message: "Missing required fields, required fields: name, username, email, password",
      });
    }

    const response = await fetch(AUTH_SERVICE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // <-- Fix: convert object to JSON string
    });

    const responsedata = await response.json();

    if (!response.ok) {
      console.log("Debug:", responsedata);
      return res.status(response.status).json(responsedata);
    }

    return res.status(201).json({ message: "User created successfully", user: responsedata });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
