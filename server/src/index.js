import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { app, server } from "./lib/socket.js";
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

// routes :
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log("server is now running on port :", PORT);
  connectDB();
});
