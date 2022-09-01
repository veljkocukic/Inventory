const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      requred: true,
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
    },
    alertLowAt: {
      type: Number,
    },
    max: {
      type: Number,
    },
    min: {
      type: Number,
    },
    customFields: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', ItemSchema);
