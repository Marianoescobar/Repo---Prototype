// Declaro la funcion constructora del objeto Animal
function Animal (color, altura, largo){
    this.color=color;
    this.altura= altura;
    this.largo= largo;
} 

// Declaro la funcion constructora del objeto Gato
function Gato (Raza, años,vacunas){
    this.raza=Raza;
    this.años= años;
    this.vacunas=vacunas;
}  

// Al objeto Gato a traves del metodo PROTOTYPE le agrego un nuevo metodo (funcion anonima)
Gato.prototype.showInfo= function () {
    return `Raza: ${ this.raza},edad: ${this.años} ,Vacunas: ${this.vacunas}`;
}
// Instacio  un objeto Gato
const Gato1 = new Gato( "Mestizo" ,4, "todas");
// Al objeto creado le agrego a traves del metodo PROTOTIPE una instancia del objeto Animal 
Gato1.prototype= new Animal( "Blanco", "3kg", "40cm");
const Animal1= new Animal("Marron", 18 , "25cm")
console.log(Animal1);
console.log(Gato1);
console.log(Gato1.showInfo());
