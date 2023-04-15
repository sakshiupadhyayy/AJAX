// Add an event listener to the sign up form
document.getElementById("signup-form").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent the form from submitting normally

	// Send the form data using AJAX
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			// Display the status message returned by the PHP script
			document.getElementById("status").innerHTML = xhr.responseText;
		}
	};
	xhr.open("POST", "subscribe.php");
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("email=" + document.getElementById("email").value);
});
function signUp() {
    alert("Thank you for signing up!");
    // additional code for form submission or other actions can be added here
  }