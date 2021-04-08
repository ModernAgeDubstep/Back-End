const db = require("../data/db.Config");

module.exports = {
    findReleasesByArtistId
}

function findReleasesByArtistId(id){
    return db("Releases as r")
    .select(
        "r.id",
        "r.release_name",
        "r.bio",
        "a.artist_name"
    )
    .join("Artists as a", "a.id", "r.artist_id")
    .where("r.artist_id", id)
}