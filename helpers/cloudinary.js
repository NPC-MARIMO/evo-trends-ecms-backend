const cloudinary = require("cloudinary").v2;
const multer = require("multer")

cloudinary.config({
    cloud_name : 'dkensamxc',
    api_key : '136761956625175',
    api_secret : "j08QK93Hb3A9yoWBXgylGIXvw4Q"
})

const storage = new multer.memoryStorage()

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
        resource_type : 'auto'
    })
    return result
}

const upload = multer({storage})
module.exports = {imageUploadUtil, upload}