const departamentosVenta = [
 
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
      }
    ];

    const contenedor = document.getElementById('contenedor-tarjetas');
  const plantilla = document.querySelector('.tarjeta');
  
  // Limpia el contenedor (menos la plantilla)
  contenedor.innerHTML = '';
  
  departamentosVenta.forEach(depto => {
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


  // MODULO PROPIEDADES EN ARQUILER INDEX.HTML


  const departamentosArquiler = [

    // 1ra tarjeta - index  

  {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    nombre: ' Apartamento en el centro de la ciudad',
    descripcion: ' Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street,  Anytown, CA 91234',
    habitaciones: '2 Habitaciones |',
    baños: '2 Baños',
    costo: 2000,
    smoke: false,
    pets: true
  },


    // 2ra tarjeta - index  

    {
      src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      nombre: ' Apartamento luminoso con vista al mar',
      descripcion: ' Este hermoso apartamento ofrece una vista impresionante al mar',
      ubicacion: '456 Ocean Avenue,  Seaside Town, CA 56789',
      habitaciones: '3 Habitaciones |',
      baños: '3 Baños',
      costo: 2500,
      smoke: true,
      pets: true
    },


    // 3ra tarjeta - index  

  {
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    nombre: 'Condominio moderno en zona residencial',
    descripcion: ' Este elegante condominio moderno está ubicado en una tranquil  zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: '2 Habitaciones |',
    baños: '2 Baños',
    costo:  2200,
    smoke: false,
    pets: false
  }
];

const contenedor2 = document.getElementById('contenedor-tarjetasA');
const plantilla2 = document.querySelector('.tarjetaA');

 // Limpia el contenedor (menos la plantilla)
 contenedor2.innerHTML = '';


 departamentosArquiler.forEach(depto => {
  const tarjetaClon2 = plantilla2.cloneNode(true);


  tarjetaClon2.querySelector('#img').src = depto.src;
  tarjetaClon2.querySelector('#titulo').textContent = depto.nombre;
  tarjetaClon2.querySelector('#descripcion').textContent = depto.descripcion;
  tarjetaClon2.querySelector('#ubicacion').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${depto.ubicacion}`;
  tarjetaClon2.querySelector('#habs-banos').innerHTML = `<i class="fas fa-bed"></i> ${depto.habitaciones} <i class="fas fa-bath"></i> ${depto.baños}`;
  tarjetaClon2.querySelector('#precio').innerHTML = `<i class="fas fa-dollar-sign"></i> ${depto.costo.toLocaleString('es-CL')}`;


  // Para "smoke"
const smokeP = tarjetaClon2.querySelector('#smoke');
if (depto.smoke) {
smokeP.className = 'text-success'; // Cambia el color del texto
smokeP.innerHTML = '<i class="fas fa-smoking"></i> Permitido fumar';
} else {
smokeP.className = 'text-danger';
smokeP.innerHTML = '<i class="fas fa-smoking-ban"></i> No se permite fumar';
}

// Para "pets"
const petsP = tarjetaClon2.querySelector('#pets');
if (depto.pets) {
petsP.className = 'text-success';
petsP.innerHTML = '<i class="fas fa-paw"></i> Mascotas permitidas';
} else {
petsP.className = 'text-danger';
petsP.innerHTML = '<i class="fa-solid fa-ban"></i> No se permiten mascotas';
}

console.log(tarjetaClon2)

  contenedor2.appendChild(tarjetaClon2);

}); 