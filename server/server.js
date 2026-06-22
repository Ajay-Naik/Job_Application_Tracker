const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
dns.setDefaultResultOrder('ipv4first');

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Job Tracker API running');
});

const PORT = process.env.PORT || 5000;
const applicationRoutes = require('./routes/applications');
app.use('/api/applications', applicationRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));