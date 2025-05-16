import mongoose from "mongoose";

const JobReview = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email :{
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    date : {
        type: Date,
        default: new Date(),
    }
});

export default  mongoose.model("JobReview", JobReview);