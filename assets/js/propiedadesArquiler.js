
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
  },


    // 4ta tarjeta - index  

    {
      src: './assets/imgs/depA1.jpg',
      nombre: 'Departamento en La Serena',
      descripcion: 'Hermoso departamento de Verano con piscina, muy cerca del Playa el Faro.',
      ubicacion: 'Avenida del Mar, La serena 406',
      habitaciones: '4',
      baños: '2',
      costo: 800,
      smoke: false,
      pets: true
    },


    // 5ta tarjeta - index  

  {
    src: './assets/imgs/depA2.jpg',
    nombre: 'Departamento en Valdivia',
    descripcion: 'Gran departamento en la ciudad de Valdivia, con vista la bosque.',
    ubicacion: 'Avenida Valdivia, 407 norte',
    habitaciones: '3',
    baños: '1',
    costo: 700,
    smoke: false,
    pets: true
  },


    // 6ta tarjeta - index  

    {
      src: './assets/imgs/depA3.jpg',
      nombre: 'Departamento en Berlin',
      descripcion: 'Exquisito departamento con la mejor vista a todo la ciudad de Berlin.',
      ubicacion: 'Ciudad de Belrin, Alemania 408',
      habitaciones: '7',
      baños: '3',
      costo: 5000,
      smoke: true,
      pets: false
    },


]


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