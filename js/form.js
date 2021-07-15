
//adicionar novo paciente na tabela
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault();
  var form = document.querySelector("#form-adiciona")
  // Extrair informações do paciente no form
  var paciente = obtemPacienteDoFormulario(form);
  var erros = validaPaciente(paciente);

  console.log(erros);
  if(erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  //reset no formulario
  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {
  //cria TR e TD do paciente
  var pacienteTr = montaTr(paciente);

  //adicionar paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });

}

function obtemPacienteDoFormulario(form) {

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;

}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  var nomeTd = montaTd(paciente.nome, "info-nome");
  var pesoTd = montaTd(paciente.peso, "info-peso");
  var alturaTd = montaTd(paciente.altura, "info-altura");
  var gorduraTd = montaTd(paciente.gordura, "info-gordura");
  var imcTd = montaTd(paciente.imc, "info-imc");

  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td")
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {

  var erros = [];

  if(paciente.nome.length == 0) {
    erros.push("Campo nome vazio!");
  }

  if(paciente.peso.length == 0) {
    erros.push("Campo peso vazio!");
  } else if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido!");
  }

  if(paciente.altura.length == 0) {
    erros.push("Campo altura vazio!");
  } else if(!validaAltura(paciente.altura)) {
    erros.push("Altura é inválida!");
  }

  if(paciente.gordura.length == 0) {
    erros.push("Campo gordura vazio!");
  }





  return erros;
}
