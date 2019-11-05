const Bus = require('../models/bus.model');
const { check, validationResult } = require('express-validator');

exports.validate = (method) => {
    switch (method) {
        case 'create': {
            return [
                check('id', 'Id eh obrigatorio e deve ser numerico').exists().isNumeric(),
                check('codigo', 'Codigo nao pode ser vazio').not().isEmpty(),
                check('nome', 'Nome da linha eh obrigatorio').exists().not().isEmpty()
            ]
        }
    }
}

exports.create = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const { id, codigo, nome } = req.body;
    const bus = new Bus({
        id: id,
        codigo: codigo,
        nome: nome
    });

    bus.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Ocoreu algum erro ao tentar salvar no banco."
            });
        });
};

exports.findAll = (req, res) => {
    Bus.find()
        .then(buses => {
            res.send(buses);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};