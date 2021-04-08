
exports.up = function(knex) {
  return knex.schema
    .createTable("Artists", tbl => {
        tbl.increments("id");
        tbl.string("artist_name").unique();
        tbl.string("bio");
        tbl.string("instagram");
        tbl.string("facebook");
        tbl.string("spotify");
        tbl.string("youtube");
        tbl.string("twitter");
    })
    .createTable("Releases", tbl => {
        tbl.increments("id");
        tbl.integer("artist_id")
            .references("id")
            .inTable("Artists")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        tbl.string("release_name");
        tbl.string("bio");
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Artists")
    .dropTableIfExists("Artists");
};
