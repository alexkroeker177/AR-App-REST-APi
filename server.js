const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(urlEncodedParser);
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/positions", urlEncodedParser, async (req, res) => {
    const positionJson = require('./targetdata.json');
    res.status(200).send(positionJson);
});

