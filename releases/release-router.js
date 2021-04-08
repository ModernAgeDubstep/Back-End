const router = require("express").Router();
const db = require("./release-model");

router.get('/:id', (req, res) => {
    const id = req.params.id
    db.findReleasesByArtistId(id)
    .then(releases => {
        res.status(200).json({ releases })
    })
    .catch(err => {
        res.status(500).json({
            errMessage: "Sorry, an error occured while looking for release. Please, contact database administrator",
            err
        })
    })
})

module.exports = router;