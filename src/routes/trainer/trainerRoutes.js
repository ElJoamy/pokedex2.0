const routes = require("express").Router();
const getTrainers = require("../../services/trainer/getTrainers");
const createTrainerService = require("../../services/trainer/createTrainer");
const getTrainerByIdService = require("../../services/trainer/getTrainerById");

routes.get("/trainers", async (req, res) => {
    const response = await getTrainers(req, res);
    res.json(response);
});

routes.get("/trainer/:id", async (req, res) => {
    const response = await getTrainerByIdService(req, res);
    res.json(response);
});

routes.post("/trainer", async (req, res) => {
    const response = await createTrainerService(req, res);
    res.json(response);
});

module.exports = routes;