// CULTURESJEANS Contact Form JavaScript

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.querySelector(".contact-form form");

    if (!contactForm) {
        console.error("Contact form not found.");
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (name === "") {
            alert("Please enter your full name.");
            document.getElementById("name").focus();
            return;
        }

        if (email === "") {
            alert("Please enter your email address.");
            document.getElementById("email").focus();
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            document.getElementById("email").focus();
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            document.getElementById("message").focus();
            return;
        }

        // Create email message
        const subject = encodeURIComponent(
            "CULTURESJEANS Contact Form Message"
        );

        const body = encodeURIComponent(
            "Hello CULTURESJEANS,\n\n" +
            "I would like to contact you.\n\n" +
            "Full Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + (phone || "Not provided") + "\n\n" +
            "Message:\n" + message
        );

        // Open user's email application
        window.location.href =
            "mailto:siawemmanueljnr@gmail.com" +
            "?subject=" + subject +
            "&body=" + body;

        // Clear the form
        contactForm.reset();

        alert("Thank you for contacting CULTURESJEANS!");
    });


    // Automatically update footer year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});