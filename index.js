import express from 'express';
var app = express();
import redis from 'redis';
const client = redis.createClient();

client.on('error', (err) => console.log('Redis Client Error', err))
await client.connect();

//init values
await client.mSet(['header', "0", 'left', "0", 'article', "0", 'right', "0", 'footer', "0"]);
const elem = await client.mGet(['header', 'left', 'article', 'right', 'footer']);
console.log(elem);

function data(){
    let data = {}
    return new Promise(async (resolve, reject) => {
        await client.mGet(['header', 'left', 'article', 'right', 'footer']).then(values => {
            //console.log('values are: ',values);
            data = {
                'header': Number(values[0]),
                'left': Number(values[1]),
                'article': Number(values[2]),
                'right': Number(values[3]),
                'footer': Number(values[4])
            }
            console.log(`data set ${JSON.stringify(data)}`)
            data.header == null ? reject(null) : resolve(data);
        })
    })
}

app.use(express.static('public'))

//get data
app.get('/data', (req, res) => {
    data()
    .then(data => {
        console.log(data);
        res.send(data);
    })
})

//update data
app.get('/update/:key/:value', async (req, res) => {
    try{
        const key = req.params.key;
        let value = Number(req.params.value);
        await client.get(key)
            .then(async (reply) => {
                value = Number(reply) + value;
                await client.set(key, value);
                data()
                .then(data => {
                    console.log(data);
                    res.send(data)
                })
            })
    }
    catch(error){
        console.log('Error: ' + error);
    }
})

app.listen(3000, () => {
    console.log('Running on localhost:3000')
})