module.exports = {
    router: () => {
        server.get('/ping', (req, res, next) => {
            res.send(200, {message: 'ping'});
        });
    }
}