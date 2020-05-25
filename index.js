const server = require('server.js');

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`\n server listening on port ${5000}`);
})

server.get('/', (req,res) => {
    res.json("hello world")
})