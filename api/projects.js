const express = require('express')
const cloudinary = require('cloudinary')

/* for development, remove when deploying
var dotenv = require('dotenv');
dotenv.load();
*/
const app = express()
const router = express.Router()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

router.get('/:tag', (req, res) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  cloudinary.v2.api.resources_by_tag(req.params.tag, {context: true},
    function(error, result){
      result = result.resources.reverse()
      result.forEach(function(image){
        var position = 61
        image.secure_url = image.secure_url.substr(0, position) + "c_scale,%width%,%height%/" + image.secure_url.substr(position)
      })
      res.send(result)
    }
  )
})

module.exports = {
    path: '/api/projects',
    handler: router
}
