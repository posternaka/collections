const express = require('express');
const cors = require('cors');
const db = require('./utils/database.js');
const authRoute = require('./routes/authRoute.js');
const adminRoute = require('./routes/adminRoute.js');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRoute);
// app.use('/admin', adminRoute);

const start = async () => {
    try {
        await db.sync();
        app.listen(PORT, () => {
            console.log("Server success");
        })
    } catch (error) {
        console.log(error);
    }
}

start();