import mongoose from 'mongoose'

const fileschema = new mongoose.Schema(
  {
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    downloadnumber: {
        type : Number,
        required : true,
        default : 0
    }
  },
  {
    timestamps: true,
  }
);

export const file = mongoose.model("file", fileschema)