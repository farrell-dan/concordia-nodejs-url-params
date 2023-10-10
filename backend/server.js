"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");

// Require the DATA
const { top50 } = require("./data/top50");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("dev"))
  .use(express.json())

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇
.get("/top50", (req, res) => {
  res.json({
    status: 200,
    data: top50 ,
  });
})

.get("/top50/song/:rank", (req,res) => {
  const rank = parseInt(req.params.rank, 10);
  console.log(rank);
  const song = top50.find(song => song.rank === rank);
  console.log(song);
  if (song) {
    res.json({
      status: 200,
      data: song,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "Song not found.",
    });
  }
})


  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
