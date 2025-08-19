import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', Router);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
    });
}


const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb+srv://ayushraj2821:mypassword123@cluster0.tif1nuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
`;

Connection();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));