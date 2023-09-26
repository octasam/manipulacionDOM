// console.log('Hola');
/**
 * OBTENER ELEMENTOS
 * ID - 
 * CLASE - Obternemos varios elementos que coincidan
 * querySelector - Solo regresa el primer nodo que coindice, y este puede ser un ID o una clase
 * querySelectorAll - Obtiene una lista de nodos
*/

const title = document.getElementById('title1');
const subtitle = document.getElementsByClassName('subtitulo');
const secondTitle = document.querySelector('.subtitulo');
const subtitles = document.querySelectorAll('.subtitulo');

console.log(title, subtitle, subtitles);

secondTitle.innerHTML = "DOM API";

/**CREACION DEL PERFIL DEL USUARIO */
const user = {
    name:'Tony Montana',
    age: 25,
    email: 'tony@mail.com',
    favFilms: ['Goodfellas','Scarface','Blood in blood out', 'Godfather I'],
}

function createUser(user){
    document.getElementById('username').textContent = 'name: ' + user.name;
    document.getElementById('age').textContent = 'age: ' + user.age;
    document.getElementById('mail').textContent = 'email: ' + user.email;

    const ul = document.getElementById('fav-films')
    
    user.favFilms.forEach(film => {
        const li = document.createElement('li');
        li.textContent = film;
        ul.appendChild(li);
    })    
}

// function createUser(user){
//     document.getElementById('username').textContent = 'name: ' + user.name;
//     document.getElementById('age').textContent = 'age: ' + user.age;
//     document.getElementById('mail').textContent = 'email: ' + user.email

//     const ul = document.getElementById('fav-films');
    
//     user.favFilms.forEach(film => {
//         const li = document.createElement('li');
//         li.textContent = film;
//         ul.appendChild(li);
//     })    
// }

createUser(user);

// function createUser2(users){
//     document.getElementById('username').textContent = users.name;
//     document.getElementById('age').textContent = users.age;
//     document.getElementById('description').textContent = users.description

//     const ul = document.getElementById('fav-music');
    
//     users.fav_music.forEach(band => {
//         const li = document.createElement('li');
//         li.textContent = band;
//         ul.appendChild(li);
//     })    
// }

// createUser2(users);
/**
 * EVENTOS
*/

const inputName = document.getElementById('name');
const userName = document.getElementById('username');

/*
inputName.addEventListener('input', e => {
    console.log(e.target.value);
    userName.textContent = e.target.value;
})
*/

/** Esta constante es nuestro elemento bonton, a nuesto elemento le agregamos un listener
 * cada de demos clic vamos aejecutar la funcion, callback
 * Su contenido de texto de texto ahora va a ser input.name.value
 * 
 * Es bueno para optimizar HTML, solo se ejecuta 1 sola vez
 * Rinde mas memoria
 */

const profileBtn = document.getElementById('ProfileBtn');
profileBtn.addEventListener('click',() => {
    userName.textContent = inputName.value;
})

const CARD_SECTION = document.getElementById('profiles');

const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]

/////////////////////////////////////
// - Obtner la info
// - Crear un contenedor para perfil clase = profile
// - Crear elemento para user_name
// - Crear elemento para description
// - Crear elemento para age
// - Crear elemento para lista de bandas  --> iterar por cada banda 
/////////////////////////////////////

const createCard = () => {
    const card = document.createElement('div'); //creamos un div
    card.classList.add('profile', 'container'); //le damos una clase a ese div para que quede con la misma sintaxis que en el div de HTML
    return card;
}
//Creamos un objeto
const createDescription = () => {
    const userElements = {
        user_name: document.createElement('h2'),
        age: document.createElement('h3'),
        description: document.createElement('p'),
        bands: [],
    }
    return userElements;
}

const populateElement = (user, userElements) => {
    // userElements.id.textContent = user.id;
    userElements.user_name.textContent = user.user_name;
    userElements.age.textContent = user.age;
    userElements.description.textContent = user.description;
    
    // const ul = document.createElement('fav-bands')
    
    // user.fav_music.bands.forEach(band => {
    //     const li = document.createElement('li');
    //     li.textContent = band;
    //     ul.appendChild(li);
    // }) 

    const bandList = user.fav_music.bands.map(e => {
        const pElement = document.createElement('p');
        pElement.textContent = e;
        return pElement;
    })
    userElements.bands = bandList;

    console.log(bandList);
    // console.log(bandList);
    // return userElements.bands;
    return userElements;
}

const renderElements = (card, userElements) => {
    card.append(userElements.user_name,userElements.age,userElements.description, userElements.bands[0],userElements.bands[1],userElements.bands[2],userElements.bands[3])
}

users.forEach(user => {
    const card = createCard();
    const userElements = createDescription();

    const elementsWithData = populateElement (user, userElements);
    renderElements(card, elementsWithData);
    CARD_SECTION.append(card);
})

// EJERCICIO
// 1. Agregar las bandas
// PUSH
// Evitar las bandas para el ejercicio 2
// 2. Obtner la info del usuario desde inputs y mostrar en tarjetas
// Al menos deben tener 2 commits

