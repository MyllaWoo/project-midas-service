<?php
// Inicia a sessão para acessar dados armazenados anteriormente.
session_start();

// Verifica se os dados do formulário estão armazenados na sessão.
if (isset($_SESSION['form_data'])) {
    // Recupera os dados do formulário armazenados na sessão.
    $formData = $_SESSION['form_data'];

    // Remove os dados do formulário da sessão para evitar reutilização.
    unset($_SESSION['form_data']);
} else {
    // Se os dados não estiverem na sessão, redireciona o usuário de volta para o formulário.
    header("Location: form.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Confirmação do Orçamento</title>
</head>
<body>
    <h1>Confirmação do Orçamento</h1>

    <!-- Exibe uma mensagem de agradecimento personalizada com o nome do usuário. -->
    <p>Obrigado, <?php echo htmlspecialchars($formData['name']); ?>!</p>

    <!-- Lista os dados do formulário de forma segura, escapando caracteres especiais com htmlspecialchars. -->
    <ul>
        <li><strong>Nome:</strong> <?php echo htmlspecialchars($formData['name']); ?></li>
        <li><strong>Email:</strong> <?php echo htmlspecialchars($formData['email']); ?></li>
        <li><strong>Telefone:</strong> <?php echo htmlspecialchars($formData['phone']); ?></li>
        <li><strong>Cidade:</strong> <?php echo htmlspecialchars($formData['city']); ?></li>
        <li><strong>Estado:</strong> <?php echo htmlspecialchars($formData['state']); ?></li>
        <li><strong>Trecho:</strong> <?php echo htmlspecialchars($formData['excerpt']); ?></li>
    </ul>
</body>
</html>
