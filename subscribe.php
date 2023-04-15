<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$email = test_input($_POST["email"]);

	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo "Invalid email format";
		exit;
	}

	// Save the email address to a file or database
	$file = fopen("emails.txt", "a");
	fwrite($file, $email . "\n");
	fclose($file);

	echo "Thank you for signing up!";
}

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}
