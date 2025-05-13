import express from "express";
import Question from "../models/Questions.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const query = req.query.q; // Get search term from query params
    const results = await Question.find({
      $or: [
        { questionTitle: { $regex: query, $options: "i" } },
        { questionBody: { $regex: query, $options: "i" } },
        { questionTags: { $in: [query] } }
      ]
    }).limit(10); // Limit results for efficiency
    
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Search failed" });
  }
});

export default router;