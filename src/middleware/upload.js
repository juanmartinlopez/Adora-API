// src/middleware/upload.js
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("../helpers/cloudinary"); // Ahora cloudinary está definido

const storage = new CloudinaryStorage({
  cloudinary, // Esto funcionará correctamente
  params: {
    folder: "uploads",
    allowed_formats: ["jpg", "png", "jpeg", "webp"], // Formatos permitidos
  },
});

const upload = multer({ storage });

module.exports = upload;