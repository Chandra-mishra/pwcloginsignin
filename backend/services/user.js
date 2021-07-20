const User = require('../models/user');

module.exports = {
    add : (data) =>
    new Promise((resolve, reject) => {
        User.create(data)
            .then((doc) => {
                resolve(doc)
            })
            .catch((error) => reject(error))
    }),
    get :(query) => 
    new Promise((resolve,reject) => {
      User.findOne(query)
      .then((doc) => {
          resolve(doc)
      })
      .catch((error) => reject(error))
    })
}