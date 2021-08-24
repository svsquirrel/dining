function makeSailingPage() {
    const container = document.querySelector('.container');

    const mainSail = document.createElement('div');
        mainSail.classList.add('mainsail');

        const stpete = document.createElement('img');
        const info = document.createElement('p');
        const map = document.createElement('iframe');

        stpete.classList.add('stpeteimg');
        info.classList.add('message');
        map.classList.add('map');

        stpete.src = 'images/stpetenight.jpg';
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14120.687174785955!2d-82.62618506879569!3d27.773680327259182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e19ea927d40f%3A0x10581ffdf1959098!2sSt.%20Petersburg%20Municipal%20Marina!5e0!3m2!1sen!2sus!4v1629725220875!5m2!1sen!2sus";
        info.innerHTML = 'We sail from beautiful downtown St Petersburg, Florida<br>\
                          Call us for sailing dates and times. <br> \
                          We can\'t wait for you to join us.'

        mainSail.appendChild(stpete);
        mainSail.appendChild(info);
        mainSail.appendChild(map);

    container.appendChild(mainSail);
}
    export { makeSailingPage }