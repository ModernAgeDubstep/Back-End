const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//ROUTE IMPORTS:
const artistRouter = require("../artists/artist-router");
const releaseRouter = require("../releases/release-router");
const stripe = require("../stripe/stripe");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/artists", artistRouter);
server.use("/api/releases", releaseRouter);
server.use('/api/stripe', stripe);


server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_DNV });
});

module.exports = server;
