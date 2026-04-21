const express = require("express");
const app = express();

app.set("trust proxy", true);

// ✅ ADD THIS ROOT ROUTE (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("Request Header Parser Microservice is running 🚀");
});

// Your main API
app.get("/api/whoami", (req, res) => {
  const ipaddress = req.headers["x-forwarded-for"] || req.ip;

  res.json({
    ipaddress,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});