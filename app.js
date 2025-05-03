const express = require('express');
const cors = require('cors');
require('dotenv').config();

// const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// app.use('/api/users', userRoutes);
app.get("/custom-healthcheck", (req, res) => {
    res.send("Service is running successfully");
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
