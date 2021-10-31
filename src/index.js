const express = require('express');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');
const port = 5000
const dotenv = require('dotenv-flow');

dotenv.config({
  node_env: process.env.NODE_ENV || 'dev',
});

const StartServer = async() => {

    const app = express();
    
    await databaseConnection();
    
    await expressApp(app);

    app.listen(port, () => {
        console.log(`listening to port ${port}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();