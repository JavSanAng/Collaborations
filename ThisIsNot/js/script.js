// Obtener referencia al botón y al elemento donde se mostrarán las citas
const btnQuotes = document.getElementById('btnQuotes');
const quotes = document.getElementById('quotes');

// Agregar un event listener al botón para manejar el click
btnQuotes.addEventListener('click', fetchKanyeQuote);

// Función para obtener la cita de Kanye West
function fetchKanyeQuote() {
    fetch('https://api.kanye.rest/')
        .then((response) => {
            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Error al obtener la respuesta.');
            }
            // Convertir la respuesta a JSON
            return response.json();
        })
        .then((data) => {
            // Mostrar la cita obtenida en el elemento HTML
            quotes.textContent = data.quote;
        })
        .catch((error) => {
            // Manejar errores
            console.log('Error: No se pudo obtener los datos deseados.', error);
        });
}
