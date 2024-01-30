import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        itemId: { type: mongoose.Schema.Types.ObjectId, ref: "items" },
        review: String,
        username: String,
        itemname: String,
    },
    { collection: "reviews" }
    );
export default schema;  