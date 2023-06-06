let uzytkownicy = [
    {imie: "Jan", nazwisko: "Kowalski", saldo: 100000000, pin: 1234},
    {imie: "Anna", nazwisko: "Nowak", saldo: 2000, pin: 2345},
];

let zalogowanyUzytkownik = null;

function zaloguj() {
    let pin = parseInt(document.getElementById('pin').value);
    for(let i = 0; i < uzytkownicy.length; i++) {
        if(uzytkownicy[i].pin === pin) {
            zalogowanyUzytkownik = uzytkownicy[i];
            aktualizujStrone();
            return;
        }
    }
    alert("Niepoprawny PIN");
}

function wyplac() {
    let kwota = parseInt(prompt("Podaj kwotę do wypłaty:"));
    if(kwota > zalogowanyUzytkownik.saldo) {
        alert("Niewystarczające środki");
    } else {
        zalogowanyUzytkownik.saldo -= kwota;
        aktualizujStrone();
    }
}

function wplac() {
    let kwota = parseInt(prompt("Podaj kwotę do wpłaty:"));
    zalogowanyUzytkownik.saldo += kwota;
    aktualizujStrone();
}

function aktualizujStrone() {
    let bank = document.getElementById('bank');
    bank.innerHTML = "Witaj, " + zalogowanyUzytkownik.imie + " " + zalogowanyUzytkownik.nazwisko + "<br>";
    bank.innerHTML += "Twoje saldo wynosi: " + zalogowanyUzytkownik.saldo + "<br>";
    bank.innerHTML += '<button onclick="wyplac()">Wypłać gotówkę</button><br>';
    bank.innerHTML += '<button onclick="wplac()">Wpłać gotówkę</button>';
}