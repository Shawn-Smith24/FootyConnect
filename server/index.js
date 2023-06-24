import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRoutes from './routes/posts.js'


const app = express();



app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postsRoutes);

const CONNECTION_URL = 'mongodb+srv://shawnsmith0024:Chelsea0327@footyconnect.q35lg5c.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5555;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));



  //  http://localhost:5555/posts