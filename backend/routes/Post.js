import express from "express";
import { getAllJobs, postAJob } from "../controllers/Post.js";
import { protect } from "../middleWare/authMiddlewre.js";

const router = express.Router();

router.post("/create", protect, postAJob);
router.get("/allPosts", getAllJobs);
// router.post("/update");
// router.get("/delete");

export default router;
