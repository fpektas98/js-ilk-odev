
let x = document.querySelector("#name")
x.innerHTML = prompt("Lütfen İsminizi Giriniz:")


function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR');

    document.getElementById("myClock").innerHTML = date;
}

setInterval(tarihSaat, 1000); 