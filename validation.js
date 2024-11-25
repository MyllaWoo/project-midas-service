function validateForm() {
    let isValid = true;
  
    // Validando o nome
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
        isValid = false;
        alert("Por favor, preencha o campo Nome.");
    }
  
    // Validando o email
    const email = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        isValid = false;
        alert("Por favor, insira um e-mail válido.");
    }
  
    // Validando o telefone
    const phone = document.getElementById("phone");
    if (phone.value.trim() === "") {
        isValid = false;
        alert("Por favor, preencha o campo Telefone.");
    }
  
    // Validando cidade
    const city = document.getElementById("city");
    if (city.value.trim() === "") {
        isValid = false;
        alert("Por favor, preencha o campo Cidade.");
    }
  
    // Validando estado
    const state = document.getElementById("state");
    if (state.value.trim() === "") {
        isValid = false;
        alert("Por favor, preencha o campo Estado.");
    }
  
    // Validando trecho
    const excerpt = document.getElementById("excerpt");
    if (excerpt.value.trim() === "") {
        isValid = false;
        alert("Por favor, preencha o campo Trecho.");
    }
  // Validando os campos de serviço (radio buttons)
  const services = document.getElementsByName("servico");
  let serviceChecked = false;
  for (let i = 0; i < services.length; i++) {
      if (services[i].checked) {
          serviceChecked = true;
          break;
      }
  }
  
  if (!serviceChecked) {
      isValid = false;
      alert("Por favor, selecione um serviço.");
  }
    return isValid;
  }
  
  function validateForm() {
    let isValid = true;
  
    // Validando o nome
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
        isValid = false;
        alert("Por favor, preencha o campo Nome.");
    }
  
    // Validando o email
    const email = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        isValid = false;
        alert("Por favor, insira um e-mail válido.");
    }
  
    // Validando o telefone
    const phone = document.getElementById("phone");
    if (phone.value.trim() === "") {
        isValid = false;
        alert("Por favor, preencha o campo Telefone.");
    }
  
    // Validando cidade
    const city = document.getElementById("city");
    if (city.value.trim() === "") {
        isValid = false;
        alert("Por favor, preencha o campo Cidade.");
    }
  
    // Validando estado
    const state = document.getElementById("state");
    if (state.value.trim() === "") {
        isValid = false;
        alert("Por favor, preencha o campo Estado.");
    }
  
    // Validando trecho
    const excerpt = document.getElementById("excerpt");
    if (excerpt.value.trim() === "") {
        isValid = false;
        alert("Por favor, preencha o campo Trecho.");
    }
  // Validando os campos de serviço (radio buttons)
  const services = document.getElementsByName("servico");
  let serviceChecked = false;
  for (let i = 0; i < services.length; i++) {
      if (services[i].checked) {
          serviceChecked = true;
          break;
      }
  }
  
  if (!serviceChecked) {
      isValid = false;
      alert("Por favor, selecione um serviço.");
  }
    return isValid;
  }  