document.addEventListener('DOMContentLoaded', () => {

    const sbutton = document.querySelector('.signin-button');

    sbutton.addEventListener('click', (event) => {
        event.preventDefault(); 
        window.location.href = "home.html"; 
    });
});