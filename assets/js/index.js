
const departamentos = [
 
    // 1ra tarjeta - index  

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
    // 2da tarjeta - index

    {
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        nombre: 'Apartamento acogedor en la montaña',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: '2 Habitaciones |',
        baños: '1 Baño',
        costo: 1200,
        smoke: true,
        pets: true
      },

    // 3ra tarjeta - index 

      {
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        nombre: 'Penthouse de lujo con terraza panorámica',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue,  Skyview City, CA 56789',
        habitaciones: '3 Habitaciones |',
        baños: '3 Baños',
        costo: 4500,
        smoke: false,
        pets: true
      },

      // 4ta tarjeta - out index 

      {
        src: './assets/imgs/casa1.jpg',
        nombre: 'Casa en Vitacura',
        descripcion: 'Una incrible casa familiar en un sector privilegiado de la ciudad de Santigao.',
        ubicacion: 'Avenida vitacura, Oriente 406',
        habitaciones: '5 Habitaciones |',
        baños: '4 Baños',
        costo: 1000000,
        smoke: true,
        pets: true
      },

      // 5ta tarjeta - out index 

      {
        src: './assets/imgs/depa2.webp',
        nombre: 'Departamento Las Condes',
        descripcion: 'Gran departamento en reconcido sector de Las Condes.',
        ubicacion: 'Avenida Padre Hurtado, Oriente 408',
        habitaciones: '3 Habitaciones |',
        baños: '2 Baños',
        costo: 400000,
        smoke: false,
        pets: true
      },

      // 6ta tarjeta - out index 

      {
        src: './assets/imgs/depa3.jpeg',
        nombre: 'Departamento Viña del Mar',
        descripcion: 'Excelente departamento en la Ciudad de Viña del Mar y sus Gaviotas.',
        ubicacion: 'Avenida del Deporte, Playa acapulco 407',
        habitaciones: '3 Habitaciones |',
        baños: '2 Baños',
        costo: 350000,
        smoke: true,
        pets: false
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