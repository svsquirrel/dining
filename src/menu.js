
function makeMenuPage() {
    
    const container = document.querySelector('.container');

    const mainMenu = document.createElement('div');
          mainMenu.classList.add('mainmenu');

        const img1  = document.createElement('img');
        const desc1 = document.createElement('div');
        const img2  = document.createElement('img');
        const desc2 = document.createElement('div');
        const img3  = document.createElement('img');
        const img5  = document.createElement('img');
        const desc5 = document.createElement('div');

            img1.src = 'images/salad.jpeg';
            img2.src = 'images/surfandturf.jpg';
            img3.src = 'images/scallops.jpg';
            img5.src = 'images/chocolatebar.jpg'; 

            img1.classList.add('menuimg','menuimg1');
            img2.classList.add('menuimg','menuimg2');
            img3.classList.add('menuimg','menuimg3');
            img5.classList.add('menuimg','menuimg5');

            desc1.classList.add('menudesc','menudesc1');
            desc2.classList.add('menudesc','menudesc2');
            desc5.classList.add('menudesc','menudesc5');

            desc1.innerHTML = "Start with a fragrant salad <br> created with crisp spring greens,<br>\
                               petite pansies, and a variety <br> of just picked veggies ";
            desc2.innerHTML = " Choose between our Angus beef tenderloin topped with a full lobster <br> \
                                or feast on fresh scallops just harvested from our local farms";
            desc5.innerHTML = "Finish with this delectable chocolate bar<br> and a sipping ice wine <br> \
                                while you relax on our deck and enjoy the sunset";

        
        mainMenu.appendChild(img1);
        mainMenu.appendChild(desc1);
        mainMenu.appendChild(img2);
        mainMenu.appendChild(desc2);
        mainMenu.appendChild(img3);
        mainMenu.appendChild(img5);
        mainMenu.appendChild(desc5);   
         
    container.appendChild(mainMenu);
 }

 export { makeMenuPage }