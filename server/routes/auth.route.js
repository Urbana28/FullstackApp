const {Router} = require('express');
const router = Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator');
module.exports = router

//api/auth/register
router.post('/register',
    [   //валидация при помощи экспресс-валидатора
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimal password length is 6').isLength({min: 6})
    ],
    async (req, res) => {
    try {
        //console.log('Body', req.body)
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect registration values'
            })
        }

        const {email, password, phoneNumber} = req.body

        const candidate = await User.findOne({email})//{email:email}
        if (candidate) {
            return res.status(400).json({message: 'You already have an account'})
        }

        const hashedPassword = await bcrypt.hash(password, 12) //хэшируем пароль!!асинхронная
        const user = new User({email, password: hashedPassword, phoneNumber}) //создаем нового юзера

        await user.save() //ждем пока пользователь сохранится в БД

        res.status(201).json({message: 'User has been created'})
    } catch (e) {
        res.status(500).json({message: 'Something has went wrong, try again!'})
    }
})

//api/auth/login
router.post('/login',
    [
        check('email', 'Enter correct email').normalizeEmail().isEmail(),
        check('password', 'Enter password').exists()
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect login data'
            })
        }

        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user) { //ставим ! так как проверяем наличие юзера с таким эмейлом
            return res.status(400).json({message: "You don't have an account"})
        }

        const isMatch = bcrypt.compare(password, user.password) //сравниваем пароль, пришедший из фронта, и тот, что в БД
        if(!isMatch) {
            return res.status(400).json({message: 'Incorrect password or email'})
        }
        //после всех проверок нужна аутентификация пользователя при помощи jwt

        const token = jwt.sign(
            {userId: user.id}, //тут может быть имя, логин и т.д.
            config.get('jwtSecret'),
            {expiresIn: '1h'}  //желательно на 1 час
        )
        res.json({token,userId:user.id})

    } catch (e) {
        res.status(500).json({message: 'Something has went wrong, try again!'})
    }
})