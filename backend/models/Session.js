const mongoose = require("mongoose");

const shotSchema = new mongoose.Schema(
  {
    x: {
      type: Number,
      required: true,
    },

    y: {
      type: Number,
      required: true,
    },

    player: {
      type: String,
      required: true,
    },

    shotType: {
      type: String,
      required: true,
    },

    result: {
      type: String,
      required: true,
    },
  },
  {
    _id: true,
  }
);

const sessionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    shots: {
      type: [shotSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;