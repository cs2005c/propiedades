// Este archivo contiene un arreglo de propiedades en venta

// Arreglo de propiedades en venta
const propiedades_venta = [
    {
     // #1
    nombre: 'Parcela Con Casa en Terrno 5000m2.',
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20201216/1634034/n_wm_pyglarrain_374071140374071975824_1.webp',
    descripcion: 'Estupenda parcela de 5.000 m2 ubicada a solo 3 kms del centro de Puerto Varas y a 15 kms del aeropuerto El Tepual de Pto. Montt.',
    ubicacion: 'Puerto Varas - Los lagos - Chile',
    habitaciones: 3,
    costo: 685000000,
    smoke: true,
    pets: true
    },
    {
      // #2
    nombre: 'Departamento Cercano Colegio Puerto Varas',
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20221130/2276019/n_wm_sothebys_163251_102163251_227536_1.webp',
    descripcion: 'Departamento en el último piso del edificio, con vistas panorámicas al Lago Llanquihue y volcanes Osorno y Calbuco',
    ubicacion: '456 Downtown Avenue, Metro City, CA 56789',
    habitaciones: 2,
    costo: 391724503,
    smoke: true,
    pets: true
    },
    {
      // 3
    nombre: 'Departamento Calle Mirador',
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20240112/3015547/n_wm_fuenzalidapuertovaras_398780_102398780_1442846_1.webp',
    descripcion: 'Exclusivo edificio Peninsula Lake,',
    ubicacion: 'Puerto Varas sector Alto',
    habitaciones: 3,
    costo: 709137113,
    smoke: true,
    pets: true
    }
    
];

// Función para generar el HTML de las propiedades en venta
function generarHTMLPropiedades() {
    let html = '';

    // Recorrer el arreglo de propiedades
    propiedades_venta.forEach(propiedad => {
        // Construir el HTML para cada propiedad utilizando template literals
        html += `
            <div class="card mb-3">
                <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p class="card-text"><strong>Ubicación:</strong> ${propiedad.ubicacion}</p>
                    <p class="card-text"><strong>Habitaciones:</strong> ${propiedad.habitaciones}</p>
                    <p class="card-text"><strong>Valor:</strong> $${propiedad.costo}</p>
                    <p class="card-text"><strong>Fumar:</strong> ${propiedad.smoke ? 'Sí' : 'No'}</p>
                    <p class="card-text"><strong>Mascotas:</strong> ${propiedad.pets ? 'Sí' : 'No'}</p>
                </div>
            </div>
        `;
    });

    return html;
}

// Exportar la función generarHTMLPropiedades
module.exports = generarHTMLPropiedades;