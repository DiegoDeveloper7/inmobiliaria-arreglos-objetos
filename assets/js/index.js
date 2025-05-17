
const departamentos = [
    {
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      nombre: 'Apartamento de lujo en zona exclusiva',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: '4 Habitaciones |',
      baños: '4 Baños',
      costo: 5000,
      smoke: false,
      pets: false
    },
    // Puedes agregar más objetos aquí

    {
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        nombre: 'Apartamento acogedor en la montaña',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: '2 Habitaciones |',
        baños: '1 Baños',
        costo: 1200,
        smoke: true,
        pets: true
      },



  ];
  
  const contenedor = document.getElementById('contenedor-tarjetas');
  const plantilla = document.querySelector('.tarjeta');
  
  // Limpia el contenedor (menos la plantilla)
  contenedor.innerHTML = '';
  
  departamentos.forEach(depto => {
    const tarjetaClon = plantilla.cloneNode(true);
  
    tarjetaClon.querySelector('#img').src = depto.src;
    tarjetaClon.querySelector('#titulo').textContent = depto.nombre;
    tarjetaClon.querySelector('#descripcion').textContent = depto.descripcion;
    tarjetaClon.querySelector('#ubicacion').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${depto.ubicacion}`;
    tarjetaClon.querySelector('#habs-banos').innerHTML = `<i class="fas fa-bed"></i> ${depto.habitaciones} <i class="fas fa-bath"></i> ${depto.baños}`;
    tarjetaClon.querySelector('#precio').innerHTML = `<i class="fas fa-dollar-sign"></i> ${depto.costo.toLocaleString('es-CL')}`;
    //tarjetaClon.querySelector('#smoke').style.display = depto.smoke ? 'none' : 'block';
    //tarjetaClon.querySelector('#pets').style.display = depto.pets ? 'none' : 'block';

    // Para "smoke"
const smokeP = tarjetaClon.querySelector('#smoke');
if (depto.smoke) {
  smokeP.className = 'text-success'; // Cambia el color del texto
  smokeP.innerHTML = '<i class="fas fa-smoking"></i> Permitido fumar';
} else {
  smokeP.className = 'text-danger';
  smokeP.innerHTML = '<i class="fas fa-smoking-ban"></i> No se permite fumar';
}

// Para "pets"
const petsP = tarjetaClon.querySelector('#pets');
if (depto.pets) {
  petsP.className = 'text-success';
  petsP.innerHTML = '<i class="fas fa-paw"></i> Mascotas permitidas';
} else {
  petsP.className = 'text-danger';
  petsP.innerHTML = '<i class="fa-solid fa-ban"></i> No se permiten mascotas';
}
  
    contenedor.appendChild(tarjetaClon);

  });