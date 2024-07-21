var hoy = new Date();
var ayer = new Date(hoy.getTime() - 24*60*60*1000);
var dd = hoy.getDate();
var mm = hoy.getMonth()+1; //hoy es 0!
var yyyy = hoy.getFullYear();
var dda = ayer.getDate(); //Ayer
var mma = ayer.getMonth()+1; //Mes para ayer
var yyyya = ayer.getFullYear();


//Añadir 0 hoy
if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

//Añadir 0 ayer
if(dda<10) {
    dda='0'+dda
} 

if(mma<10) {
    mma='0'+mma
} 


hoy = yyyy+'-'+mm+'-'+dd;
ayer = yyyya+'-'+mma+'-'+dda;

//document.write(hoy);

