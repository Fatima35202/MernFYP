import mongoose from "mongoose";

const magazineSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const Magazine = mongoose.model("Magazine", magazineSchema);

export default Magazine;