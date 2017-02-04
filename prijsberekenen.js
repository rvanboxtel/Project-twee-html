function berekenSubTotaal(a ,b, c){
    var prijs = parseFloat(a.textContent);
    var aantal = parseInt(b.value);
    var totaalprijs = prijs * aantal;
    c.textContent = totaalprijs.toFixed(2);

}

var innoprice = document.getElementById("prijs_inno");
var innoaantal = document.getElementById("aantal_inno");
var innototaal = document.getElementById("totaal_inno");

innoaantal.addEventListener("change", function(){
    berekenSubTotaal(innoprice, innoaantal, innototaal);
});

var foranprice = document.getElementById("prijs_foran");
var foranaantal = document.getElementById("aantal_foran");
var forantotaal = document.getElementById("totaal_foran");

foranaantal.addEventListener("change", function(){
    berekenSubTotaal(foranprice, foranaantal, forantotaal);
});

var kjerneprice = document.getElementById("prijs_kjerne");
var kjerneaantal = document.getElementById("aantal_kjerne");
var kjernetotaal = document.getElementById("totaal_kjerne");

kjerneaantal.addEventListener("change", function(){
    berekenSubTotaal(kjerneprice, kjerneaantal, kjernetotaal);
});

berekentotaalbtn.addEventListener("click", function(){
    var finalBerekening = parseFloat(innototaal.textContent) + parseFloat(forantotaal.textContent) + parseFloat(kjernetotaal.textContent);
    var totaalaantal = parseInt(innoaantal.value) + parseInt(foranaantal.value) + parseInt(kjerneaantal.value);
    console.log(totaalaantal);
    var veilig = 0;
    if (document.getElementById("veiligheid").checked) {
        veilig = 122.25 * totaalaantal;
    }
    var spoed = 0;
    if (document.getElementById("spoed").checked){
        spoed = 25;
    }
    framekeuze = document.querySelector('[name=r_method]:checked').value || '';
    var kostFrame = 0;
    switch (framekeuze) {
        case 'Eenvoudig' :
            kostFrame = 12.50;
            break;
        case 'Elegant' :
            kostFrame = 14.95;
            break;
        case 'Sjiek' :
            kostFrame = 19.95;
            break;
        case 'Trump' :
            kostFrame = 21.95;
            break;
    }
    document.getElementById("totaalprijsshow").textContent = (finalBerekening + veilig + spoed + kostFrame).toFixed(2);
});
