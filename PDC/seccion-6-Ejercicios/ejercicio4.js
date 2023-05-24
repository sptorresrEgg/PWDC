const invertirCadena = (cadena) => {
    let arrayCadena = cadena.split(" ");
    let arrayInvertido = [];
    
    arrayCadena.forEach((palabra) => {
      arrayInvertido.push(palabra.split("").reverse().join(""));
    });  
    return arrayInvertido.join(" ");
  }
  console.log(invertirCadena("hola mundo cruel"));
  
  
  invertirCadena("hola mundo");
