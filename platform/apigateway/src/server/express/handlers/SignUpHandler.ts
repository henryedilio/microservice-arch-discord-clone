import type { Request, Response } from "express";
import environment from "../../../environment.js";
import type { AuthenticationResponse } from "../../../types/AuthenticationTypes.js";

const AUTH_SERVICE_URL = environment.AUTHSERVICEURL;

type SignupData = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export default async function SignupHandler(req: Request, res: Response) {
  console.log("Executing signup handler");
  try {
    const data: SignupData = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    // Validate required fields
    if (!data.name || !data.username || !data.email || !data.password) {
      return res.status(400).json({
        message:
          "Missing required fields, required fields: name, username, email, password",
      });
    }

    console.log("Auth service URL:", AUTH_SERVICE_URL);

    const response = await fetch(`${AUTH_SERVICE_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responsedata = await response.json();
    console.log("Response from auth service:", responsedata);

    if (!response.ok) {
      const answare: AuthenticationResponse = {
        success: false,
        message: "An error has occurred",
        error: {
          code: responsedata.error?.code || "UNKNOWN_ERROR",
          message: responsedata.error?.message || "Unknown error",
          status: response.status,
        },
      };
      return res.status(response.status).json(answare);
    }

    const answare: AuthenticationResponse = {
      success: true,
      message: "User created successfully",
      data: responsedata.data,
      tokens: responsedata.tokens,
    };

    return res.status(201).json(answare);
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: environment.NODE_ENV === "development" ? error : undefined,
    });
  }
}
