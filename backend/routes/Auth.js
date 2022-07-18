import express from "express";
import { userSignUp } from "../controllers/User.js";

const router = express.Router();

router.get("/hi", (req, res) => {
  return res.status(200).json({ message: "hi babys" });
});

router.post("/signup", userSignUp);

export default router;
