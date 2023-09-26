const inputName = document.getElementById('name');
const userName = document.getElementById('username');

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