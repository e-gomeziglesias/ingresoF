/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  //declaro variables
  let marca;
  let precio;
  let peso;
  let tipo;
  let pesoTotal = 0; //inicializo para poder acumular
  let respuesta;
  let flagPrimerLiquido = 0;
  let precioLiquidoCaro;
  let marcaLiquidoCaro;
  let flagPrimerSolido = 0;
  let precioSolidoBarato;
  let marcaSolidoBarato;
  //armo bucle do while para ingreso de cantidad indeterminada de datos
  do
  {
    //marca
    marca = prompt ("Ingrese marca.");
    //precio
    precio = parseFloat(prompt("Ingrese precio."));
    //valido precio
    while (!(precio > 0 ))
    {
      precio = parseFloat(prompt("El precio ingresado es invalido. Ingrese un precio valido."));
    }
    //peso
    peso = parseFloat(prompt("Ingrese peso en kg."));
    //valido peso en kg
    while (!(peso > 0))
    {
      peso = parseFloat(prompt("El peso ingresado es invalido. Ingrese el peso en kg."));
    }
    //tipo
    tipo = prompt("Ingrese tipo de producto. 'solido' o 'liquido'.");
    //valido tipo (solido o liquido)
    while (!(tipo == 'solido' || tipo == 'liquido'))
    {
      tipo = prompt("El tipo de producto ingresado es invalido. Ingrese tipo de producto. 'solido' o 'liquido'.");
    }
    //a)informar el peso total de la compra.
    pesoTotal = pesoTotal + peso;
    switch(tipo)
    {
      case "liquido":
        //b)la marca del más caro de los líquidos
        if (flagPrimerLiquido == 0 || precio > precioLiquidoCaro)
        {
          flagPrimerLiquido = 1;
          precioLiquidoCaro = precio;
          marcaLiquidoCaro = marca;
        }
      break;
      case "solido":
        //c)la marca del más barato de los sólidos
        if (flagPrimerSolido == 0 || precio < precioSolidoBarato)
        {
          precioSolidoBarato = precio;
          flagPrimerSolido = 1;
          marcaSolidoBarato = marca;
        }
      break;
    }
    
    //condicion de salida bloque do while
    respuesta = prompt("Desea ingresar otro producto? 's' o 'n'.");
    //valido condicion de salida 
    while (!(respuesta == 's' || respuesta == 'n'))
    {
      respuesta = prompt("La respuesta ingresada es invalida. Desea ingresar otro producto? Ingrese 's' o 'n'.");
    }
  }while (respuesta == 's');
  
  //muestro por consola los resultados
  //a)informar el peso total de la compra.
  console.log("a. El peso total de la compra es "+pesoTotal+"kg.");
  //b)la marca del más caro de los líquidos
  if (flagPrimerLiquido != 0)
  {
    console.log("b. El liquido mas caro cuesta $"+precioLiquidoCaro+" y es de la marca "+marcaLiquidoCaro);
  }
  else
  {
    console.log("b. No se ingresaron liquidos.");
  }
  //c)la marca del más barato de los sólidos
  if (flagPrimerSolido != 0)
  {
    console.log("c. El solido mas barato cuesta $"+precioSolidoBarato+" y es de la marca "+marcaSolidoBarato);
  }
  else
  {
    console.log("c. No se ingresaron solidos.");
  }
}
