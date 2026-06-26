<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido.']);
    exit;
}

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$name     = trim($_POST['name'] ?? '');
$email    = trim($_POST['email'] ?? '');
$objetivo = trim($_POST['objetivo'] ?? '');
$message  = trim($_POST['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Preencha todos os campos obrigatórios.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email inválido.']);
    exit;
}

// ── Configurações SMTP Hostinger ─────────────────────────────────────────────
define('SMTP_HOST',     'smtp.hostinger.com');
define('SMTP_USERNAME', 'contato@parqueolhodagua.com.br');
define('SMTP_PASSWORD', 'SUA_SENHA_AQUI'); // senha do email na Hostinger (hPanel → Emails)
define('SMTP_PORT',     465);              // 465 = SSL
define('EMAIL_DESTINO', 'contato@parqueolhodagua.com.br');
// ─────────────────────────────────────────────────────────────────────────────

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USERNAME;
    $mail->Password   = SMTP_PASSWORD;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL (porta 465)
    $mail->Port       = SMTP_PORT;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom(SMTP_USERNAME, 'Site Parque Olho D\'Água');
    $mail->addAddress(EMAIL_DESTINO, 'Parque Olho D\'Água');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = $objetivo ? "[$objetivo] Mensagem de $name" : "Contato de $name";
    $mail->Body    = "
        <h2>Nova mensagem pelo site</h2>
        <p><strong>Nome:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Objetivo:</strong> " . htmlspecialchars($objetivo ?: 'Não informado') . "</p>
        <hr>
        <p><strong>Mensagem:</strong></p>
        <p>" . nl2br(htmlspecialchars($message)) . "</p>
    ";
    $mail->AltBody = "Nome: $name\nEmail: $email\nObjetivo: $objetivo\n\n$message";

    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso!']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erro ao enviar mensagem. Tente novamente.']);
}
