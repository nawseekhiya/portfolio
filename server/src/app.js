import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env.js";
import contactRoutes from "./routes/contact.js";

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
// Choose the client origin based on environment
const corsOrigin =
  env.NODE_ENV === "production"
    ? env.CLIENT_ORIGIN_PROD || env.CLIENT_ORIGIN
    : env.CLIENT_ORIGIN;

app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  })
);

// Request logging
app.use(morgan(env.NODE_ENV === "production" ? "combined" : "development"));

// Body parsing
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api/contact", contactRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({
    error:
      env.NODE_ENV === "production" ? "Internal Server Error" : err.message,
  });
});

export default app;
