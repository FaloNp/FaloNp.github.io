let Check = document.getElementById('return');
let Click = document.getElementsByClassName('openfoto')[0];
let Field = document.getElementsByClassName('field')[0];
let Stop = document.getElementsByClassName('cointainer')[0];
let b = [];
let text = [];
for (var i=0;i<4;i++)
{
    b[i] = document.getElementsByClassName('PBNO')[i];
    text[i] = document.getElementsByClassName('PBTE')[i];
}

//////////////////////////////////////////////////////////////
const hamburger = document.querySelector('.MENU');
const nav = document.querySelector('.navigation');
const handleClick = () => {
    hamburger.classList.toggle('MENU_CLICKED');
    nav.classList.toggle('navigation--active');
    if (nav.classList.contains('navigation--active')){
       
       
       /* Stop.classList.add('cointainerStop');
        document.getElementsByClassName('Zdjecia')[0].scrollIntoView({  
        });*/
    }
    /*
    else{
        Stop.classList.remove('cointainerStop');
        document.getElementsByClassName('Zdjecia')[0].scrollIntoView({  
        });
    }*/
    }
    hamburger.addEventListener('click', handleClick);



////////////////////////////////////////////////////////////// 
    var minutesLabel = document.getElementsByClassName('script')[0];
    var base = 5000;
    var totalSeconds = 0;
    setInterval(setTime, 1000);

    function setTime() {
        ++totalSeconds;
        minutesLabel.innerHTML = base + (parseInt(totalSeconds / 60));
    }
//////////////////////////////////////////////////////////////
var w;
function displayWindowSize() {
var w = document.documentElement.clientWidth;
console.log('Width: ' + w);
    if (w > 1099) {
        let btn_main = document.getElementsByClassName('menu_button')[0];
        btn_main.addEventListener('click', () => {
            document.getElementsByClassName('Strona_glowna')[0].scrollIntoView({
                behavior: 'smooth',
            });
        });
        let btn_information = document.getElementsByClassName('menu_button')[1];
        btn_information.addEventListener('click', () => {
            document.getElementsByClassName('Info')[0].scrollIntoView({
                behavior: 'smooth',
            });
            b.style.width= '100%';
        });
        let btn_zdjecia = document.getElementsByClassName('menu_button')[2];
        btn_zdjecia.addEventListener('click', () => {
            document.getElementsByClassName('Zdjecia')[0].scrollIntoView({
                behavior: 'smooth',
            });
        });
        let btn_kontakt = document.getElementsByClassName('menu_button')[3];
        btn_kontakt.addEventListener('click', () => {
            document.getElementById('Information').scrollIntoView({
                behavior: 'smooth',
            });
        });
    } else {
        let btn_main = document.getElementsByClassName('menu_mobile')[0];
        btn_main.addEventListener('click', () => {
            document.getElementsByClassName('Strona_glowna')[0].scrollIntoView({
                behavior: 'smooth',
            });
        });
        let btn_information = document.getElementsByClassName('menu_mobile')[1];
        btn_information.addEventListener('click', () => {
            document.getElementsByClassName('Info')[0].scrollIntoView({
                behavior: 'smooth',
            });
            b.style.width= '100%';
        });
        let btn_zdjecia = document.getElementsByClassName('menu_mobile')[2];
        btn_zdjecia.addEventListener('click', () => {
            document.getElementsByClassName('Zdjecia')[0].scrollIntoView({
                behavior: 'smooth',
            });
        });
        let btn_kontakt = document.getElementsByClassName('menu_mobile')[3];
        btn_kontakt.addEventListener('click', () => {
            document.getElementById('Information').scrollIntoView({
                behavior: 'smooth',
            });
        });
    }
}
// Attaching the event listener function to window's resize event
window.addEventListener('resize', displayWindowSize);
// Calling the function for the first time
displayWindowSize();
let Scroll = document.getElementsByClassName('scrollLayer')[0];
Scroll.addEventListener('click', () => {
    document.getElementsByClassName('Pho')[0].scrollIntoView({
        behavior: 'smooth',
    });
});
////////////////////////////////////////////////////////////

function changetext() {
    
}



window.addEventListener('scroll', () => {
for (var i=0;i<4;i++)
{
	var position = b[0].getBoundingClientRect();
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
        if (i==0){
            var lenght = 100 + "%";
        }
        if (i==1){
            var lenght = 50 + "%";
        }
        if (i==2){
            var lenght = 10 + "%";
        }
        if (i==3){
            var lenght = 20 + "%";
        }
        b[i].style.width= lenght;
        text[i].innerHTML = lenght;  
	}
}    
});








////////////////////////////////////////////////////////////


Click.addEventListener('click', () => {
        Field.classList.add('activefield');
        Stop.classList.add('cointainerStop');
        document.getElementsByClassName('Zdjecia')[0].scrollIntoView({  
        });

});

Check.addEventListener('click', () => {
    if (Field.classList.contains('activefield')){
        Field.classList.remove('activefield');
        Stop.classList.remove('cointainerStop');
        document.getElementsByClassName('Zdjecia')[0].scrollIntoView({  
        });
    }
});

