const router = require('express').Router()
const User = require('./../models/User.model')

 //user profile
router.get('/profile/:id', (req, res) => {
   
    const { id } = req.params

        User
            .findById(id)
            .then(user => res.render('users/user-profile', user))
            .catch(err => console.log(err))
})

module.exports = router