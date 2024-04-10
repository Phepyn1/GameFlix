
var el = document.getElementById('header'); 
var numPx = '50'; 
window.addEventListener('scroll', function() {
    if (window.scrollY > numPx) {
    	el.classList.add('mudaCor');
    } else {
    	el.classList.remove('mudaCor');
    }
});
