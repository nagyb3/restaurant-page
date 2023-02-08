export function componentContact() {
    const element = document.querySelector('#content');

    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }

    const headerdiv = document.createElement('div');
    headerdiv.classList.add('header');

    const headerh1 = document.createElement('h1');
    headerh1.textContent = 'Contact';
    headerdiv.appendChild(headerh1);

    element.appendChild(headerdiv);

    const unorderedList = document.createElement('ul')

    let li = document.createElement('li');
    li.textContent = 'Phone: +123 4567'
    unorderedList.appendChild(li);

    element.appendChild(unorderedList);


    return element
}