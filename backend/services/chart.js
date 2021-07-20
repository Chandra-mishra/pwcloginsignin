const Chart = require('../models/chart');

module.exports = {
    get :() => 
    new Promise((resolve,reject) => {
      Chart.find()
      .then((doc) => {
          resolve(doc)
      })
      .catch((error) => reject(error))
    })
}