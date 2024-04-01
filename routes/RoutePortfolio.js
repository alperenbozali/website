// RoutePortfolio.js

const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));



router.get("/urunler", (req, res) => {
  res.render("urunler", {products:data.products});
  console.log("Ürünler sayfası açıldı.");
});

router.get("/urunler/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = data.products.find((product) => product.id === productId);
  if (!product) {
    res.status(404).send("Ürün bulunamadı.");
    return;
  }
  res.render("urun-detay-liste/urun-detay", { product });
});

router.get("/kapilar", (req, res) => {
  res.render("kategori1");
  console.log("Kapılar sayfası açıldı.");
});

router.get("/pencereler", (req, res) => {
  res.render("kategori2");
  console.log("Pencereler sayfası açıldı.");
});


router.get("/bacalar", (req, res) => {
  res.render("kategori3");
  console.log("Bacalar sayfası açıldı.");
}
);
module.exports = router;
