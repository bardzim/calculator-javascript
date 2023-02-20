window.addEventListener('DOMContentLoaded', init)

const opts = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.']; // all keys 
const spec = ['*', '/', '+', '-'] // special funtion keys



function init() {
    document.title = "JavaScript Calculator";
    let dec = false;
    let eva = false;

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
    container.appendChild(main);

    //iteration through the keys
    opts.forEach(val => {
        console.log(val)
        btnMaker(val, addOutput)
    });

    btnMaker('=', evalOutput)
    btnMaker('C', clrOutput)

    function cOut(v) {
        output.style.border = v + ' 1px solid';
        output.style.color = v;
    }

    function evalOutput() {
        cOut('black')
        console.log('=');
        if(output.value === '') {
           cOut('red')
        } else if (eva){
           cOut('red')
        }
         else {
            output.value = eval(output.value)
        }
    }

    function clrOutput() {
        cOut('black')
        output.value = '';
    }

    //make buttons and add events to buttons
    function btnMaker(txt, myFunction) {
        let btn = document.createElement('button');
        btn.setAttribute('type', 'buttom');
        btn.style.width = '23%';
        btn.style.lineHeight = '50px';
        btn.style.margin = '1%';
        btn.style.fontSize = '2em';
        btn.val = txt;
        btn.textContent = txt;
        btn.addEventListener('click', myFunction);
        main.appendChild(btn);
    }

    //output keys in field
    function addOutput(e) {
        console.log(dec)
        cOut('black')
        console.log(e.target.val);
        let char = e.target.val;

        if(char == '.') {
            if(dec){
                char = '';
                cOut('red')
            } else {
                dec = true;
            }
        }

        eva = spec.includes(char)
        if(eva) {
            dec=false;
        }
        output.value += char;
    }

}