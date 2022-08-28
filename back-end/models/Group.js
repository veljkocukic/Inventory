const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema(
  {
    items: {
      type: Array,
      default: [],
    },
    name: {
      type: String,
      required: true,
    },
    maxItems: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Group', GroupSchema);
