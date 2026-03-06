<?php

declare(strict_types=1);

date_default_timezone_set('Asia/Tashkent');

$envPath = __DIR__ . '/.env';
if (is_file($envPath) && is_readable($envPath)) {
    $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if (is_array($lines)) {
        foreach ($lines as $line) {
            $line = trim($line);
            if ($line === '' || substr($line, 0, 1) === '#') {
                continue;
            }

            $pos = strpos($line, '=');
            if ($pos === false) {
                continue;
            }

            $key = trim(substr($line, 0, $pos));
            $value = trim(substr($line, $pos + 1));

            if ($key === '' || getenv($key) !== false) {
                continue;
            }

            $first = substr($value, 0, 1);
            $last = substr($value, -1);
            if (($first === '"' && $last === '"') || ($first === "'" && $last === "'")) {
                $value = substr($value, 1, -1);
            }

            putenv($key . '=' . $value);
            $_ENV[$key] = $value;
        }
    }
}

$token = getenv('TELEGRAM_BOT_TOKEN');
$chatId = getenv('TELEGRAM_CHAT_ID');

if (!$token) {
    $token = '';
}

if (!$chatId) {
    $chatId = '';
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'Method Not Allowed';
    exit;
}

$serviceType = trim((string)($_POST['service-type'] ?? ''));
$phone = trim((string)($_POST['field-number'] ?? ''));
$lang = strtolower(trim((string)($_POST['lang'] ?? '')));

if ($lang !== 'uz' && $lang !== 'ru') {
    $lang = 'uz';
}

if ($serviceType === '' || $phone === '') {
    http_response_code(400);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'Bad Request';
    exit;
}

$ip = (string)($_SERVER['REMOTE_ADDR'] ?? '');
$ua = (string)($_SERVER['HTTP_USER_AGENT'] ?? '');

$serviceMap = [
    'buxgalteriya' => 'Buxgalteriya',
    'audit' => 'Audit',
    'konsalting' => 'Konsalting',
];

$serviceLabel = $serviceMap[$serviceType] ?? $serviceType;

$time = date('Y-m-d H:i:s');

$phoneDigits = preg_replace('/\D+/', '', $phone);
if (substr($phoneDigits, 0, 3) === '998') {
    $phoneDigits = substr($phoneDigits, 3);
}
$phoneDigits = substr($phoneDigits, 0, 9);
$phoneNormalized = '+998' . $phoneDigits;

$text = "🔥 Yangi mijoz\n\n";
$text .= "📞 Telefon: {$phoneNormalized}\n";
$text .= "📊 Xizmat: {$serviceLabel}\n\n";
$text .= "🌐 Sayt: 1fin.uz\n";
$text .= "🕒 Vaqt: {$time}\n";
$text .= "🌍 Til: {$lang}";

$url = "https://api.telegram.org/bot{$token}/sendMessage";
$postData = http_build_query([
    'chat_id' => $chatId,
    'text' => $text,
    'parse_mode' => 'HTML',
    'disable_web_page_preview' => true,
]);

$context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => $postData,
        'timeout' => 10,
    ],
]);

$response = @file_get_contents($url, false, $context);

if ($response === false) {
    http_response_code(502);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'Bad Gateway';
    exit;
}

$data = json_decode($response, true);

if (!is_array($data) || !($data['ok'] ?? false)) {
    http_response_code(502);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'Bad Gateway';
    exit;
}

header('Location: /?lead=ok');
exit;
