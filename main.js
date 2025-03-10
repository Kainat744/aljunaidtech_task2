document.addEventListener("DOMContentLoaded", function () {
    // Form Validation
    function validateForm(formType) {
        let valid = true;

        // Define fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const password = document.getElementById('password');
        const username = document.getElementById('username');

        // Email validation regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Helper function to show error messages
        function showError(input, message) {
            input.classList.add("is-invalid");
            let errorElement = input.nextElementSibling;
            if (!errorElement || !errorElement.classList.contains("error-text")) {
                errorElement = document.createElement("div");
                errorElement.classList.add("error-text", "text-danger", "small");
                input.parentNode.appendChild(errorElement);
            }
            errorElement.innerText = message;
            valid = false;
        }

        // Remove error when user types
        function removeError(input) {
            input.classList.remove("is-invalid");
            let errorElement = input.nextElementSibling;
            if (errorElement && errorElement.classList.contains("error-text")) {
                errorElement.remove();
            }
        }

        // Validate Contact Form
        if (formType === 'contact') {
            if (!name.value.trim()) showError(name, "Name is required.");
            else removeError(name);

            if (!email.value.trim() || !emailPattern.test(email.value)) showError(email, "Enter a valid email.");
            else removeError(email);

            if (!message.value.trim()) showError(message, "Message cannot be empty.");
            else removeError(message);
        }

        // Validate Register Form
        if (formType === 'register') {
            if (!username.value.trim()) showError(username, "Username is required.");
            else removeError(username);

            if (!email.value.trim() || !emailPattern.test(email.value)) showError(email, "Enter a valid email.");
            else removeError(email);

            if (!password.value.trim() || password.value.length < 6) showError(password, "Password must be at least 6 characters.");
            else removeError(password);
        }

        return valid;
    }

    // Form submission event listener
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            if (!validateForm('register')) {
                event.preventDefault();
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            if (!validateForm('contact')) {
                event.preventDefault();
            }
        });
    }

    // Smooth Scroll for Navigation (Event Delegation)
    document.addEventListener("click", function (event) {
        if (event.target.matches(".navbar-nav .nav-link")) {
            event.preventDefault();
            const target = document.querySelector(event.target.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        }
    });

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            navbar.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        } else {
            navbar.classList.remove("scrolled");
            navbar.style.boxShadow = "none";
        }
    });

    // Animated Submit Button
    const submitButton = document.getElementById("submitButton");
    if (submitButton) {
        submitButton.addEventListener("click", function () {
            this.classList.add("animate__animated", "animate__pulse");
            setTimeout(() => this.classList.remove("animate__animated", "animate__pulse"), 1000);
        });
    }
});


