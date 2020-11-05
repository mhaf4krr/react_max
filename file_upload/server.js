const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload());

//Upload Endpoint

app.post("/upload", (req, res) => {
  console.log(req.files);
  if (req.files === null) {
    res.status(400).send();
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }

    res.json({
      fileName: file.name,
      filePath: `/uploads/${file.name}`,
    });
  });
});

app.listen(5000);
