<?php
// Inicia a sessão para armazenar ou acessar dados da sessão do usuário.
session_start();

// Verifica se todos os campos necessários foram enviados via POST.
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && 
    isset($_POST['city']) && isset($_POST['state']) && isset($_POST['excerpt'])) {

    // Remove espaços em branco extras no início e no final de cada valor recebido.
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $city = trim($_POST['city']);
    $state = trim($_POST['state']);
    $excerpt = trim($_POST['excerpt']);

    // Verifica se todos os campos estão preenchidos.
    if (!empty($name) && !empty($email) && !empty($phone) && 
        !empty($city) && !empty($state) && !empty($excerpt)) {

        // Valida o formato do e-mail utilizando o filtro FILTER_VALIDATE_EMAIL.
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

            // Armazena os dados enviados em uma variável de sessão para uso posterior.
            $_SESSION['form_data'] = [
                'name' => $name,
                'email' => $email,
                'phone' => $phone,
                'city' => $city,
                'state' => $state,
                'excerpt' => $excerpt
            ];

            // Redireciona o usuário para a página de confirmação.
            header("Location: confirmation.php");
            exit();
        } else {
            // Caso o e-mail não seja válido, armazena uma mensagem de erro na sessão.
            $_SESSION['error'] = "Por favor, insira um e-mail válido.";
        }
    } else {
        // Caso algum campo esteja vazio, armazena uma mensagem de erro na sessão.
        $_SESSION['error'] = "Todos os campos devem ser preenchidos.";
    }

    // Redireciona o usuário de volta para o formulário, exibindo a mensagem de erro.
    header("Location: form.php");
    exit();
}
