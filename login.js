$(function () {
	$inputs = $("#login").find("input");
	$pwfield = $("#pass");
	$confirmfield = $pwfield.next();
	$clearfield = $pwfield.find("button");

	$inputs.on("click", function () {
		$inputs.animate({width: "50%"}, {duration: 150, queue: false}, "linear");
		$(this).animate({width: "80%"}, {duration: 150, queue: false}, "linear");
	});

	$("button[type = 'reset']").on("click", function () {
		$inputs.animate({width: "50%"}, {duration: 150, queue: false}, "linear");
	});

	var password = "";
	var confirm = "";
	var pass = {
		capital: false, // At least one upper case letter (done)
		special: false, // At least one non-alphanumeric character (done)
	};
	$pwfield.on("keydown", function (event) { // listens for each keypress for real time checking
		if (event.key == "Backspace") { password = password.slice(0, password.length-1); }
		else if (event.key == "Shift" || event.key == "Tab" || event.key == "Control" ||
				 event.key == "Escape" || event.key == "Caps Lock") { 
			password = password; // Add an invalid character pop up box here
		}
		else { password += event.key; }

		for (var i = 0; i < password.length; i++) {
			if (password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 90) {
			 	pass.capital = true;
				break;
			}
			else { pass.capital = false; }
		};

		for (var j = 0; j < password.length; j++) {
			if (((password[j].charCodeAt(0) >= 32) && (password[j].charCodeAt(0) <= 64))
			|| ((password[j].charCodeAt(0) >= 91) && (password[j].charCodeAt(0) <= 96))
			|| ((password[j].charCodeAt(0) >= 123) && (password[j].charCodeAt(0) <= 127))) {
				 pass.special = true;
					break; }
			else { pass.special = false; }
		}

		// 2 for loops inefficient, find a better way
		if (!pass.capital) { console.log("Capital needed"); } // Pop up box 
		if (!pass.special) { console.log("Special character still needed"); } // Pop up box
		if (password.length < 8) { console.log((8 - password.length) + " more characters to be valid"); } // pop up box
		console.log(password);
	});

	$confirmfield.on("keydown", function (event) {
		if (event.key == "Backspace") { confirm = confirm.slice(0, confirm.length-1); }
		else if (event.key == "Shift" || event.key == "Tab" || event.key == "Control" ||
				 event.key == "Escape" || event.key == "Caps Lock") { 
			confirm = confirm; // Add an invalid character pop up box here
		}
		else { confirm += event.key; }
		console.log(confirm);
		if (password != confirm) { console.log("Passwords do not match..."); } // Pop up box
		else (console.log("Password Match!!"));
	})
});