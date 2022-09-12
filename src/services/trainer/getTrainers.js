const { findAll } = require("../../dataAccess/trainer");
const getTrainers = async (req, res) => {
    const trainers = await findAll();
    return { succes: true, message: "Trainers", trainers}
};

module.exports = getTrainers;