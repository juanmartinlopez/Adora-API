// src/middleware/cloudinary.js
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

// Configurar Cloudinary
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

// Obtener URL de una imagen
const getImage = async (id) => {
  try {
    if (!id) throw new Error("No se proporcionó un ID de imagen");
    const image = await cloudinary.api.resource(id);
    return image.url;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Subir imagen a Cloudinary
const postImage = async (file) => {
  try {
    if (!file) throw new Error("No se ha subido ninguna imagen");
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "uploads",
    });
    return result.secure_url; // Devuelve la URL segura de la imagen
  } catch (error) {
    throw new Error(error.message);
  }
};

// Eliminar imagen de Cloudinary
const deleteImage = async (id) => {
  try {
    if (!id) throw new Error("No se proporcionó un ID de imagen");
    await cloudinary.uploader.destroy(id);
    return { message: "Imagen eliminada correctamente" };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  cloudinary,
  getImage,
  postImage,
  deleteImage,
};
