import express from "express";
import { protect } from "../middleWare/authMiddlewre.js";

const router = express.Router();
// //extracting URL parameter and appending details to request
// router.param("postId", getPostById);

// router.post("/create", protect);
// router.post("/update/:postId", protect);
// router.get("/delete/:postId", protect);

export default router;
