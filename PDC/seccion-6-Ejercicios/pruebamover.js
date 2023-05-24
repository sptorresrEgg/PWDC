function subir(button) {
    var li = button.parentNode;
    var prevLi = li.previousElementSibling;
    if (prevLi) {
      li.parentNode.insertBefore(li, prevLi);
    }
  }
  
  function bajar(button) {
    var li = button.parentNode;
    var nextLi = li.nextElementSibling;
    if (nextLi) {
      li.parentNode.insertBefore(nextLi, li);
    }
  }