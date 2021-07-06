const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')

//CDN upload setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const CDNstorage = new CloudinaryStorage({ cloudinary })

const CDNupload = multer({ CDNstorage })

 
module.exports = { CDNupload }