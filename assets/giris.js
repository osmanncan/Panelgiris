let primead = 'Nihat';
let primesifre = 1903;


  let ad = prompt('Kullanici adinizi girin: ');
  let sifre = Number(prompt('Şifrenizi girin: '));

if (ad === primead && sifre === primesifre) {
    alert('Giris basarili');
} 
else {
     cevap = prompt('Kullanici adi veya sifre hatali. tekrar denemek istermisiniz? (E/H) ');

if ( cevap == 'E' || cevap == 'e') {
    ad = prompt('Kullanici adinizi girin: ');
   sifre = Number(prompt('Şifrenizi girin: ')); 
    
if (ad === primead && sifre === primesifre) {
    alert('Giris basarili'); 
} else {
    alert('Giris basarisiz.');
}
}
else if ( cevap == 'H' || cevap == 'h') {
    alert('cikis yapiliyor.');
}
}
