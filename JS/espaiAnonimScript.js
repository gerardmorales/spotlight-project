var plusBtn = document.querySelector('.plusBtn');
var closeBtn = document.querySelector('.closeBtn');
var postBtn = document.querySelector('.postBtn');

var secretInput = document.querySelector('.secretInput');;
var secrets = [];
if (localStorage.getItem('secrets')) {
    secrets = JSON.parse(localStorage.getItem('secrets'));
}

delete secrets[0];

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