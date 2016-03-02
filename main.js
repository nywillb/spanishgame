var cards = [
	"anoche",
	"anteayer",
	"el año pasado",
	"ayer",
	"el mes pasado",
	"la semana pasada",
	"terminada",
	"El/(la) extranjero(a)",
	"El huésped",
	"La huéspeda",
	"Los huéspedes",
	"El maletero",
	"El/la recepcionista",
	"La pensión",
	"El parador",
	"La recepción",
	"La llave",
	"La planta baja",
	"El segundo piso",
	"El ascensor",
	"Las escaleras",
	"La habitación",
	"El baño/los servicios",
	"El baño privado",
	"un vestido",
	"un pantalón",
	"una camisa con rayas",
	"un traje de caballero/de dama",
	"un chaleco",
	"un pañuelo",
	"un par de zapatos de tacón",
	"una talla pequeño",
	"una chaqueta apretada",
	"pantalones estrechos",
	"pantalones anchos",
	"una falda sencilla",
	"un abrigo de color oscuro",
	"el número correcto de zapatos",
	"una persona elegante",
	"arreglarse",
	"escoger",
	"vestirse",
	"usar la talla…",
	"hacer juego con…",
	"le queda grande…",
	"la tienda está abierta",
	"la tienda está cerrada",
	"la clienta",
	"la dependienta",
	"la dependienta está de mal humor",
	"la clienta está de buen humor",
	"el cajero automático",
	"los cheques de viajero",
	"el cajero",
	"la caja registradora",
	"los cheques",
	"la cuenta corriente",
	"la cuenta de ahorros",
	"el préstamo",
	"los gastos",
	"los billetes",
	"las tarjetas",
	"el puente",
	"Los peatones",
	"el conductor",
	"la acera",
	"los semáforos",
	"El estacionamiento",
	"La parada",
	"El buzon",
	"La juguetería",
	"La taquilla",
	"tintorería",
	"heladería",
	"el quiosco",
	"ser buena onda",
];

var cardnum = Math.floor(Math.random() * cards.length -1);

var score = 0

function startgame(){
    score = 0
}

function newcard(){
	cardnum = Math.floor(Math.random() * cards.length);
	document.getElementById("card").innerHTML = cards[cardnum];
	//cards.splice(index, cardnum);
}

window.onkeypress = function(event) {
    if(event.keyCode != 83){
        newcard();
    } else if(event.keyCode === 83) {
        document.getElementById("card").innerHTML = '<i class="fa fa-frown-o"></i>Pasar...'
    }
};
