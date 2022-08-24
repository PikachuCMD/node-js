const UserController = require('../')

module.exports = (app) => {
    app.post('/user', UserController.create)
    app.put('/user', UserController.put)
    app.delete('/user', UserController.remove)
    app.get('/user', UserController.show)
    app.get('/user', UserController.index)
}