import express from 'express';
import dotenv from 'dotenv';
import { conDB } from './Config/db.js';
// import logger from './Config/logger.js';
import router  from './Routes/authRoutes.js';

dotenv.config({ path: 'backend/.env'});
const port = process.env.PORT || 3000;


const app = express();
conDB();


app.use(express.json());

app.use('/api/v1', router);


// app.use((err, req, res, next) => {
//     logger.error(err.message);
//     res.status(500).send('Something broke!');
// });
  
app.listen(port, () => console.log(`Server is running on port : ${port}`));
