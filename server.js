const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs"); 


//Route'ları import ediyoruz.
const portfoliRoutes = require("./routes/RoutePortfolio");
const mainRoutes = require("./routes/RouteMain");

app.set("view engine", "ejs");



//JSON dosyasını okuyoruz.
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

//Views klasörünü tanımlıyoruz.
app.set("views", path.join(__dirname, "views"));

//Middleware - Statik dosyaları (örneğin css, js dosyaları) sunucuya açmak için kullanılır.
app.use(express.static(path.join(__dirname, "public")));

//Ana sayfa için route
app.get("/", (req, res) => {
  res.render("index");
});

//Ürün sayfası için route
app.get("/urunler", (req, res) => {
  res.render("urunler");
  console.log("Ürünler sayfası açıldı.");
});

app.get("/urunler/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = data.products.find((product) => product.id === productId);
  if(!product){
    res.status(404).send("Ürün bulunamadı.");
    return;
  }
  res.render("urun-detay", { product });
});

app.get("/hakkimizda", (req, res) => {
  console.log("Hakkımızda sayfası açıldı.");
  res.render("about");
});

app.get("/iletisim", (req, res) => {
  console.log("İletisim sayfası açıldı.");
  res.render("contact");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
});
