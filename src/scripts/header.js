import { content } from "./shared-vars";

function addHeader() {
    const header = document.createElement('header');
    
    const p = document.createElement('p');
    p.textContent = 'Sea Food Central';

    header.appendChild(p);

    const nav = document.createElement('nav');
    const arr = ['Home', 'Menu', 'Contact'];

    arr.forEach(i => {
        const button = document.createElement('button')
        button.setAttribute('type', 'button');
        button.textContent = i;
        button.id = i.toLowerCase();

        nav.appendChild(button);
    })

    header.append(nav);
    content.appendChild(header);
}

export { addHeader };