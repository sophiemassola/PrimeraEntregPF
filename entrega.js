console.log('Primera entrega del Proyecto Final');


// Declaración de Clases ↓↓
class Sales {
    constructor(seller, day, income) {
        this.seller = seller;
        this.day = day;
        this.income = income;
    }
}

class Alert{
    constructor(seller,comission){
        this.seller = seller;
        this.comission = comission;

        this.mostrar = function(){
            alert(`Al vendedor/a ${this.seller} le corresponde una comisión de ${comission}`)
        }
    }
}



// Declaración de Arrays ↓↓
const vendedores = [];
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const final = [];
const ingresos =[];
const alerta =[];

//Declaración de funciones ↓↓
const promedioDiario = (a) => a*0.2;


//-------------------------------------------------------


//Inicio interacción con usuario↓↓
let cantidad = parseInt(prompt('Ingrese la cantidad de vendedores:')); 
if (isNaN(cantidad)){
    alert('El valor ingresado es incorrecto.')
}


//Ciclo for para definir los vendedores ↓↓
for (let i = 0; i < cantidad; i++){
    let nombres = prompt(`Ingrese el nombre del vendedor ${i+1}:`).toUpperCase();
    vendedores.push(nombres);
}



//Ciclo for para asignar el Array final que usa la clase Sales ↓↓
for (const x of vendedores){
    let ingresosXvend = 0;
    let comision = 0;
    for (const y of dias){
        let income = parseInt(prompt(`Ingrese las ventas del vendedor ${x} del día ${y}:`));
        final.push(new Sales(x,y,income)); //acá estoy haciendo un array de objetos de tipo Sales
        ingresosXvend = ingresosXvend + income;
    }
    ingresos.push(ingresosXvend);
    comision = promedioDiario(ingresosXvend);
    alerta.push(new Alert(x,comision));
}


for (const x of alerta){
    x.mostrar();
}



 



