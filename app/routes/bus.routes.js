module.exports = (app) => {
    const buses = require('../controllers/bus.controller');

    app.post('/buses',
        buses.validate('create'),
        buses.create
    );

    app.get('/buses', buses.findAll);

    app.get('/buses/:busId', buses.findOne);

    app.put('/buses/:busId', buses.update);

    app.delete('/buses/:busId', buses.delete);
}