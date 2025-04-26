import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import magazineRoute from "./route/magazine.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

// CORS Configuration
app.use(cors({
  origin: "https://mernfyp-production-3521.up.railway.app",  // <-- my frontend URL here
  credentials: true,
}));

app.use(express.json());

// MongoDB connection
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use("/magazine", magazineRoute);
app.use("/user", userRoute);

// Default route (optional) to test server
app.get("/", (req, res) => {
  res.send("Magazine Store Backend Running ✅");
});

// Listen
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
