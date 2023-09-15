const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT ?? 3000;
const indexRoutes = require('./routes/index.routes');

app.use(express.static('public'));
app.use(logger("dev"));
app.use(express.json());
app.use(indexRoutes.router);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})