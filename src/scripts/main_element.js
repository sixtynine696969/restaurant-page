import { content } from "./shared-vars";

const getMain = () => document.querySelector('main');
// const createElement = (tag) => document.createElement(tag)

function addMain() {
    const main = document.createElement('main');
    content.appendChild(main);
}

function addHome() {
    const main = getMain();

    main.classList.add('home');

    const p = document.createElement('p');
    p.textContent = 'Taste The Sea';
    main.appendChild(p);
}

function addContact() {
    const main = getMain();
    main.classList.add('contact');

    const card = document.createElement('div');
    card.classList.add('card');
    
    const obj = {
        'Phone number: ': '123456789',
        'Email: ': 'seafoodcentral@example.com',
        'Address: ': '21 Jump Street, NYC, USA',
    };

    for (const i in obj) {
        const p = document.createElement('p');
        p.textContent = i;
        
        const span = document.createElement('span');
        span.textContent = obj[i];

        p.appendChild(span);
        card.appendChild(p);
    }

    main.appendChild(card);
}

function makeMenuObj(src, dish, ingredients, price) {
    return { src, dish, ingredients, price };
}

function addMenu() {
    const main = getMain();
    main.classList.add('menu');
    
    const arr = [
        makeMenuObj(
            '../src/images/shrimp.jpg',
            'Spicy Shrimp',
            'Fresh fish fillets, Chili powder, Paprika, Garlic paste, Ginger paste, Onion, Tomatoes, Green chilies, Lemon juice, Salt, Cooking oil, Fresh cilantro.',
            '$32.99',
        ),
        makeMenuObj(
            '../src/images/salmon.webp',
            'Baked Salmon',
            'Salmon, Butter, Lemon Juice, Garlic, Parsley, Dill.',
            '$58.99',
        ),
        makeMenuObj(
            '../src/images/octopus.jpg',
            'Cooked Octopus',
            'Cooked octopus tentacles, Potatoes, Sea salt, Ground pepper, Extra-virgin olive oil, Chopped thyme, Cured Spanish chorizo.',
            '$73.99',
        ),
        makeMenuObj(
            '../src/images/catfish.webp',
            'Crispy Baked Catfish',
            'Catfish fillets, Seasoning, Olive oil, Lemon slices.',
            '$23.99',
        ),
    ]

    for (const item of arr) {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const details = document.createElement('div');
        details.classList.add('details')

        for(const key in item) {
            if (key === 'src') {
                const img = document.createElement('img');
                img['src'] = item[key];
                card.appendChild(img);
            } else {
                const p = document.createElement('p');
                p.classList.add(key);
                p.textContent = item[key];
                details.appendChild(p);
            }
            card.appendChild(details);
            main.appendChild(card);
        }
    }
}

function clearMain() {
    const main = getMain();
    main.classList.forEach(c => main.classList.remove(c));
    main.innerHTML = '';
}

function switchMain(tab) {
    
    clearMain();

    switch (tab) {
        case 'home':
            addHome();
            break;
        case 'menu':
            addMenu();
            break;
        case 'contact':
            addContact();
            break;
    }
}

export { addMain, switchMain };