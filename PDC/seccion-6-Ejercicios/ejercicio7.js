function subir(button) {
    let myli = button.parentNode;/*padre del nodo actual, en este caso el padre es li */
    let prevLi = myli.previousElementSibling; /*me trae el anterior nodo */
    if (prevLi) {
      myli.parentNode.insertBefore(myli, prevLi);
    }else {
        alert("No se puede subir");
    }
  }
  
  function bajar(button) {
    let myli = button.parentNode; 
    let nextLi = myli.nextElementSibling;/*me trael el siguiente nodo */
    if (nextLi) {
      myli.parentNode.insertBefore(nextLi, myli);
    }else {
        alert("No se puede bajar");
    }
  }