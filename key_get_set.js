import redis from 'redis';

const client = redis.createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

await client.set('key', 5023);
let value = await client.get('key');
console.log(value);

await client.mSet(['header', '0', 'left', '0', 'article', '0', 'right', '0', 'footer', '0']);
console.log('succ')

value = await client.mGet(['header', 'left', 'article', 'right', 'footer'])
console.log(value);

client.quit()