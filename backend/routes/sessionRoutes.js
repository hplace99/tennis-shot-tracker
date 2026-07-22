const express = require("express");
const Session = require("../models/Session");

const router = express.Router();

// Get every saved session
router.get("/", async (req, res) => {
  try {
    const sessions = await Session.find().sort({
      createdAt: -1,
    });

    res.status(200).json(sessions);
  } catch (error) {
    console.error("Error loading sessions:", error);

    res.status(500).json({
      message: "Unable to load sessions.",
    });
  }
});

// Get one session
router.get("/:id", async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);

    if (!session) {
      return res.status(404).json({
        message: "Session not found.",
      });
    }

    res.status(200).json(session);
  } catch (error) {
    console.error("Error loading session:", error);

    res.status(500).json({
      message: "Unable to load the session.",
    });
  }
});

// Create a session
router.post("/", async (req, res) => {
  try {
    const { name, shots } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        message: "A session name is required.",
      });
    }

    const newSession = await Session.create({
      name: name.trim(),
      shots: Array.isArray(shots) ? shots : [],
    });

    res.status(201).json(newSession);
  } catch (error) {
    console.error("Error saving session:", error);

    res.status(500).json({
      message: "Unable to save the session.",
    });
  }
});

// Update a session
router.put("/:id", async (req, res) => {
  try {
    const { name, shots } = req.body;

    const updatedSession = await Session.findByIdAndUpdate(
      req.params.id,
      {
        name,
        shots,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedSession) {
      return res.status(404).json({
        message: "Session not found.",
      });
    }

    res.status(200).json(updatedSession);
  } catch (error) {
    console.error("Error updating session:", error);

    res.status(500).json({
      message: "Unable to update the session.",
    });
  }
});

// Delete a session
router.delete("/:id", async (req, res) => {
  try {
    const deletedSession = await Session.findByIdAndDelete(
      req.params.id
    );

    if (!deletedSession) {
      return res.status(404).json({
        message: "Session not found.",
      });
    }

    res.status(200).json({
      message: "Session deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting session:", error);

    res.status(500).json({
      message: "Unable to delete the session.",
    });
  }
});

module.exports = router;