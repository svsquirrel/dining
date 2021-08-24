function makeHomePage () {
    const container = document.querySelector('.container');
    
    const main = document.createElement('div');
        main.classList.add('main');
        const pageImage = document.createElement('img');
        const message  = document.createElement('div');

        pageImage.src = 'images/finedining.jpg';
        message.classList.add('about');

        message.innerHTML = 'Get lost in the tranquility of the sea while tantalizing <br> your senses with the finest cuisine';

    main.appendChild(pageImage);
    main.appendChild(message);

    container.appendChild(main);

}

export{ makeHomePage }