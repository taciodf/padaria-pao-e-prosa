window.addEventListener("scroll", () => {
  const botao = document.getElementById("topo");
  botao.style.display = window.scrollY > 300 ? "block" : "none";
});

document.getElementById("topo").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const status = document.getElementById("status");

  if (nome === "" || email === "" || mensagem === "") {
    status.innerText = "Por favor, preencha todos os campos.";
    status.style.color = "red";
    return;
  }

  status.innerText = "Mensagem enviada com sucesso!";
  status.style.color = "green";

  this.reset();
});
