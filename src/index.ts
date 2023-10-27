import express from 'express';
import {VandorRoute} from './routes/VandorRoute';


const app = express();

app.use('/vendor', VandorRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
