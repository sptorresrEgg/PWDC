let personas = [
    {
      nombre: "Juan",
      edad: 21,
      ciudad: "Buenos Aires",
    },
    {
      nombre: "Maury",
      edad: 25,
      ciudad: "Tierra del Fuego",
    },
    {
      nombre: "Michael",
      edad: 45,
      ciudad: "Buenos Aires",
    },
  ];
  
  /*function crearMensajes(personas) {
    return personas.map(({ nombre, edad, ciudad }) => {
      return `Mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}`;
    });
  }*/
  
  function crearMensajesDePresentacion(personas) {
    let mensajes = [];
  
    personas.forEach((persona) => {
      let mensaje =
        "Mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad;
  
      mensajes.push(mensaje);
    });
    return mensajes;
  }
  
  const resultadoSinMap = crearMensajesDePresentacion(personas);
  
  for (let i = 0; i < resultadoSinMap.length; i++) {
      console.log(resultadoSinMap[i]);
    }
  /*const resultadoConMap = crearMensajes(personas);
  
  
  for (let i = 0; i < resultadoConMap.length; i++) {
      console.log(resultadoConMap[i]);
    }*/