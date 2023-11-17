let toggleMode = document.querySelector('.toggleMode');
let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');
let sandwich = document.querySelector('.sandwich');
let links = document.getElementsByClassName('link');
let sections = document.getElementsByClassName('section');
let contents = document.getElementsByClassName('content');
let spans = document.getElementsByClassName('span');


let whereToApply = {
    header:document.querySelector('.header'),
    body:document.querySelector('.body'),
    searchLabel: document.querySelector('.search_label'),
    main: document.querySelector('.main'),
    aside:document.querySelector('.aside'),
    footer: document.querySelector('.footer'),
    links: document.getElementsByClassName('.link'),
    logout: document.querySelector('.logout'),
    logo:document.querySelector('.logo'),
}

let darkColours = {
    darker:'darkblue;',
    dark:'#616861',
    accent:'white',
    purple:'purple'
}
let lightColours = {
    lighter:'white',
    light:'lightgrey',
    accent:'black',
    purple:'purple'
}
let lightMode = true;
function lightsOut(){
    whereToApply.body.style = `background-color:${darkColours.dark}`;
    whereToApply.footer.style = `color:${darkColours.accent}; background-color:${darkColours.darker}`;
    whereToApply.header.style = `background-color:${darkColours.darker}`;
    whereToApply.aside.style =`background-color:${darkColours.darker}`;
    whereToApply.logo.src = './assets/logo_dark.png';
    whereToApply.main.style = `background-color:${darkColours.darker}`;
    whereToApply.searchLabel = `border: 1px solid ${darkColours.accent};`;
    sandwich.style = `color:${darkColours.accent}`;
    for(let link of links){
        link.style = `color:${darkColours.accent}`;
    }
    for(let span of spans){
        span.style = `color:${darkColours.accent}`
    }
    for(let content of contents){
        content.style = `background-color: ${darkColours.dark}`
    }
    toggleMode.style = `background-color:${darkColours.darker}; border:1px solid ${darkColours.accent};`}

function lightsOn(){
    whereToApply.body.style = `background-color:${lightColours.light}`;
    whereToApply.footer.style = `color:${lightColours.accent};background-color:${lightColours.lighter}`;
    whereToApply.header.style = `background-color:${lightColours.lighter}`;
    whereToApply.aside.style =`background-color:${lightColours.lighter}`;
    whereToApply.logo.src = './assets/logo_light.png';
    whereToApply.main.style = `background-color:${lightColours.lighter}`;
    sandwich.style = `color:${lightColours.accent}`;
    for(let link of links){
        link.style = `color:${lightColours.accent}`;
    }
    for(let span of spans){
        span.style = `color:${lightColours.accent}`
    }
    for(let content of contents){
        content.style = `background-color: ${lightColours.light}`
    }
    toggleMode.style = `background-color:lightblue; border:1px solid ${lightColours.accent};`}
    


sandwich.addEventListener('click',() => {
    console.log('Sandwich clicado')
    whereToApply.aside.classList.toggle('hidden')
})
toggleMode.addEventListener('click', () => {
    console.log('Botão clicado')
    if (lightMode == true) {
        lightMode = false;
        lightsOut();
        sun.style.animation = 'rollIn 1s linear';
        moon.classList.remove('hidden');
        moon.style.animation = 'fadeIn 0.4s linear';
        setTimeout(() => {
            sun.classList.add('hidden')
        },350);
    }
    else{
        lightMode = true;
        lightsOn();
        moon.style.animation = 'rollOut 1s linear';
        sun.classList.remove('hidden');
        sun.style.animation = 'fadeIn 0.4s linear';
        setTimeout(() => {
            moon.classList.add('hidden')
        },350);
    }
});

