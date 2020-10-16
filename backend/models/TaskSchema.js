const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

let TaskSchema = new Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    dueDate: {
        type: Date
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("task", TaskSchema);