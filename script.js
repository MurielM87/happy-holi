let images = [
    'url("clr01.png")',
    'url("clr02.png")',
    'url("clr03.png")',
    'url("clr04.png")',
    'url("clr05.png")',
    'url("clr06.png")',
    'url("clr07.png")',
    'url("clr08.png")',
    'url("clr09.png")',
    'url("clr10.png")',
    'url("clr11.png")',
    'url("clr12.png")',
    'url("clr13.png")',
    'url("clr14.png")',
    'url("clr15.png")',
    'url("clr16.png")',
];

let body = document.querySelector('body');
body.onclick = function(e) {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;

    let splash = document.createElement('span');
    splash.style.left = x + 'px';
    splash.style.top = y + 'px';

    let bg = images[Math.floor(Math.random() * images.length)];
    splash.style.backgroundImage = bg;

    this.appendChild(splash);

    setTimeout(() => {
        splash.remove()
    }, 4000);
}