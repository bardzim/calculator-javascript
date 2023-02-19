window.addEventListener('DOMContentLoaded', init)

const opts = ['*', '/', '+', '-', '9','8','7','6','5','4','3','2','1','0','.']; //all keys 
const spec = ['*', '/', '+', '-'] // special funtion keys

function init() {
    document.title = "JavaScript Calculator"

    //container for calculator
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth = '600px';
    container.style.margin = 'auto';
    document.body.appendChild(container);

    //output field
    const output = document.createElement('input');
    output.setAttribute('type', 'text');
    output.classList.add('output');
    output.style.width = '100%';
    output.style.lineHeight = '50px';
    output.style.fontSize = '3em';
    output.style.textAlign = 'right';
    container.appendChild(output);

    //main container for keys
    const main = document.createElement('div');
    main.classList.add('main');
    main.style.width = '100%';
    container.appendChild(main)

}