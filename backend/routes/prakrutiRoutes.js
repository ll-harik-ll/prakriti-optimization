const express = require("express");
const Prakruti = require("../models/Prakruti");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/submit", authMiddleware, async (req, res) => {
    const { answers, type } = req.body;
    const prakruti = new Prakruti({ userId: req.user.userId, answers, type });
    await prakruti.save();
    res.json({ message: "Quiz Submitted" });
});

module.exports = router;
