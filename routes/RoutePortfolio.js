const express = require("express");
const router = express.Router();

router.get("/urunler", (req, res) => {
  res.render("urunler");
  console.log("Ürünler sayfası açıldı.");
});

router.get("/urunler/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = data.products.find((product) => product.id === productId);
  if (!product) {
    res.status(404).send("Ürün bulunamadı.");
    return;
  }
  res.render("urun-detay", { product });
});



module.exports = router;
