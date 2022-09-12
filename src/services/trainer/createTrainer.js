const {createTrainer} = require("../../dataAccess/trainer");
const createTrainerService = async (req, res) => {
    const {body} = req;
    console.log(req);
    const trainer = await createTrainer(body);
    return { succes: true, message: "Trainers was created succsfully", body}
};

module.exports = createTrainerService;