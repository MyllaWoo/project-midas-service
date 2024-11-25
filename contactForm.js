document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os dados do formulário
    const formData = new FormData(this);

    // Fazer o envio via Fetch API
    fetch("https://exemplo.com/enviar-contato", { 
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("contactResponse").innerText = data.message || "Mensagem enviada com sucesso!";
    })
    .catch(error => {
        document.getElementById("contactResponse").innerText = "Erro ao enviar a mensagem.";
        console.error(error);
    });
});
