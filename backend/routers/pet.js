const express = require('express')
const { uploadData, getAllPets, getSinglePet } = require('../controllers/pet')

const router = express.Router()

router.route("/insert").post(uploadData);
router.route("/pet/data").get(getAllPets);
router.route('/pets/one/:id').get(getSinglePet);

module.exports = router
