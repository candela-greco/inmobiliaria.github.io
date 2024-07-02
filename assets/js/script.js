const propiedadesVenta = [
  {
    src: './assets/imgs/prop1.avif',
    titulo: 'Casa de lujo en zona residencial',
    descripcion: 'Casa de lujo vivienda familiar en zona residencial',
    ubicacion: 'En zona residencial',
    habitaciones: '8 habitaciones |',
    baños: '4 baños',
    costo: 500000,
    smoke: false,
    pets: true
  },
  {
    src: './assets/imgs/prop2.avif',
    titulo: 'Casa de lujo con vista a la playa',
    descripcion: 'Casa en la playa',
    ubicacion: 'En la playa',
    habitaciones: '8 habitaciones |',
    baños: '4 baños',
    costo: 2000000,
    smoke: true,
    pets: false
  },
  {
    src: './assets/imgs/prop3.avif',
    titulo: 'Casa de lujo en el centro',
    descripcion: 'Casa en el centro',
    ubicacion: 'En el centro',
    habitaciones: '8 habitaciones |',
    baños: '4 baños',
    costo: 3000000,
    smoke: false,
    pets: true
  },
  {
    src: './assets/imgs/prop4.avif',
    titulo: 'Casa de lujo en zona residencial',
    descripcion: 'Casa en zona residencial',
    ubicacion: 'En zona residencial',
    habitaciones: '8 habitaciones |',
    baños: '4 baños',
    costo: 4000000,
    smoke: true,
    pets: false
  }
];

const ventas = document.querySelector(".ventas");

let template1 = "";

for (let venta of propiedadesVenta) {

  let fumar = "";
  let animales = "";

  if (venta.smoke === true) {
    fumar = `<p style="color: green"><i class="fa-solid fa-smoking"> Permitido fumar</i></p>`;
  } else {
    fumar = `<p style="color: red"><i class="fa-solid fa-smoking"> No se permite fumar</i></p>`;
  }

  if (venta.pets === true) {
    animales = `<p style="color: green"><i class="fa-solid fa-paw"> Mascotas permitidas</i></p>`;
  } else {
    animales = `<p style="color: red"><i class="fa-solid fa-paw"> No se permiten mascotas</i></p>`;
  }

  template1 += `
    <div class="cardVenta">
      <img class="venta-img" src="${venta.src}">
      <div class="venta-cuerpo">
        <h3 class="venta-tittle">${venta.titulo}</h3>
        <p>${venta.descripcion}</p>
        <div class="venta-ubicacion">
          <i class="fa-solid fa-location-dot"></i> <p>${venta.ubicacion}</p>
        </div>
        <div class="venta-habitaciones">
          <i class="fa-solid fa-bed"></i> <p>${venta.habitaciones}</p>
          <i class="fa-solid fa-bath baño"></i> <p>${venta.baños}</p>
        </div>
        <div class="venta-costo">
          <i class="fa-solid fa-dollar-sign"></i> <p>$${venta.costo}</p>
        </div>
        ${fumar}
        ${animales}
      </div>
    </div>
  `;
}

ventas.innerHTML = template1;


const propiedadesAlquiler = [
  {
    src: './assets/imgs/alquiler1.avif',
    titulo: 'Departamento en zona residencial',
    descripcion: 'Departamento vivienda familiar en zona residencial',
    ubicacion: 'En zona residencial',
    habitaciones: '8 habitaciones |',
    baños: '4 baños',
    costo: 500000,
    smoke: false,
    pets: true
  },
  {
    src: './assets/imgs/alquiler2.avif',
    titulo: 'Departamento en zona centrica',
    descripcion: 'Departamento en zona centrica',
    ubicacion: 'En zona centrica',
    habitaciones: '8 habitaciones |',
    baños: '4 baños',
    costo: 2000000,
    smoke: true,
    pets: false
  },
  {
    src: './assets/imgs/alquiler3.avif',
    titulo: 'Departamento en zona residencial',
    descripcion: 'Hermoso departamento en zona residencial',
    ubicacion: 'En zona residencial',
    habitaciones: '8 habitaciones |',
    baños: '4 baños',
    costo: 3000000,
    smoke: false,
    pets: true
  },
  {
    src: './assets/imgs/alquiler4.avif',
    titulo: 'Departamento en los suburbios',
    descripcion: 'Departamento en zona suburbios',
    ubicacion: 'En suburbios',
    habitaciones: '8 habitaciones |',
    baños: '4 baños',
    costo: 4000000,
    smoke: true,
    pets: false
  }
];

const alquileres = document.querySelector(".alquileres");

let template2 = "";

for (let alquiler of propiedadesAlquiler) {

  let fumar = "";
  let animales = "";

  if (alquiler.smoke === true) {
    fumar = `<p style="color: green"><i class="fa-solid fa-smoking"> Permitido fumar</i></p>`;
  } else {
    fumar = `<p style="color: red"><i class="fa-solid fa-smoking"> No se permite fumar</i></p>`;
  }

  if (alquiler.pets === true) {
    animales = `<p style="color: green"><i class="fa-solid fa-paw"> Mascotas permitidas</i></p>`;
  } else {
    animales = `<p style="color: red"><i class="fa-solid fa-paw"> No se permiten mascotas</i></p>`;
  }

  template2 += `
    <div class="cardAlquiler">
      <img class="alquiler-img" src="${alquiler.src}">
      <div class="alquiler-cuerpo">
        <h3 class="alquiler-tittle">${alquiler.titulo}</h3>
        <p>${alquiler.descripcion}</p>
        <div class="alquiler-ubicacion">
          <i class="fa-solid fa-location-dot"></i> <p>${alquiler.ubicacion}</p>
        </div>
        <div class="alquiler-habitaciones">
          <i class="fa-solid fa-bed"></i> <p>${alquiler.habitaciones}</p>
          <i class="fa-solid fa-bath baño"></i> <p>${alquiler.baños}</p>
        </div>
        <div class="alquiler-costo">
          <i class="fa-solid fa-dollar-sign"></i> <p>$${alquiler.costo}</p>
        </div>
        ${fumar}
        ${animales}
      </div>
    </div>
  `;
}

alquileres.innerHTML = template2;
