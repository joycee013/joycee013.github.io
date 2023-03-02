//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=200; timeIni=200; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFFA8"; colorButton="#A8DD44"; colorText="#000000"; colorSele="#FF9D6F";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICDADES, LOGRASTE COMPLETAR CON ÉXITO ESTA ACTIVIDAD!!"; messageTime="¡OH NO! ¡RAYOS! TE HAZ QUEDADO SIN TIEMPO!"; messageError="MAL! VUELVE A RELIZARLO!"; messageErrorG="MAL! VUELVE A RELIZARLO!"; messageAttempts="SE AGOTARON LOS INTENTOS... :("; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#0984FF"; borderTime="#FF0000";borderError="#0984FF"; borderAttempts="#FF0000";
var wordsGame="Y3J1Y2lncmFtYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","","RA==","Tw==","Qw==","RQ==","Tg==","VA==","RQ==","","",""],["Qw==","Tw==","Qw==","RQ==","Tg==","Tw==","","","Vg==","RQ==","Qw==","VA==","Tw==","Ug=="],["SQ==","UA==","","","","","","","","","RQ==","Ug==","",""],["RQ==","VQ==","Tg==","SQ==","RA==","QQ==","RA==","","","","Ug==","SQ==","","Rw=="],["Tg==","RQ==","","","","","","","","","VA==","QQ==","","Rw=="],["Qw==","Uw==","","","","","","","","","RQ==","Tg==","","Uw=="],["SQ==","VA==","QQ==","Tg==","Rw==","RQ==","Tg==","VA==","RQ==","","Wg==","Rw==","",""],["QQ==","Tw==","","","","","","","","","QQ==","VQ==","","TQ=="],["","","Rw==","Ug==","QQ==","TQ==","Tw==","","","","","TA==","","RQ=="],["TQ==","QQ==","Rw==","Tg==","SQ==","VA==","VQ==","RA==","","","","Tw==","","VA=="],["","","","","","","","","","","","","","Ug=="],["Qw==","Tw==","Tg==","Vg==","RQ==","Ug==","Uw==","SQ==","Tw==","Tg==","RQ==","Uw==","","Tw=="]];
var x1=[2,12,9,11,11,11,11,11,11,3,1,3,4,5,6,7,1,1,1,1,1,1,1,5,1,1,5,6,9,10,11,14,14];
var y1=[2,2,2,3,4,5,6,7,8,9,2,9,9,9,9,9,3,4,5,6,7,8,10,1,2,12,1,1,1,1,1,4,8];
var x2=[2,12,14,12,12,12,12,12,12,7,1,3,4,5,6,7,2,7,2,2,9,2,8,11,6,12,5,6,9,10,11,14,14];
var y2=[8,10,2,3,4,5,6,7,8,9,8,10,10,10,10,10,3,4,5,6,7,8,10,1,2,12,2,2,2,2,8,6,12];
var imaCW=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var audioCW=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var defCW=["Son aquellos que están opuestos entre sí donde se cruzan dos líneas rectas.","Figura geométrica de tres lados y tres ángulos.","Segmento de recta cuya longitud representa a escala una magnitud, en una dirección determinada y en uno de sus sentidos.","","","","","","","Medida de masa de simboloo \"g\"  que es igual a la milésima parte de un kilogramo.","Es un conjunto de conocimientos que estudian, explican y predicen los fenómenos sociales, artificiales y naturales.​","","","","","","","Cualquier valor de una cantidad física que pueda erxpresarse como un múltiplo. ","","","Es la razón entre el cateto opuesto al ángulo y el cateto antiguo al ángulo","","Es toda propiedad de los cuerpos que se puede medir","Persona que implante la materia de fisíca","Es la razón entre el cateto al ángulo y la hipotenusa","Es la traformación de valor númerico de una magnitud física","","","","","Es la fundamentada en el conocimiento de las leyes naturales, que deben cumplirse necesariamente.","Centimetro, grado y segundo en ingles","Unidad de longitud del Sistema Internacional, de símbolo m, que equivale a la longitud del trayecto recorrido por la luz en el vacío durante 1/299 792 458 de segundo"];
var altCW=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var colNum=14;
var rowNum=12;
