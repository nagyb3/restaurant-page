export function componentMenu() {
    const element = document.querySelector('#content');

    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }

    const headerdiv = document.createElement('div');
    headerdiv.classList.add('header');

    const headerh1 = document.createElement('h1');
    headerh1.textContent = 'Our Menu';
    headerdiv.appendChild(headerh1);

    element.appendChild(headerdiv);


    return element
}