const hamburger = document.querySelector('.MENU');
const nav = document.querySelector('.navigation');
const handleClick = () => {
    hamburger.classList.toggle('MENU_CLICKED');
    nav.classList.toggle('navigation--active');
    }
    hamburger.addEventListener('click', handleClick);
  
    var minutesLabel = document.getElementsByClassName("script")[0];
    var base = 5000;
    var totalSeconds = 0;
    setInterval(setTime, 1000);

    function setTime() {
        ++totalSeconds;
        minutesLabel.innerHTML = base + (parseInt(totalSeconds / 60));
        //minutesLabel.innerHTML = base + totalSeconds*1;
    }

var w;
function displayWindowSize() {
var w = document.documentElement.clientWidth;
console.log("Width: " + w);
    if (w > 1099) {
        let btn_main = document.getElementsByClassName('menu_button')[0];
        btn_main.addEventListener("click", () => {
            document.getElementsByClassName('Strona_glowna')[0].scrollIntoView({
                behavior: 'smooth',
            });
        });
        let btn_information = document.getElementsByClassName('menu_button')[1];
        btn_information.addEventListener("click", () => {
            document.getElementsByClassName('Info')[0].scrollIntoView({
                behavior: 'smooth',
            });
        });
        let btn_zdjecia = document.getElementsByClassName('menu_button')[2];
        btn_zdjecia.addEventListener("click", () => {
            document.getElementsByClassName('Zdjecia')[0].scrollIntoView({
                behavior: 'smooth',
            });
        });
        let btn_kontakt = document.getElementsByClassName('menu_button')[3];
        btn_kontakt.addEventListener("click", () => {
            document.getElementById('Information').scrollIntoView({
                behavior: 'smooth',
            });
        });
    } else {
        let btn_main = document.getElementsByClassName('menu_mobile')[0];
        btn_main.addEventListener("click", () => {
            document.getElementsByClassName('Strona_glowna')[0].scrollIntoView({
                behavior: 'smooth',
            });
        });
        let btn_information = document.getElementsByClassName('menu_mobile')[1];
        btn_information.addEventListener("click", () => {
            document.getElementsByClassName('Info')[0].scrollIntoView({
                behavior: 'smooth',
            });
        });
        let btn_zdjecia = document.getElementsByClassName('menu_mobile')[2];
        btn_zdjecia.addEventListener("click", () => {
            document.getElementsByClassName('Zdjecia')[0].scrollIntoView({
                behavior: 'smooth',
            });
        });
        let btn_kontakt = document.getElementsByClassName('menu_mobile')[3];
        btn_kontakt.addEventListener("click", () => {
            document.getElementById('Information').scrollIntoView({
                behavior: 'smooth',
            });
        });
    }
}
// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);
// Calling the function for the first time
displayWindowSize();
let Scroll = document.getElementsByClassName('scrollLayer')[0];
Scroll.addEventListener("click", () => {
    document.getElementById('Layer_Menu').scrollIntoView({
        behavior: 'smooth',
    });
});

























let Check = document.getElementById('return');
let Click = document.getElementsByClassName('openfoto')[0];
let Field = document.getElementsByClassName('field')[0];
let Stop = document.getElementsByClassName('cointainer')[0];
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

