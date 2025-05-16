import express from "express";
import { addReview} from "../Controller/jobController.js";

const route = express.Router();

route.post('/addreview', addReview);

export default route;