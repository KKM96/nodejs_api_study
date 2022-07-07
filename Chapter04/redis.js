const redis = require('redis');
const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379,
});

// client.set("myKey","myVal");

// client.connect().then(() => {
//     console.log('연결 완료');
//     client.set("myKey","myVal");
//     client.get('myKey', (err, value) => {
//         console.log(value);
//     });
// });

client.get('myKey', (err, value) => {
    console.log('연결중..')
    console.log(value, ': value 표시');
});

