const mongoose = require('mongoose');
const uri = process.env.DB_CONNECT;

mongoose.set('strictQuery', true);
let connect = async () => await mongoose.connect(
    uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = { connect }