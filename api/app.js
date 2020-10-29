import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes.js';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/mern-todo", {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", err => console.error ("Connection error:", err));
db.once("open", () => console.log("Database connection successful"));

app.use('/api', routes);


//Catches 404 Errors
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err)
})

//Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
})

let port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("Application is running on localhost:4000")
})