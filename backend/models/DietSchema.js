const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

let DietSchema = new Schema({
  userid:{
    type: Schema.Types.ObjectId,
    required: true
  },
  dietType: {
    type: String,
    required: true,
    default: "FOOD"
  },
  calories: {
    type: Number,
    required: true,
  },
  description: {
    type: String
  }
})

module.exports = mongoose.model("diet", DietSchema);
