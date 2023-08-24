import { JSDOM } from 'jsdom';

export default async () => {

    const res = await fetch('https://www.pilet-renaud.ch/etudiants_fr/residence/lausanne');
    const html = await res.text();

    const dom = new JSDOM(html);

    const newEstablishmentCount = dom.window.document.querySelectorAll('.item.row.logement').length;
    
    return newEstablishmentCount;

};
