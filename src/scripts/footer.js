import { content } from "./shared-vars";

function addFooter() {
    const footer = document.createElement('footer');

    footer.textContent = 'Copyright &copy; sixtynine696969 2023';
    content.appendChild(footer);
}

export { addFooter };