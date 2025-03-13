// src/middleware/upload.js
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("./cloudinary");

// Configuración de Multer con almacenamiento en Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads", // Carpeta en Cloudinary
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({ storage });

module.exports = upload;
