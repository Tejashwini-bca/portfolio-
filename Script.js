
document.getElementById("contactForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("status").textContent =
            "Thank you, " + name +
            "! Your form is ready, but email sending is not configured.";

        this.reset();
    });
