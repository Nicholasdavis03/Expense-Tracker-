const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const transactionSchema = new Schema({
  type: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
