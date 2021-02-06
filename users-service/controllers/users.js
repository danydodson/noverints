const { hashPassword } = require('../utils')
const User = require('../models')



   getUsers = async (req, res) => {
    try {
      let users
      if (!req.params.id) {
        users = await User.find()
      } else {
        users = await User.find({ _id: req.params.id })
      }
      return res.status(200).json({
        success: true, data: users
      })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ success: false })
    }

  }


  // @access Public
  // @route POST /api/v1/user
  // @desc Create a new user 

   addUser = async (req, res) => {
    try {

      let userData = { email, username, password } = req.body

      let hashed = await hashPassword(password)

      const user = await User.create({ ...userData, password: hashed })

      // res
      //   .set('X-Token', jsonwebtoken.sign({ cool: true }, secretToken, { algorithm: 'HS256' }))
      //   .status(204)
      //   .end()

      let userString = JSON.stringify(user)

      console.log(userString)

      return res.set('User', userString).status(201).json({
        success: true,
        data: user
      })

    } catch (err) {
      console.log(err)

      if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(val => val.message)
        return res.status(400).json({ success: false, error: messages })
      }

      return res.status(500).json({ success: false, message: err.name })
    }
  }
}
