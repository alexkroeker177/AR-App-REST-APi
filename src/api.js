
const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
      hello: "hi!"
    });
  });


router.get("/positions", (req, res) => {
    const positionJson = require('./targetdata.json');
    res.json(positionJson);
})

router.put("/updatepositions", (req, res) => {
    fs.writeFile('./targetdata.json', JSON.stringify(req.body), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
    res.send("OKAY");
})

app.use(`/.netlify/functions/api`, router);