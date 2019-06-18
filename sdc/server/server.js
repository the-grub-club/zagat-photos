require('newrelic');

const app = require('./app.js');

const port = 3010;
app.listen(port, console.log('listening on port', port));
