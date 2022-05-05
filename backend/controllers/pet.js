const Pet = require('../models/Pet')

exports.uploadData = async (req, res) => {
  try {
    
    // const { object } = req.body

    Pet.insertMany(req.body)

    res.status(200).json({
        success: true,
        message: "Your dog have been inserted"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

exports.getSinglePet = async (req, res) => {
  try {
    const id = req.params.id
    const data = await Pet.findById(id)
    res.status(200).json({
      success: true,
      data,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

exports.getAllPets = async (req, res) => {
    try {
        const data = await Pet.find({});

        res.status(200).json({
          success: true,
          data,
        })
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        })
    }
}
