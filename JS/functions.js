function getRandomUser() {
    return fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => data.results[0])
      .catch(error => console.error(error));
  }
  
getRandomUser().then(persona => {
    document.getElementById('imagenPerfil').src = persona.picture.large;
    document.getElementById('nombre').textContent = `${persona.name.first} ${persona.name.last}`;
    document.getElementById('edad').textContent = persona.dob.age;
    document.getElementById('email').textContent = persona.email;
    document.getElementById('telefono').textContent = persona.cell;
    document.getElementById('ciudad').textContent = persona.location.city;
    document.getElementById('pais').textContent = persona.location.country;
    document.getElementById('direccion').textContent = persona.location.street.number +" "+ persona.location.street.name;

    if(persona.gender=="male"){
        document.getElementById('genero').textContent = "Hombre"
    } else {
        document.getElementById('genero').textContent = "Mujer"
    }
  });

getRandomUser().then(persona => {
    const experienciaLaboral = [
      {
        empresa: 'Empresa 1',
        puesto: 'Puesto 1',
        inicio: 'Enero 2020',
        fin: 'Presente'
      },
      {
        empresa: 'Empresa 2',
        puesto: 'Puesto 2',
        inicio: 'Mayo 2019',
        fin: 'Diciembre 2019'
      },
      {
        empresa: 'Empresa 3',
        puesto: 'Puesto 3',
        inicio: 'Septiembre 2018',
        fin: 'Marzo 2019'
      }
    ];

    const listarExpLab = document.getElementById('experiencia');
    experienciaLaboral.forEach(experienciaLaboral => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h3>${experienciaLaboral.empresa}</h3>
        <p>${experienciaLaboral.puesto} (${experienciaLaboral.inicio} - ${experienciaLaboral.fin})</p>
        <h4>Nunc non lorem sem. Ut enim erat, feugiat non rutrum eu, sagittis iaculis massa. Morbi feugiat nisl 
        ut fringilla cursus. Vivamus accumsan augue posuere, ultricies nisl vitae, varius ante. Aliquam 
        suscipit arcu enim, viverra porta augue tincidunt et.</h4>
      `;
      listarExpLab.appendChild(li);
    });
  });

getRandomUser().then(persona => {
    const educacion = [
        {
          titulo: 'Licenciatura en Informática',
          institucion: 'Universidad 1',
          inicio: 'Agosto 2014',
          fin: 'Diciembre 2018'
        },
        {
          titulo: 'Maestría en Ciencias de la Computación',
          institucion: 'Universidad 2',
          inicio: 'Enero 2019',
          fin: 'Presente'
        }
      ];

    const listaEducacion = document.getElementById('educacion');
    educacion.forEach(educacion => {
        const li = document.createElement('li');
        li.innerHTML = `
          <h3>${educacion.titulo}</h3>
          <p>${educacion.institucion} (${educacion.inicio} - ${educacion.fin})</p>
        `;
        listaEducacion.appendChild(li);
    });
});

getRandomUser().then(persona => {
    const habilidades = [
        'Desarrollo web',
        'Diseño de interfaces de usuario',
        'JavaScript',
        'React',
        'HTML',
        'CSS',
        'Gestión de proyectos',
        'Trabajo en equipo'
    ]

    const listaHabilidades = document.getElementById('habilidades');
    habilidades.forEach(habilidades => {
        const li = document.createElement('li');
        li.textContent = habilidades;
        listaHabilidades.appendChild(li);
    });
});

getRandomUser().then(persona => {
    const idiomas = [
        {
          idioma: 'Español',
          nivel: 'Nativo'
        },
        {
          idioma: 'Ingles',
          nivel: 'Profesional'
        }
      ];

    const listaIdiomas = document.getElementById('idiomas');
    idiomas.forEach(idiomas => {
        const li = document.createElement('li');
        li.innerHTML = `
          <h3>${idiomas.idioma}</h3>
          <p>Nivel: ${idiomas.nivel}</p>
        `;
        listaIdiomas.appendChild(li);
    });
});