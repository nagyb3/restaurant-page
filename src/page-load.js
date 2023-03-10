import Icon from '../images/restaurantimage.jpg';

export function component() {
    const element = document.querySelector('#content');

    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }

    const headerdiv = document.createElement('div');
    headerdiv.classList.add('header');

    const headerh1 = document.createElement('h1');
    headerh1.textContent = 'My restaurant';

    headerdiv.appendChild(headerh1);
    element.appendChild(headerdiv);

    const myIcon = document.createElement('img');
    myIcon.src = Icon;
    myIcon.classList.add('restaurant-image');


    element.appendChild(myIcon);



    return element
}