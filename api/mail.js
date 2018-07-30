const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

/* for development, remove when deploying
var dotenv = require('dotenv');
dotenv.load();
*/
const app = express()
const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', (req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  const output = `
    <h1>You have a new contact message</h1>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
  `

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USERNAME,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: process.env.ACCESS_TOKEN,
        expires: 3600
    }
  })
  let mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: [process.env.EMAIL_USERNAME, req.body.email],
    subject: 'Message from RWS',
    html: output
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    } else {
      res.send('Email sent!')
    }
  })
})

module.exports = {
    path: '/api/mail',
    handler: router
}
