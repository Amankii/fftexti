document.addEventListener('DOMContentLoaded', ()=> {

    const textinput = document.querySelector('#textinput');
    const btn = document.querySelector('#btn');

    const synth = window.speechSynthesis;

//Disabled
    btn.disabled = true;

//onkeyup

    textinput.onkeyup = ()=> {

        if(textinput.value.length > 0){
            btn.disabled = false;
        }else{
            btn.disabled = true;
        }

    };


    btn.onclick = ()=> {

        const texttosp = new SpeechSynthesisUtterance(textinput.value);
        synth.speak(texttosp);

        return false;
    };

    const clear = document.querySelector('#clear');
    const span = document.querySelector('span');
    const errorSound = new Audio('./images/error.mp3');

    clear.onclick = ()=> {

        

        if(textinput.value.length > 0){
            reset()
        }else{
            span.innerHTML = 'I can\'t see anything to clear! 😡😤😠'
            setTimeout(() => {
                span.innerHTML = '';
            }, 5000);
            errorSound.play();

            return false;
        }

    };

});