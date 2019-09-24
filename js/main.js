var imie = prompt("Podaj imię");
var nazwisko = prompt("Podaj nazwisko");
var mail = prompt("Podaj mail");

if(imie){
    document.getElementById("name").value = imie;
}else{
    document.getElementById("name").value = "Bład";
}
if(nazwisko){
    document.getElementById("surname").value = nazwisko;
}else{
    document.getElementById("surname").value = "Bład";
}
if(mail){
    document.getElementById("email").value = mail;
}else{
    document.getElementById("email").value = "Bład";
}




