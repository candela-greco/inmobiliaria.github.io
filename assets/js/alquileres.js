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
  
  let template1 = "";
  
  for (let alquiler of propiedadesAlquiler) {
  
    let fumar = "";
    let animales = "";
  
    if (alquiler.smoke === true) {
      fumar = `<p style="color: green"><i class="fa-solid fa-smoking"></i> Permitido fumar</p>`;
    } else {
      fumar = `<p style="color: red"><i class="fa-solid fa-ban"></i> No se permite fumar</p>`;
    }
  
    if (alquiler.pets === true) {
      animales = `<p style="color: green"><i class="fa-solid fa-paw"></i> Mascotas permitidas</p>`;
    } else {
      animales = `<p style="color: red"><i class="fa-solid fa-ban"></i></i> No se permiten mascotas</p>`;
    }
  
    template1 += `
      <div class="cardVenta">
        <img class="venta-img" src="${alquiler.src}">
        <div class="venta-cuerpo">
          <h3 class="venta-tittle">${alquiler.titulo}</h3>
          <p>${alquiler.descripcion}</p>
          <div class="venta-ubicacion">
            <i class="fa-solid fa-location-dot"></i> <p>${alquiler.ubicacion}</p>
          </div>
          <div class="venta-habitaciones">
            <i class="fa-solid fa-bed"></i> <p>${alquiler.habitaciones}</p>
            <i class="fa-solid fa-bath baño"></i> <p>${alquiler.baños}</p>
          </div>
          <div class="venta-costo">
            <i class="fa-solid fa-dollar-sign"></i> <p>$${alquiler.costo}</p>
          </div>
          ${fumar}
          ${animales}
        </div>
      </div>
    `;
  }
  
  alquileres.innerHTML = template1;