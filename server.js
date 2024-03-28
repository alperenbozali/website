const { log } = require('console');
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
    console.log('Ürünler sayfası açıldı.');
});

app.get('/urunler/:id', (req, res) => {
    console.log('Ürün detay sayfası açıldı.');
    console.log(req.params.id);
    res.render('urun-detay', {id: req.params.id});
});

app.get('/hakkimizda', (req, res) => {
    console.log('Hakkımızda sayfası açıldı.');
    res.render('about');
});

app.get('/iletisim', (req, res) => {
    console.log('İletisim sayfası açıldı.');
    res.render('contact');
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor.`);
});