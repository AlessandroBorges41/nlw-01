import express  from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());

//Use seve para colocar um plugin
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname,'..', 'uploads')));

app.use(errors());

// Porta que deseja executar a aplicação
app.listen(3333);
