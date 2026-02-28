// GİRİŞ YAPMA FONKSİYONU
function giris() {
    // Modern HTML'de verdiğimiz id'leri çekiyoruz
    var email = document.getElementById("isim2").value;
    var sifre = document.getElementById("sifre2").value;

    // Boşluk kontrolü
    if (email === "" || sifre === "") {
        alert("Lütfen e-posta ve şifre alanlarını boş bırakmayın!");
        return;
    }

    // Tarayıcının hafızasından (sözde veritabanımızdan) bu maile ait şifreyi çekelim
    var kayitliSifre = localStorage.getItem(email);

    // Nostaljik "as / 12" şifreniz hala geçerli :) YA DA yeni kayıt olan kişinin şifresi eşleşiyorsa
    if ((email === "as" && sifre === "12") || (kayitliSifre && kayitliSifre === sifre)) {
        alert("Sisteme başarıyla giriş yapıldı! Ana sayfaya yönlendiriliyorsunuz...");
        
        // Sisteme kimin girdiğini hafızaya yazalım ki diğer sayfalarda "Hoş geldin" diyebilelim
        localStorage.setItem("aktifKullanici", email);
        
        // Ana sayfaya otomatik yönlendirme
        window.location.href = "index.html"; 
    } else {
        alert("Giriş başarısız! E-posta veya şifre hatalı.");
    }
}

// KAYIT OLMA FONKSİYONU
function kayit() {
    // Kayıt formundaki verileri çekiyoruz
    var email = document.getElementById("isim").value;
    var sifre = document.getElementById("sifre").value;
    var aydinlatmaOnayi = document.getElementById("aydinlatma").checked;

    // Boşluk kontrolü
    if (email === "" || sifre === "") {
        alert("Kayıt olmak için e-posta ve şifre belirlemelisiniz.");
        return;
    }

    // Yasal onay kontrolü
    if (!aydinlatmaOnayi) {
        alert("Lütfen Aydınlatma Metnini okuyup onaylayınız.");
        return;
    }

    // Tarayıcının hafızasına (Sözde Veritabanı) E-posta ve Şifreyi Kaydetme
    localStorage.setItem(email, sifre);
    
    alert("Kayıt işlemi BAŞARILI! Lütfen giriş yapınız.");
    
    // Kayıt bitince otomatik olarak giriş yapma sayfasına atalım
    window.location.href = "kullanici.html";
}
