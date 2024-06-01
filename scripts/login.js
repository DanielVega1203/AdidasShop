document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el usuario ya ha iniciado sesión
    if (localStorage.getItem('loggedIn') === 'true') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        document.getElementById('login-container').style.display = 'block';
        document.getElementById('content').style.display = 'none';
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validar el usuario y la contraseña
    if (username === 'usuario' && password === 'contrasena') {
        localStorage.setItem('loggedIn', 'true');
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
});
