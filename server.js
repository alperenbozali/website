const express = require('express');
const app = express();  
const path  = require('path');

app.set('view engine', 'ejs');

//Views klasörünü tanımlıyoruz.
app.set('views', path.join(__dirname, 'views'));

//Middleware - Statik dosyaları (örneğin css, js dosyaları) sunucuya açmak için kullanılır.
app.use(express.static(path.join(__dirname, 'public')));

//Ana sayfa için route
app.get('/', (req, res) => {
    res.render('index');
});

//Ürün sayfası için route
app.get('/urunler', (req, res) => {
    res.render('urunler');
});

//Ürün detay sayfası için route
app.get('/urunler/:id', (req, res) => {
    res.render('urun-detay');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor.`);
});