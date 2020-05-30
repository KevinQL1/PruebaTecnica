const nombre = document.getElementById('Valor').value
const nombre = document.getElementById('TRM').value

form.addEventListener('sumbit', e => {
  e.preventDefault()
  let warnings = ""
  let num = /^[0-9]+$/
  parrafo.innerHTML = ""
  if (inputtxt.value.match(num)) {
    warnings += 'Tu numero ha sido guardado correctamente<br>'
    document.Formulario.Valor.focus();
    entrar = true;
  }
  else {
    warnings += 'Solo se permite numeros<br>'
    document.Formulario.Valor.focus();
    entrar = false;
  }
  if (entrar) {
    parrafo.innerHTML = warnings
  }
})




