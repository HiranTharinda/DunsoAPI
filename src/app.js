const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/env');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const contextRoutes = require('./routes/contextRoutes');
const taskRoutes = require('./routes/taskRoutes');
const habitRoutes = require('./routes/habitRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const licenseRoutes = require('./routes/licenseRoutes');
const openaiRoutes = require('./routes/openaiRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Connect to MongoDB
connectDB();
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contexts', contextRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/licenses', licenseRoutes);
app.use('/api/openai', openaiRoutes);

// Error handling middleware
// app.use(errorHandler);

const PORT = config.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;