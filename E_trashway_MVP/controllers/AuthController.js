const User = require('../models/User')

module.exports = class AuthController {
  static registerUser(request, response) {
    return response.render('auth/register')
  }

  static async registerUserSave(request, response) {
    const user = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password
    }

    await User.create(user)

    return response.redirect('/register')
  }

  static loginUser(request, response) {
    return response.render('auth/login')
  }
}