
function makeHeader() {
const navarea = document.querySelector('.header');
         
          const title = document.createElement('div');
          const title2 = document.createElement('div');
          const navMenu = document.createElement('div');
          const navContact = document.createElement('div');

          title.classList.add('title');
          title2.classList.add('title2');
          navMenu.classList.add('navMenu');
          navContact.classList.add('navContact');

          title.textContent     = 'Poseidon';
          title2.textContent    = 'Dinner Cruises';
          navMenu.textContent   ='Menu';
          navContact.textContent='Sailings';

    navarea.appendChild(title);
    navarea.appendChild(title2);
    navarea.appendChild(navMenu);
    navarea.appendChild(navContact);

};

export { makeHeader }