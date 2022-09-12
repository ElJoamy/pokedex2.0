const { findById } = require("../../dataAccess/trainer");
const getTrainersByIdService = async (req, res) => {
    const {params} = req;
    const trainer = await findById(params);
    return { succes: true, message: "Get Trainer By id", trainer}
};

module.exports = getTrainersByIdService;