import express from 'express';
import {VandorRoute} from './routes/VandorRoute';
import {AdminRoute} from './routes/AdminRoute';


const app = express();

app.use(express.json());

app.use('/admin', AdminRoute);
app.use('/vendor', VandorRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
