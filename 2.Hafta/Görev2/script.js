function MetinDoldur(girilenMetin, gorunecegiYer) {
    let metin = document.getElementById(girilenMetin);
    document.getElementById(gorunecegiYer).textContent = metin.value;
}

function OkulSayisiSec() {
    let okulSayisi = document.getElementById('okulSayisi').value;
    for (var i = 1; i <= 3; i++) {
        document.getElementById('okulSayisi' + i).hidden = true;
        document.getElementById('cvOkulLi' + i).hidden = true;
    }
    for (var i = 1; i <= okulSayisi; i++) {
        document.getElementById('okulSayisi' + i).hidden = false;
        document.getElementById('cvOkulLi' + i).hidden = false;
    }
}

function YetenekSayisiSec() {
    let yetenekSayisi = document.getElementById('yetenekSayisi').value;
    for (var i = 1; i <= 3; i++) {
        document.getElementById('yetenekSayisi' + i).hidden = true;
        document.getElementById('cvYetenekLi' + i).hidden = true;
    }
    for (var i = 1; i <= yetenekSayisi; i++) {
        document.getElementById('yetenekSayisi' + i).hidden = false;
        document.getElementById('cvYetenekLi' + i).hidden = false;
    }
}

function RenkDegistir(renk, degisecegiYer) {
    document.getElementById(degisecegiYer).style.backgroundColor = document.getElementById(renk).value;
}

function YaziRengiDegistir() {
    let renk = document.getElementById('isimKutusuYaziRenk').value;
    document.getElementById('isimKutusuIsim').style.color = renk;
    document.getElementById('cizgi').style.borderBottomColor = renk;
    document.getElementById('isimKutusuUnvan').style.color = renk;
}
function FontDegistir() {
    let secim = document.getElementById('yaziTipi').value;
    let font;
    if (secim == 1) {
        font = 'Times New Roman';
    }
    else if (secim == 2) {
        font = 'Courier New';
    }
    else if (secim == 3) {
        font = 'Lucida Console';
    }
    document.getElementById('cv').style.fontFamily = font;
}

function CerceveDegistir() {
    document.getElementById('fotograf').style.borderRadius = document.getElementById('fotoSekil').value;
}

function CizgiRengiDegistir() {
    let renk = document.getElementById('cizgiRenk').value;
    document.getElementById('iletisimBaslik').style.borderBottomColor = renk;
    document.getElementById('egitimBaslik').style.borderBottomColor = renk;
    document.getElementById('yetenekBaslik').style.borderBottomColor = renk;
    document.getElementById('hakkimdaBaslik').style.borderBottomColor = renk;
    document.getElementById('deneyimBaslik').style.borderBottomColor = renk;
}

function CizgiSekliDegistir(){
    let cizgiSekli = document.getElementById('cizgiSekil').value;
    document.getElementById('iletisimBaslik').style.borderBottomStyle = cizgiSekli;
    document.getElementById('egitimBaslik').style.borderBottomStyle = cizgiSekli;
    document.getElementById('yetenekBaslik').style.borderBottomStyle = cizgiSekli;
    document.getElementById('hakkimdaBaslik').style.borderBottomStyle = cizgiSekli;
    document.getElementById('deneyimBaslik').style.borderBottomStyle = cizgiSekli;
}