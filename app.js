import express from "express";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./DATABASE/mongodb.js";
import { PORT } from "./config/env.js";
import path from "path"; // Changed from require to import
import errorMiddleware from "./Middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./Middlewares/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extende: false }));
app.use(cookieParser());
// app.use(arcjetMiddleware);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("api/v1/workflows", workflowRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to Subscription Tracker API");
});

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectToDatabase();
});

export default app;
