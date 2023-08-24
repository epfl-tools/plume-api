import { JSDOM } from 'jsdom';

export default async () => {

    
    const res = await fetch('https://studentsplace4u-crissier.com/logements/116-35?studio=Tous%20les%20studios&dispo=Toutes%20les%20disponibilit%C3%A9s&part=1');
    const html = await res.text();

    const dom = new JSDOM(html);

    const newEstablishmentCount = dom.window.document.querySelectorAll('#corps > tr').length;

    return newEstablishmentCount;

};
