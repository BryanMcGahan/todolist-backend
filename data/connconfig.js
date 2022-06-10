const { MongoClient } = require('mongodb');

const url =process.env.URL;

const connection = new MongoClient(url);

module.exports = connection