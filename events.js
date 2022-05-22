//Events (Olaylar):Bir olay gerçekleştirildiği zaman ne yapacağımız Javascript yapısının yönünü belirler.
//Function Object (Fonksiyon/Metot nesnesi);
var sayac = 0;

//Lambda ifadesi ile yazım(Önerilen.)
var button_click = () => { 
    sayac++;
    console.log('Lambda Tıklandı\nSayac:' , sayac);
}

//function ifadesi ile yazım:
var button_click = function () { console.log('Function Tıklandı');}

//İsimlenrirerek yazım:Bazı altyapılarda kabul görmemektedir.
function button_click() { console.log('Tıklandı');}

var red = () => {
    let ps = document.getElementsByTagName('p')
    for(const p of ps) {
        //classList: Belirlenmiş elementin tüm sınıflarını tutar. Ekleme veya çıkarma yapılabilir.
        p.classList.add('text-danger')
    };
}