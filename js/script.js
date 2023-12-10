$(document).ready(function(){
	console.log("working");
	
	$(".icon").click(function(){
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		}
		else {
			x.className = "topnav";
		}
	});
	
	let mybutton = document.getElementById("myBtn");
	
	window.onscroll = function() {scrollFunction()};
	
	// When the user scrolls down 20px from the top of the document, show the button
	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = "block";
		}
		else {
			mybutton.style.display = "none";
		}
	}
	
	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
	
	//Contact page
	function validateForm() {
    var fname = document.forms["contactForm"]["fname"].value;
	var lname = document.forms["contactForm"]["lname"].value;
    var email = document.forms["contactForm"]["email"].value;
	var subject = document.forms["contactForm"]["subject"].value;
    var message = document.forms["contactForm"]["message"].value;
    var error = "";

    if (fname == "") {
        error += "Please enter your first name.\n";
    }
	
	if (lname == "") {
        error += "Please enter your last name.\n";
    }

    if (email == "") {
        error += "Please enter your email address.\n";
    } else if (!validateEmail(email)) {
        error += "Please enter a valid email address.\n";
    }
	
	if (subject == "") {
        error += "Please enter a subject.\n";
    }

    if (message == "") {
        error += "Please enter a message.\n";
    }

    if (error != "") {
        alert(error);
        return false;
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
	
});