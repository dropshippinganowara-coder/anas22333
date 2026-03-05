const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        // This makes 1st click add 'active' and 2nd click remove it
        nav.classList.toggle('active');
    });
}

if (close) {
    close.addEventListener('click', (e) => {
        e.preventDefault();
        nav.classList.remove('active');
    });
}




