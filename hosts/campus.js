import { JSDOM } from 'jsdom';

export default async () => {

    const res = await fetch('https://www.camp-us.ch/fr/appartements/1.5');
    const html = await res.text();

    const dom = new JSDOM(html);

    const newEstablishmentCount = Array.prototype.slice.call(dom.window.document.querySelectorAll('td.colState'))
        .filter((el) => el.textContent === 'disponible').length;

    return newEstablishmentCount;

};
