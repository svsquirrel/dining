import { makeHomePage } from "./poseidon";
import { makeHeader } from "./header";
import { makeMenuPage } from "./menu";
import { makeSailingPage } from "./sailings";

makeHeader();
makeHomePage();

const container = document.querySelector('.container')

const menu = document.querySelector('.navMenu');
menu.addEventListener('click', () => {
    container.innerHTML = '';
    makeMenuPage();
})

const sailing = document.querySelector('.navContact');
sailing.addEventListener('click', () => {
    container.innerHTML = '';
    makeSailingPage();
})

const poseidon = document.querySelector('.title');
poseidon.addEventListener('click', () => {
    container.innerHTML = '';
    makeHomePage();
})




