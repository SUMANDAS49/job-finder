import express from "express";

const router = express.Router();

router.post("/create");
router.post("/update");
router.get("/delete");

export default router;
