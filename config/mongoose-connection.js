const mongoose = require('mongoose');

const dbgr = require('debug')('app:mongoose-connection');

const config = require('config');

mongoose.connect(` ${config.get("MONGODB_URI")}/E-Commerce`).then(() => {
    dbgr('Database connected');
}).catch((err) => {
    dbgr(err);
});

module.exports = mongoose.connection;