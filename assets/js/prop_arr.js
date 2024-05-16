// Este archivo contiene un arreglo de propiedades en venta

// Arreglo de propiedades en venta
const propiedades_alquiler = [
    {
      // #1 - Basde Datos Arriendo
    nombre: 'Oficina Centro de Puerto Varas - Del Salvador',
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20230718/2697222/n_wm_sothebys_160733_203160733_164460_1.webp',
    descripcion: 'CASA KASCHEL: Disponible para arriendo, con 540 m2 construidos.',
    ubicacion: 'Del Salvador S/N',
    habitaciones: 6,
    costo: 11950,
    smoke: false,
    pets: false
    },
    {
      // #2 - Base Datos Arriendo
    nombre: 'Oficina y Bodegas',
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20240309/3110528/n_wm_a9c0b1179a5b79e7b56a46123d04950b80ead2ca.webp',
    descripcion: 'Arriendo de bodega con oficinas, perfectas para tu empresa',
    ubicacion: 'Centro Industrial Nueva Braunau',
    habitaciones: 3,
    costo: 1493706,
    smoke: true,
    pets: true
    },
    {
      // #3 - Base de Datos Arriendo
    nombre: 'Propiedad para Oficina o Centro medico - Ancud - Chiloé',
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20240417/3187451/n_wm_kiteprop_1458_e0ad0b4331ad2c2f8ac8b05d59ad04a7.webp',
    descripcion: 'Se arrienda primer nivel de una propiedad en pleno centro de Ancud, con excelente acceso, ideal para centro médico',
    ubicacion: 'Ancud - Los Lagos',
    habitaciones: 3,
    costo: 1200000,
    smoke: false,
    pets: true
    }
  ];
  
  // Función para generar el HTML de las propiedades en venta
  function generarHTMLPropiedades() {
    let html = '';
  
    // Recorrer el arreglo de propiedades
    propiedades_alquiler.forEach(propiedad => {
        // Construir el HTML para cada propiedad utilizando template literals
        html += `
            <div class="card mb-3">
                <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p class="card-text"><strong>Ubicación:</strong> ${propiedad.ubicacion}</p>
                    <p class="card-text"><strong>Habitaciones:</strong> ${propiedad.habitaciones}</p>
                    <p class="card-text"><strong>Costo:</strong> $${propiedad.costo}</p>
                    <p class="card-text"><strong>Permitido fumar:</strong> ${propiedad.smoke ? 'Sí' : 'No'}</p>
                    <p class="card-text"><strong>Permitido mascotas:</strong> ${propiedad.pets ? 'Sí' : 'No'}</p>
                </div>
            </div>
        `;
    });
  
    return html;
  }
  
  // Exportar la función generarHTMLPropiedades
  module.exports = generarHTMLPropiedades;