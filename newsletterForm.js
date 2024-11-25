document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os dados do formulário
    const formData = new FormData(this);

    // Fazer o envio via Fetch API
    fetch("https://exemplo.com/enviar-newsletter", { 
        method: "POST",
        body: formData
    })
    .then(response => response.json()) 
    .then(data => {
        document.getElementById("newsletterResponse").innerText = data.message || "Inscrição realizada com sucesso!";
    })
    .catch(error => {
        document.getElementById("newsletterResponse").innerText = "Erro ao realizar a inscrição.";
        console.error(error);
    });
});
