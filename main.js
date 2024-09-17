function generarContrasena(longitud, incluirLetras, incluirNumeros, incluirEspeciales) {
    let caracteres = '';
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const especiales = '!@#$%^&*()_+[]{}|;:,.<>?';

    if (incluirLetras) caracteres += letras;
    if (incluirNumeros) caracteres += numeros;
    if (incluirEspeciales) caracteres += especiales;

    if (caracteres.length === 0) return 'Selecciona al menos una opción';

    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(indice);
    }

    return contrasena;
}

document.getElementById('generar').addEventListener('click', function () {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const incluirLetras = document.getElementById('incluirLetras').checked;
    const incluirNumeros = document.getElementById('incluirNumeros').checked;
    const incluirEspeciales = document.getElementById('incluirEspeciales').checked;

    if (isNaN(cantidad) || cantidad <= 0) {
        alert('Por favor, ingresa una cantidad válida');
        return;
    }

    const contrasena = generarContrasena(cantidad, incluirLetras, incluirNumeros, incluirEspeciales);
    document.getElementById('contrasena').value = contrasena;
});



