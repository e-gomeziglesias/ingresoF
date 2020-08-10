/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	//declaro variables
	let sexo;
	let lugar;
	let temporada;
	let cantidadPersonas;
	let respuesta;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let sexoMaxCantidadPersonas;
	let cantidadPersonasMax;
	let flagPrimerIngreso = 0;
	let acumuladorPersonasInvierno = 0; 
	let contadorCantidadViajesInvierno = 0;
	//armo bucle do while para carga de cantidad indeterminada de datos
	do
	{
		//sexo titular
		sexo = prompt("Ingrese sexo del titular. 'f' o 'm'.");
		//valido sexo
		while (!(sexo == 'f' || sexo == 'm'))
		{
			sexo = prompt ("El sexo ingresado es invalido. Ingrese sexo del titular. 'f' o 'm'.");
		}
		//lugar
		lugar = prompt ("Ingrese lugar de destino. ('bariloche' - 'cataratas' - 'salta'.");
		//valido lugar(bariloche cataratas salta)
		while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta"))
		{
			lugar = prompt("El lugar de destino ingresado es invalido. Ingrese lugar de destino. ('bariloche' - 'cataratas' - 'salta'.");
		}
		//temporada
		temporada = prompt("Ingrese la temporada de su viaje ('otoño' - 'invierno' - 'primavera' - 'verano').");
		//valido temporada (otoño, invierno, primavera, verano)
		while (!(temporada == "otoño" || temporada == "invierno" || temporada == "primavera" || temporada == "verano"))
		{
			temporada = prompt("La temporada ingresada es invalida.Ingrese la temporada de su viaje ('otoño' - 'invierno' - 'primavera' - 'verano').");
		}
		//cantidad de personas que viajan
		cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas que viajan."));
		//valido cantidad de personas que viajan
		while (!(cantidadPersonas>0))
		{
			cantidadPersonas = parseInt(prompt("La cantidad de personas que viajan es invalida. Ingrese la cantidad de personas que viajan."));
		}
		//a)el lugar más elegido
		//switch (lugar) con contador de cada lugar
		switch(lugar)
		{
			case "bariloche":
				contadorBariloche++;
			break;
			case "cataratas":
				contadorCataratas++;
			break;	
			case "salta":
				contadorSalta++;
			break;		
		}
		//b)el sexo de titular que lleva más pasajeros.
		//maximo cantidad de pasajeros dentro del bucle
		if (flagPrimerIngreso == 0 || cantidadPersonas > cantidadPersonasMax)
		{
			sexoMaxCantidadPersonas = sexo;
			cantidadPersonasMax = cantidadPersonas;
			flagPrimerIngreso = 1;
		}
		//c)el promedio de personas por viaje,  que viajan en invierno
		//if temporada == invierno entonces contador personas invierno && acumulador de cantidadViajesInvierno. El promedio lo hago fuera del bucle
		if (temporada == "invierno")
		{
			acumuladorPersonasInvierno = acumuladorPersonasInvierno + cantidadPersonas;
			contadorCantidadViajesInvierno++;
		}
		//condicion de salida del bucle do while
		respuesta = prompt("Desea ingresar otro grupo de pasajeros? 's' o 'n'.");
		//valido condicion de salida del bucle do while
		while (!(respuesta == 's' || respuesta == 'n'))
		{
			respuesta = prompt("La respuesta ingresada es invalida. Desea ingresar otro grupo de pasajeros? 's' o 'n'.");
		}
	}while(respuesta == 's');
	//Muestro los resultados por consola
	//a)el lugar más elegido
	if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta)
	{
		console.log("a. El destino mas elegido es Bariloche.");
	}
	else if(contadorCataratas > contadorBariloche && contadorCataratas > contadorSalta)
	{
		console.log("a. El destino mas elegido es Cataratas.");
	}
	else if(contadorSalta > contadorBariloche && contadorSalta > contadorCataratas)
	{
		console.log("a. El destino mas elegido es Salta.");
	}
	//b)el sexo de titular que lleva más pasajeros.
	if (sexoMaxCantidadPersonas == 'f')
	{
		console.log("b. El titular que lleva mas pasajeros ("+cantidadPersonasMax+") es mujer.");
	}
	else
	{
		console.log("b. El titular que lleva mas pasajeros ("+cantidadPersonasMax+") es hombre.");
	}
	//c)el promedio de personas por viaje,  que viajan en invierno
	promedioPersonasPorViaje = acumuladorPersonasInvierno / contadorCantidadViajesInvierno;
	console.log("c. El promedio de personas por viaje que viajan en invierno es de "+promedioPersonasPorViaje+" personas.");
}
