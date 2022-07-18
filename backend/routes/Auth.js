import express from "express";

const router = express.Router();

router.get("/hi", (req, res) => {
  return res.status(200).json({ message: "hi babys" });
});

export default router;
