import express from "express";
import { deleteAjob, getAllJobs, postAJob, searchJobsByCompany, searchJobsBySkill, updateAjob } from "../controllers/Post.js";
import { protect } from "../middleWare/authMiddlewre.js";

const router = express.Router();

router.post("/create", protect, postAJob);
router.get("/allPosts", getAllJobs);
router.post("/searchSkill", searchJobsBySkill);
router.get("/:company", searchJobsByCompany);
router.delete("/delete/:id", protect ,deleteAjob);
router.post("/update/:id", protect ,updateAjob);
// router.post("/update");
// router.get("/delete");

export default router;
