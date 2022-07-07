const redis = require('redis');
const client = redis.createClient(
    6379
);

client.on('error', (err) => 
    console.log('Redis Client Error', err)
);

client.connect();

const value = client.get('Mykey');
