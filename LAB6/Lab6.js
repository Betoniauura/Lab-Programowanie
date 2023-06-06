// class Dog { 
//     constructor(name, race, weight, age){
//         this.name = name;
//         this.race = race;
//         this.weight = weight;
//         this.age = age;
//     }
//     wypisz() {
//         console.log("Imie to: " + this.name);
//         console.log("Rasa to: " + this.race);
//         console.log("Waga to: " + this.weight);
//         console.log("Wiek to: " + this.age);
//     }


// }
// const azor = new Dog("Azor","Owczarek",5,9);
// azor.wypisz();
//############################################################ZAD1

// class Prostokat{
//     constructor(x,y,nazwa) {
//         this.dlugosc = x;
//         this.szerokosc = y;
//         this.nazwa = nazwa;

//     }

//     Obwod() {
//         return (this.dlugosc+this.szerokosc)*2
//     }

//     Pole() {
//         return (this.dlugosc*this.szerokosc)
//     }

//     Porównaj(innyProstokat) {
//         if(this.Pole() > innyProstokat.Pole()){
//             return this.nazwa
//         }else if(this.Pole() < innyProstokat.Pole()){
//             return innyProstokat.nazwa
//         }else{
//             return"Prostokąty są równe ;("

//         }
        
//     }
// }


// const p1 = new Prostokat(2,4,"Prostoką 1")
// const p2 = new Prostokat(3,4,"Prostoką 2")
// const p3 = new Prostokat(4,4,"Prostoką 3")
// console.log(p1.nazwa);
// console.log(p2.dlugosc);
// console.log(p1.Obwod());
// console.log(p2.Porównaj(p1));


//############################################################ZAD2



// class Trojkat{
//     constructor(x,y,nazwa) {
//         this.dlugoscpd = x;
//         this.wysokosc = y;
//         this.nazwa = nazwa;

//     }

//     Pole() {
//         return (this.dlugoscpd*this.wysokosc)/2
//     }

//     Porównaj(innyTrojkat) {
//         if(this.Pole() > innyTrojkat.Pole()){
//             return this.nazwa
//         }else if(this.Pole() < innyTrojkat.Pole()){
//             return innyTrojkat.nazwa
//         }else{
//             return"Trojkaty są rowne ;("

//         }
        
//     }
// }

// const t1 = new Trojkat(2,4,"Trojkat 1")
// const t2 = new Trojkat(3,4,"Trojkat 2")
// const t3 = new Trojkat(4,4,"Trojkat 3")
// console.log(t1.nazwa);
// console.log(t2.Pole());
// console.log(t2.Porównaj(t2));



//############################################################ZAD3




// class Trapez{
//     constructor(x,y,z,nazwa) {
//         this.podstawa1 = x;
//         this.podstawa2 = y;
//         this.wysokosc = z;
//         this.nazwa = nazwa;
//     }

//     Pole() {
//         return ((this.podstawa1+this.podstawa2)*this.wysokosc)/2
//     }

// }

// const trapez1 = new Trapez(2,4,4,"Prostoką 1")
// const trapez2 = new Trapez(3,4,4,"Prostoką 2")
// const trapez3 = new Trapez(4,4,4,"Prostoką 3")
// console.log(trapez1.Pole());




//############################################################ZAD4


function PorownajFigury(f1,f2){
    if(f1.Pole() > )









}