const Chart = require('../services/chart');
const utils = require("../utils/util");
const {get} = Chart;
const {respSuccess,respError} = utils;

module.exports = {
    get: async function ( req, res ) {
        try {
            const chartData = await get();
            return respSuccess(res,chartData);
          } catch (error) {
            respError(res, error.message);
          }
    },
}