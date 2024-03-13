const servicos = [
  {
    id: 1,
    nome: "Corte de cabelo",
    valor: 50,
    duracao: 30,
  },
  {
    id: 2,
    nome: "Barba",
    valor: 30,
    duracao: 20,
  },
  // ...
];

function mostrarSecao(secao) {
  const secoes = document.querySelectorAll(".secao");
  secoes.forEach((secao) => secao.classList.add("escondido"));
  document.getElementById(secao).classList.remove("escondido");
}

function validarData(data) {
  // ...
}

function validarHorario(horario) {
  // ...
}

function agendarServico() {
  const servicoId = document.getElementById("servico").value;
  const data = document.getElementById("data").value;
  const horario = document.getElementById("horario").value;

  if (!validarData(data) || !validarHorario(horario)) {
    return;
  }

  // Chamar API de agendamento

  // ...

  mostrarSecao("confirmacao");
}

// Inicialização

mostrarSecao("servicos");
