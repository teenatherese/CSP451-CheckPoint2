import express from "express";
import { getUsers, createUser } from "../controllers/userController.js";

/*
 WHY this file exists:
 - Central routing layer
 - Keeps routes separate from business logic
*/

const router = express.Router();

// Health check endpoint
router.get("/health", (req, res) => {
  res.json({ status: "API is running" });
});

// User routes
router.get("/users", getUsers);
router.post("/users", createUser);

export default router;

