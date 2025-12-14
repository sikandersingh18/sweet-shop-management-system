import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import authRoutes from './routes/authRoutes.js';
import sweetRoutes from './routes/sweetRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/sweets', sweetRoutes);
app.get('/', (req, res) => {
  res.send('✅ Sweet Shop Backend is running successfully');
});

// Health check API
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'Runnig',
    message: 'Sweet Shop API is healthy.',
    timestamp: new Date()
  });
});

export default app;
