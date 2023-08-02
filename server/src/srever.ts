import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './library/Logging';
import alcoholRoutes from './routes/Alcohol';
import prodactRoutes from './routes/Prodact';

const router = express();

/** connct to mongo */
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logging.log('conncted');
        StartServer();
    })
    .catch((err) => {
        Logging.error('Unable to connect: ');
        Logging.error(err);
    });

const StartServer = () => {
    router.use((req, res, next) => {
        Logging.info(`Incommig -> Method: [${req.method}] - Url [${req.url}] - IP [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            Logging.info(`Incommig -> Method: [${req.method}] - Url [${req.url}] - IP [${req.socket.remoteAddress}] status [${res.statusCode}]`);
        });

        next();
    });

    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());

    /** Rules of our API */
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    /** Routes */
    router.use('/alcohol', alcoholRoutes);
    router.use('/prodact', prodactRoutes);

    /** Healchack */

    router.get('/ping', (req, res, next) => {
        res.status(200).json({ message: 'pong' });
    });

    /** Error Hendeling */
    router.use((req, res, next) => {
        const error = new Error('not fond');
        Logging.error(error);

        return res.status(404).json({ message: error.message });
    });

    http.createServer(router).listen(config.server.port, () => Logging.info(`[server]: Server is running at ${config.server.port} http://localhost:${config.server.port}`));
};
