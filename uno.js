/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	//declaro variables
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadorPersonas; //inicializado en for
	let contadorMujeres = 0;
	let flagPrimerHombrePesado = 0;
	let nombreHombrePesado;
	let pesoHombrePesado;
	let edadAcumulada = 0; //inicializo para poder acumular
	let promedioEdad;

	//bucle  de ingreso de 5 datos
	for (contadorPersonas=1; contadorPersonas <= 5 ; contadorPersonas++)
	{
		//cargo nombre
		nombre = prompt("Ingrese nombre.");
		//cargo peso
		peso = parseInt(prompt("Ingrese peso."));
		//valido peso
		while (!(peso > 0))
		{
			peso = parseInt(prompt("El peso ingresado es invalido. Ingrese un peso valido"));
		}
		//cargo sexo
		sexo = prompt("Ingrese sexo. 'f' o 'm'.");
		//valido sexo
		while (!(sexo == 'f' || sexo == 'm'))
		{
			sexo = prompt ("El sexo ingresado es invalido. Ingrese 'f' o 'm'.");
		}
		//cargo edad
		edad = parseInt(prompt("Ingrese edad."));
		//valido edad
		while(!(edad > 0))
		{
			edad = parseInt(prompt("La edad ingresada es invalida. Ingrese una edad valida."));
		}
		//b)la edad promedio en total. hago un acumulador de edades y un contador de datos ingresados dentro del bucle. el promedio lo calculo fuera del bucle
		edadAcumulada = edadAcumulada + edad;
		switch (sexo)
		{
			case 'f': //a)informar la cantidad de mujeres. contador si mujeres dentro del bucle
				contadorMujeres++;
			break;
			case 'm':
				//c)el hombre mas pesado. //bloque de maximo dentro del bucle
				if (flagPrimerHombrePesado == 0 || peso > pesoHombrePesado) //asumo que habra un solo hombre de peso maximo
				{
					pesoHombrePesado = peso;
					nombreHombrePesado = nombre;
					flagPrimerHombrePesado = 1;
				}
			break;
		}
	}
	
	//a)informar la cantidad de mujeres.
	console.log("a. La cantidad de mujeres ingresadas es "+contadorMujeres);
	//b)la edad promedio en total.
	promedioEdad = edadAcumulada / contadorPersonas;
	console.log("b. La edad promedio de las personas ingresadas es "+promedioEdad);
	//c)el hombre mas pesado.
	console.log("c. El hombre mas pesado es "+nombreHombrePesado+" y pesa "+pesoHombrePesado+"kg.");
}
