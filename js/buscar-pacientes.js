
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  console.log("buscando pacientes...");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //escutando a resposta

  xhr.addEventListener("load", function() { //requisição de forma assincrona

  var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText; //jason javascript object notation

      var pacientes = JSON.parse(resposta); //fazer o parse da resposta

      pacientes.forEach( function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel");
    }

  });
  xhr.send();

});
