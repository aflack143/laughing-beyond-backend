const User = require('../models').User;

const signup = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.status(constants.SUCCESS).json({
            "user": newUser
        });
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(foundUser => {
        if(foundUser){
            if (foundUser.password === req.body.password) {
                res.status(constants.SUCCESS).json({
                    "user": foundUser
                });
            } else {
                res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect Username/Password`);
            }
        } else {
            res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect Username/Password`);
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getProfile = (req, res) => {
    User.findByPk(req.user.id, {
        attributes: ['id', 'name', 'email', 'username', 'password', 'img'],
    })
    .then(userProfile => {
        res.status(constants.SUCCESS).json(userProfile)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}
const editProfile = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.user.id
        },
        returning: true
    })
    .then(() => {
        User.findByPk(req.user.id, {
            attributes: ['id', 'name', 'email', 'username', 'password', 'img'],
        })
        .then(userProfile => {
            res.status(constants.SUCCESS).json(userProfile)
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}
module.exports = {
    signup,
    login,
    getProfile,
    editProfile  
}