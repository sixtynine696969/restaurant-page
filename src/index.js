import { addHeader } from "./scripts/header";
import { addMain, switchMain } from "./scripts/main_element";
import { addFooter } from "./scripts/footer";
import './style.css'

function start() {
    addHeader();
    addMain();
    addFooter();
    switchMain('home')
}


start();
document.querySelector('button#home').classList.add('selected')

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        // remove selected class from all buttons
        buttons.forEach(btnToUnselect => {
            btnToUnselect.classList.remove('selected');
        })
        // add selected class to clicked button
        button.classList.add('selected');
        
        switchMain(button.id);
    })
})