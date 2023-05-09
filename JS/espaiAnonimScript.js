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

function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
};

const array = ['.col1', '.col2', '.col3'];

secrets.forEach(data => {
    createElementPosts(data);
})

function createElementPosts(data) {
    let p = document.createElement('p');
    p.innerHTML = data.text;
    document.querySelector(getRandomItem(array)).appendChild(p);
    console.log('posted secret on board!')

}