const server = require('./server.js');
const {port} = require('./config.js');

const dotEnvPort = port || 5000;

server.listen(port, () => {
    console.log(`\n server listening on port ${port}`);
})

server.get('/', (req,res) => {
    res.json("hello world")
})