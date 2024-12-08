// Asegúrate de que jsPDF está cargado antes de ejecutar este código.
// Si no lo tienes aún, usa el siguiente CDN para cargarlo:

const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
document.head.appendChild(script);

script.onload = function () {
  // Crear el botón dinámicamente
  const button = document.createElement('button');
  button.innerText = 'Descargar como PDF';
  document.body.appendChild(button); // Lo añadimos al body

  // Agregar evento al botón para generar el PDF
  button.addEventListener('click', function () {
    // Usamos jsPDF para crear un nuevo PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Aquí, vamos a agregar contenido simple al PDF
    doc.text("Este es el contenido de la página", 10, 10); // Puedes agregar texto u otros elementos

    // Guardar el archivo PDF con el nombre 'pagina.pdf'
    doc.save('pagina.pdf');
  });
};
// Asegúrate de que jsPDF está cargado antes de ejecutar este código.
// Si no lo tienes aún, usa el siguiente CDN para cargarlo:

const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
document.head.appendChild(script);

script.onload = function () {
  // Crear el botón dinámicamente
  const button = document.createElement('button');
  button.innerText = 'Descargar como PDF';
  document.body.appendChild(button); // Lo añadimos al body

  // Estilo para el botón (opcional)
  button.style.padding = '10px 20px';
  button.style.fontSize = '16px';
  button.style.backgroundColor = '#4CAF50';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.cursor = 'pointer';

  // Agregar evento al botón para generar el PDF
  button.addEventListener('click', function () {
    // Usamos jsPDF para crear un nuevo PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar contenido al PDF
    doc.text("Este es el contenido de la página que quieres descargar", 10, 10);

    // Guardar el archivo PDF con el nombre 'pagina.pdf'
    doc.save('pagina.pdf');
  });
};

