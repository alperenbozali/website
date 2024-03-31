const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");

  router.get("/hakkimizda", (req, res) => {
    console.log("Hakkımızda sayfası açıldı.");
    res.render("about");
  });
  
  router.get("/iletisim", (req, res) => {
    console.log("İletisim sayfası açıldı.");
    res.render("contact");
  });

});

module.exports = router;