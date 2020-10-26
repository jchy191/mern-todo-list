import express from 'express';
import cors from 'cors';
import routes from './routes.js';
const app = express();

app.use(express.urlencoded());
app.use(cors());

app.use('/', routes)


app.use((req, res, next) => {
    const err = new Error("New Found");
    err.status = 404;
    next(err)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
})

app.listen(4000, () => {
    console.log("Application is running on localhost:4000 !!!")
})