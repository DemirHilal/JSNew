//script sayfasının en üstüne yazılırsa global olarak tanımlanır.
// var yazıldığı parantezin içerisinde heryerde aynı olandır.Global dışarıy abilgi verir.
//let: Sadece yazıldığı parantez içerisinde tanımlanan değişken türüdür.Lokal dışarıya bilgi vermez.
//const: Sabit değer yapısıdır.
const sabit = 5
var variable = 15
degisken = 'ilker'
degisken = "ilker'in yeri"
degisken = 15.654
degisken = true
//Degisken son atadığın değeri tutar.(true)
//console.log(degisken)
console.log(degisken)
for (var i = 0; i < 3; i++) {
    let degisken = "ilker turan"
    console.log(degisken, i)
    var son = "en son" + i
}
console.log(i) // Burada kullanılabilmesi için var ile tanımlanır.
console.log(degisken)
console.log(son)
//İlkel veri tipleri : strings, numbers, booleans.
var metin1 ="ilker'in yeri"
var metin2 = 'ilker "yolunda gerek"turan'
var metin3 = `Metin1: ${metin1}, Metin2: ${metin2}`
console.log(metin1)
console.log(metin2)
console.log(metin3)
var sayi1 = 15
var sayi2 = 15.456
var sayi3 = sayi1/sayi2
console.log(sayi1,sayi2,sayi3)
var bool1 = true
var bool2 = false
var atanmamis = undefined // false
var sifir = 0 //false
var yok = null // false
var bos = "" // false
console.log(atanmamis ? "atanmıs" : "atanmamış")
console.log(sifir ? "Sıfır değil" : "sıfır")
console.log(yok ? "var" : "yok")
console.log(bos ? "dolu" : "boş")
var ay1 = "haziran"
var ay2 = "06"
var ay3 = 6
console.log(ay1,isNaN(ay1))
console.log(ay2,isNaN(ay2))
console.log(ay3,isNaN(ay3))
var s1 = "05 15"
var s2 = "ilker 15"
var s3 = "06 ankara"
var s4 = " 58 sivas"
var s5 = 15.756
var s6 = "15,756"
var s7 = 15.756
console.log(parseFloat(s1))
console.log(parseFloat(s2))
console.log(parseFloat(s3))
console.log(parseFloat(s4))
console.log(parseInt(s5))
console.log(parseFloat(s6)) // virgül özel karakterdir , string olarak görür.
console.log(parseFloat(s7))

//Gelişmiş Veri Tipleri :
var bos_nesne ={ } //JSON(Javascript Object Notation)
var nesne = {
    Marka: 'Arçelik',
    Model: 'NoFrost',
    Fiyat: 25000,
    Versiyon: 1.1,
    Taksit: false,
    Lokasyon: {
        Sokak: '19.',
        Mahalle: 'Acıbadem',
        Ilce: 'Besiktas',
        Il: 'Istanbul'
    },
    Odeme: ['KK', 'Pesin', 'Senet']
}

//Arrays:Bu koleksiyon yapılarında boyut sabit değildir. Ekleme ve çıkarma yoluyla boyut değişebilir.
var bos_arr = []
var arr = [1, 3, 4.5, true,'ilker','armut']

var kimlikler = [
    {isim: 'ilker', soyisim: 'turan' },
    {isim: 'hilal', soyisim: 'turan' },
    {isim: 'emre', soyisim: 'turan' }
]
var fiyatlar = [
    {fiyat1: 55, fiyat2: 65, fiyat3:78}
]
console.log(nesne)
console.log(arr)
console.log(kimlikler)
console.log(fiyatlar)