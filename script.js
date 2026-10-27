const form = document.getElementById('registroForm');
const mensaje = document.getElementById('mensaje');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
    // Evitar que la página se recargue por defecto
    event.preventDefault();

    // Capturar valores usando getElementById y .value
    const nombre = document.getElementById('nombre').value.trim();
    const nie = document.getElementById('nie').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const grado = document.getElementById('grado').value;
    const seccion = document.getElementById('seccion').value;
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    // Validación de campos obligatorios (Reto adicional)
    if (!nombre || !nie || !edad || !grado || !seccion || !correo || !telefono) {
        mensaje.className = 'error';
        mensaje.textContent = '⚠ Debe completar todos los campos.';
        resultado.style.display = 'none';
        return;
    }

    // Mostrar mensaje de éxito
    mensaje.className = 'success';
    mensaje.textContent = 'ESTUDIANTE REGISTRADO CORRECTAMENTE';

    // Mostrar la información debajo del formulario
    document.getElementById('resNombre').textContent = nombre;
    document.getElementById('resNie').textContent = nie;
    document.getElementById('resEdad').textContent = edad;
    document.getElementById('resGrado').textContent = grado;
    document.getElementById('resSeccion').textContent = seccion;
    document.getElementById('resCorreo').textContent = correo;
    document.getElementById('resTelefono').textContent = telefono;

    resultado.style.display = 'block';
});