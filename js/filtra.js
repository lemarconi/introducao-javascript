
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () { //evento de digitar
  //console.log(this.value);

  var pacientes = document.querySelectorAll(".paciente");

  if(this.value.length > 0) {
    console.log("tem algo digitado...");

    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressao = new RegExp(this.value, "i"); //expressão regular

      if(!expressao.test(nome)) { //se não tiver a expressão
        paciente.classList.add("invisivel");
      }
      else {
        paciente.classList.remove("invisivel");
      }
//      console.log(this.value);
    }
  } else {
      for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        paciente.classList.remove("invisivel");
      }
  }
})
