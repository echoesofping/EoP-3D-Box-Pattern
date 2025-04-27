const toggleBtn =
document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    //change icon
    if (body.classList.contains('light-mode')) {
        toggleBtn.innerHTML = '🌙';
    } else {
        toggleBtn.innerHTML = '☀️';
    
    }
});

