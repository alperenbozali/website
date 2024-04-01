const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs"); 

// Views dizinlerini tanımla
app.set('views', [
  path.join(__dirname, 'views'),
  path.join(__dirname, 'views', 'urun-detay-liste')
]);

// Route'ları import et
const portfoliRoutes = require("./routes/RoutePortfolio");
const mainRoutes = require("./routes/RouteMain");

app.use(portfoliRoutes);
app.use(mainRoutes);

// View engine olarak EJS'yi kullan
app.set("view engine", "ejs");

// JSON dosyasını oku
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

// Middleware - Statik dosyaları (örneğin css, js dosyaları) sunucuya açmak için kullanılır
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
});
