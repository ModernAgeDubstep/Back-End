
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('Artists').insert([
        {
          id: 1,
          artist_name: "Rilla",
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          spotify: "https://www.spotify.com",
          youtube: "https://www.youtube.com",
          twitter: "https://www.twitter.com",
        },
        {
          id: 2,
          artist_name: "Virtual Riot",
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          spotify: "https://www.spotify.com",
          youtube: "https://www.youtube.com",
          twitter: "https://www.twitter.com",
        },
        {
          id: 3,
          artist_name: "12th Planet",
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          spotify: "https://www.spotify.com",
          youtube: "https://www.youtube.com",
          twitter: "https://www.twitter.com",
        },
        {
          id: 4,
          artist_name: "50 Carrot",
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          spotify: "https://www.spotify.com",
          youtube: "https://www.youtube.com",
          twitter: "https://www.twitter.com",
        },
        {
          id: 5,
          artist_name: "Rilla Dubstep",
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          spotify: "https://www.spotify.com",
          youtube: "https://www.youtube.com",
          twitter: "https://www.twitter.com",
        },
        {
          id: 6,
          artist_name: "Rilladubz",
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          spotify: "https://www.spotify.com",
          youtube: "https://www.youtube.com",
          twitter: "https://www.twitter.com",
        },
      ]);
    });
};
