const sql = require("../config/db");

const findAll = () => {
    return new Promise((resolve, reject) => {
        sql.query("SELECT * FROM entrenador", (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });
}

const findById = (params) => {
    return new Promise((resolve, reject) => {
        const {id} = params;
        sql.query(`SELECT * FROM entrenador WHERE codigo = ${id}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });
}

const createTrainer = (body) => {
    const {nombre, id_pokemon} = body;
    //string template
    let query = `INSERT INTO entrenador (nombre, id_pokemon) VALUES ('${nombre}', ${id_pokemon})`;
    return new Promise((resolve, reject) => {
        sql.query(query, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });
}

module.exports = { findAll, createTrainer, findById };