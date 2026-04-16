import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import feedbackRoutes from "./src/Routes/feedback.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", feedbackRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
