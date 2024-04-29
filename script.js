var kelime = "";
var kelimeArray;
var control = false;
var bulunmuskelime = 0;
var oyun = "devam";
var selected = [];
var hak = 5;

function Start() {
    var kelimeler = [
        {id:0,kelime:"python"},
        {id:1,kelime:"elma"},
        {id:2,kelime:"kaşık"},
        {id:3,kelime:"javascript"},
        {id:4,kelime:"react"},
    ]

    var random = parseInt(Math.random() * 5);

    kelimeler.map(item => {
        if(item.id == random){
            kelime = item.kelime
        }
    })

    // to string diziyi stringe çevirme
    // split stringi diziye çevirme

    kelimeArray = kelime.split("");

    kelimeArray.map((harf,index) => {
        if(harf != " "){
            document.querySelector(".kelime").insertAdjacentHTML("afterbegin",`<p class='kelime_cizgi ${index}'>_</p>`);
        }
        else{
            document.querySelector(".kelime").insertAdjacentHTML("afterbegin",`<p class='kelime_cizgi ${index}'> </p>`);
        }
    });

    document.querySelector(".kelime").insertAdjacentHTML("beforeend",`<p class="hak">${hak} Hakkınız Kaldı</p>`)
}

function HarfYazdır(harf) {
    kelimeArray = kelime.split("");
    var girilmis = false;

    for (let i = 0; i < selected.length; i++) {
        if(harf == selected[i]){
            girilmis = true
        }
    }

    if(girilmis == false){
        if(oyun == "devam"){
            if(control == false){
                alert("Yanlış Tahmin");
                selected.push(harf)
                hak = hak - 1

                if(hak == 0){
                    document.querySelector(".hak").innerText = `Hiç Hakkınız Kalmadı`
                    oyun = "bitti"
                }
                else{
                    document.querySelector(".hak").innerText = `${hak} Hakkınız Kaldı`
                }
            }
            else if(control == true){
                for(let i = 0; i < kelimeArray.length; i++){
                    if(kelimeArray[i] == harf){
                        document.querySelector(`.kelime`).children[i].innerText = ""
                        document.querySelector(`.kelime`).children[i].insertAdjacentText("afterbegin",harf);
                        bulunmuskelime = bulunmuskelime + 1;
                        selected.push(harf)
    
                        if(bulunmuskelime == kelimeArray.length){
                            alert("Tebrikler Gizlenmiş Kelimeyi Bildiniz")
                        }
                        control = false
                    }
                }
            }
        }
        else{
            alert("Hakkınız Kalmadı, Kaybettiniz...")
        }
    }
    else{
        alert("Bu Kelimeyi Zaten Denediniz")
        girilmis = false
    }
}

function harf_al(event){
    kelimeArray = kelime.split("");
    var kullanıcı_harf = event.key;

    kelimeArray.map(harf => {
        if(kullanıcı_harf == harf){
            control = true;
        }
    })

    HarfYazdır(kullanıcı_harf);
}