var listaDeNumeros = [0,1,2,3,4,5,6,7,8,9]
  
  var funcaoReducer = (acumulador, proximo) => { 
    acumulador.push(proximo)
      return acumulador
  }
  
  var resultado = listaDeNumeros.reduce(funcaoReducer, [])
  
  console.log(resultado)