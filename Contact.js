document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Validate inputs if needed

        // For demonstration, you can show an alert or send form data via AJAX
        alert(`Thank you for contacting us, ${name}! We will get back to you at ${email}.`);
        
        // Reset the form
        form.reset();
    });
});
