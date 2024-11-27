document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Pesan Anda telah terkirim!\n\nNama: ' + name + '\nEmail: ' + email + '\nPesan: ' + message);
        document.getElementById('contact-form').reset();
    } else {
        alert('Mohon lengkapi semua kolom!');
    }
});