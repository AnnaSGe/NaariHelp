function goToPage(pageUrl) {
    window.location.href = pageUrl;
}
document.querySelector('.section-one .section-btn').addEventListener('click', function() {
    goToPage('transport1.html'); 
});

document.querySelector('.section-two .section-btn').addEventListener('click', function() {
    goToPage('education.html');  
});

document.querySelector('.section-three .section-btn').addEventListener('click', function() {
    goToPage('health.html'); 
});

