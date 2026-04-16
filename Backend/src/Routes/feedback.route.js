import express from "express";
import {
  createFeedback,
  getInsights,
} from "../controllers/feedback.controller.js";

const router = express.Router();

router.post("/feedback", createFeedback);
router.get("/insights", getInsights);

export default router;
