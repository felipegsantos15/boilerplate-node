const restify = require('restify');
const server = restify.createServer();


server.listen(process.env.PORT, () => {
    console.log(`server listen on port ${process.env.PORT}`);
});