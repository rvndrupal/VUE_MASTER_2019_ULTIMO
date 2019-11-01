Vue.directive('focus', {
    // Cuando el elemento enlazado se inserta en el DOM...
    inserted: function (el) {
      // Enfoca el elemento
      el.focus()
    }
  })