const router = require("express").Router();
const db = require("./artist-model");

// Endpoints: /api/users

// get all artists:
router.get("/", (req, res) => {
    db.findAll().then((artists) => {
        res.status(200).json({ artists })
    })
    .catch(err => {
        res.status(500).json({
            errMessage: "Sorry, an error occured when attempting to make your request. Please try again later.",
            err
        })
    })
})

router.get("/:name", (req, res) => {
    const name = req.params.name

    db.findByArtistName(name)
    .then(artistData => {
        artistData.length > 0 ? 
        res.status(200).json({ artistData })
        :
        res.status(404).json({ artistData, status: 404, errorMessage: "Sorry artist not found" })
        
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Sorry, an error occured when attempting to make your request. Please try again later.", err })
    })
})

module.exports = router;