//?-----------Imports-----------
const { Router } = require("express");
const { getImage, postImage, deleteImage } = require("../controllers/imageController");
const multer = require("multer");
const upload = require("../middleware/upload"); // Esto usa DiskStorage por defecto

const imageRouter = Router();

//*-----------Routes-----------
imageRouter.get('/', getImage);
imageRouter.post('/', upload.single('image'), postImage);
imageRouter.delete('/', deleteImage);

module.exports = imageRouter;