const db = require("../data/db.Config");

module.exports = {
    findAll,
    findByArtistName
}

function findAll(){
    return db("Artists");
}

function findByArtistName(name){
    return db("Artists").where("artist_name", name)
}

