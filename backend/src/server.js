import app from './app.js';

import dotenv from 'dotenv';
dotenv.config();


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('----------------------------------------');
  console.log(' Sweet Shop Backend Server Started');
  console.log(` URL: http://localhost:${PORT}`);
  console.log(` Health Check: http://localhost:${PORT}/api/health`);
  console.log('----------------------------------------');
});
