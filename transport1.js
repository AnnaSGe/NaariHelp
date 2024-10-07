document.addEventListener('DOMContentLoaded', () => {

    const sbutton = document.querySelector('.location-button');

    sbutton.addEventListener('click', (event) => {
        event.preventDefault(); 
        window.location.href = "transport.html"; 
    });
});