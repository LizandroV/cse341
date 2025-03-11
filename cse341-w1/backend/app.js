import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import routesUser from './routes/userRoutes.js'
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors()); // Permitir solicitudes desde cualquier origen
app.use(express.static(path.join(__dirname, '../public'))); // Servir archivos estáticos

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', routesUser);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

try {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
    }
catch (error) {
    console.error('Error occurred:', error);
};