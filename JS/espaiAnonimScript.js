var plusBtn = document.querySelector('.plusBtn');
var closeBtn = document.querySelector('.closeBtn');
var postBtn = document.querySelector('.postBtn');

var secretInput = document.querySelector('.secretInput');;
var secrets = [{ "text": "\"No sé com dir als meus pares que després de tres anys fent la carrera de Dret ho vull deixar\"" }, { "text": "\"M'encanten les armes, entendre el seu mecanisme i la capacitat de mal o destrucció que poden causar\"" }, { "text": "\"Estic fent una carrera i treballant a dues empreses alhora. La gent em pregunta que com m’ho faig i la veritat és que no sé d’on trec les forces… Algun dia arribaré lluny. Tot esforç té la seva recompensa\"" }, { "text": "\"La meva mare sempre m'ha explicat que quan tenia entre 11-15 anys volia ser un nen. A dia d'avui mai li he preguntat si de veritat se sent dona, però per converses que hem tingut diu que són etapes, cosa que no tinc massa clar ja que crec que aquest problema el va pagar molt en mi. Quan vaig néixer la meva mare sempre em vestia amb roba de \"nen\" i em tallava el cabell com a tal, suposo que ho feia perquè el seu desig era tenir fills i no filles pel buit que va sentir durant la seva adolescència\"" }, { "text": "\"Aunque no sea algo que me guste, me imagino relaciones sexuales con un 90% de las personas con las que me cruzo\"" }, { "text": "\"Llevo bastante tiempo con mi novia pero siento algo por otra persona\"" }, { "text": "\"Quan era petita, els meus \"amics\" em van deixar en un lavabo sense paper. En comptes de donar-me el seu, se'n van anar. Vaig passar dues hores allà sola. Van tornar a veure si seguia allà, van riure i se'n van tornar anar. Vaig haver de tornar a casa amb la merda enganxada al cul. No sé si algún cop seré capaç de veure aquesta gent sense bloquejar-me o fer algo al respecte\"" }, { "text": "\"No és un secret però em fa por exterioritzar-ho. Estic coneixent a un noi i no tinc clar si em fa més por enamorar-me o no enamorar-me\"" }, { "text": "\"No he aprofitat la meva vida\"" }, { "text": "\"Moltes vegades sento que mai seré prou important per ningú, ni per mi mateixa\"" }, { "text": "\"M’acaben de diagnosticar vih, i tothom s’està adonant compte de que estic raro, però sento que estic millor sense que ningú ho sàpigues perquè així jo sóc l’únic capaç de gestionar les inseguretats, problemes i autoestima que han estat afectats per la notícia sense que ningú s’interposi\"" }, { "text": "\"A vegades m’agradaria poder explicar certs secrets al meu entorn familiar però depèn del moment no em sento còmode per fer-ho\"" }, { "text": "\"De fiesta una vez me lié con la mejor amiga de mi novia, ahora no sé qué hacer porque siento que me gusta más su amiga que mi novia pero no se lo puedo decir porque sé que lo pasaría muy mal\"" }, { "text": "\"En una ocasión, mi ex pareja llegó a darse un cabezazo contra la pared a propósito en una discusión (teniendo ya de por sí lesiones craneales por un accidente del cual le dejó con alguna secuela psicológica). Después de esto quedó convulsionando y tuve que llamar a la ambulancia por lo que podría pasar. Después de esto lo acabamos dejando para que no hubieran más problemas\"" }, { "text": "\"Fa dos anys vaig patir una pallissa per part del meu pare i des de petita pateixo violència domèstica\"" }, { "text": "\"A vegades m’agradaria tenir una malaltia terminal per sentir que els meus pares es preocupen per mi\"" }, { "text": "\"Avui, la meva germana petita s'ha sincerat amb els pares confessant-los que està embarassada, i ells li han donat tot el seu suport. Els fa il·lusió ser avis. Tot estaria bé si no fos perquè ja m'estan pressionant perquè me'n vagi de casa i deixi la meva habitació al nadó\"" }, { "text": "\"La setmana pasada, volví de Erasmus tras 6 meses en Italia. Antes de ir rompí con mi pareja porque no podía prometerle que le sería fiel. He vuelto sin haberme comido un rosco. Él empezó a salir con una chica adorable el mes pasado. Soy retrasada.\"" }, { "text": "\"Fa uns mesos, em vaig gastar 180€ a reparar el cotxe que em van obrir per emportar-se els 50 cèntims que tenia sempre a dins per agafar els carros al supermercat\"" }];
if (localStorage.getItem('secrets')) {
    secrets = JSON.parse(localStorage.getItem('secrets'));
}

plusBtn.addEventListener('click', function () {
    var postMaker = document.querySelector('.postMaker');
    postMaker.classList.add('show');
    console.log('Post Maker Opened')
});
closeBtn.addEventListener('click', function () {
    var postMaker = document.querySelector('.postMaker');
    postMaker.classList.remove('show');
    console.log('Post Maker Closed')
});

postBtn.addEventListener('click', function () {
    let data = {
        text: '"' + secretInput.value + '"'
    }
    console.log('Dades:', data);

    secrets.push(data);

    localStorage.setItem('secrets', JSON.stringify(secrets));

    console.log('post added to storage!')

    location.reload()
})

secrets.sort(() => Math.random() - 0.5);

let offset = 0;
secrets.forEach((data, index) => {
    if ((index - offset) % 3 === 0) {
        let p = document.createElement('p');
        p.innerHTML = data.text;
        document.querySelector('.col1').appendChild(p);
        console.log('posted secret on board!')
    }
});

offset = 1;
secrets.forEach((data, index) => {
    if ((index - offset) % 3 === 0) {
        let p = document.createElement('p');
        p.innerHTML = data.text;
        document.querySelector('.col2').appendChild(p);
        console.log('posted secret on board!')
    }
});

offset = 2;
secrets.forEach((data, index) => {
    if ((index - offset) % 3 === 0) {
        let p = document.createElement('p');
        p.innerHTML = data.text;
        document.querySelector('.col3').appendChild(p);
        console.log('posted secret on board!')
    }
});