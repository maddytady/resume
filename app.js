const res = document.querySelector('#result');
const disc = document.querySelector('#disc')
const resultBtn = document.querySelector('#result-btn');
const resetBtn = document.querySelector('#reset-btn');
const inputList = document.querySelector('.input-group');
const check = document.querySelector('.check');
const test = document.querySelectorAll('.bib');




inputList.addEventListener('keydown', event =>{
    if (event.target.classList.contains('text-field__input') && event.keyCode == 13){
        start();
        
    }
    
});

resultBtn.addEventListener('click', ()=>{
    start();
    
});

resetBtn.addEventListener('click', () =>{
    reset();
});

check.addEventListener('click', ()=>{
    checkFoo();

});


function checkFoo(){
    
    mg = document.getElementById("mg");
    ml = document.getElementById("ml");
    if (check.checked === false){
    mg.setAttribute('disabled','disabled');
    ml.setAttribute('disabled','disabled');
    mgTemp = document.getElementById("mg").value = "";
    mlTemp = document.getElementById("ml").value = "";
    for (var i = 0; i < test.length; i++) {
        // Add the class margin to the individual elements.
        test[i].classList.add('opa');
      }

    }
    else{
    mg.removeAttribute('disabled', 'disabled');
    mgTemp = document.getElementById("mg").value = "";
    mlTemp = document.getElementById("ml").value = "5";
    ml.removeAttribute('disabled', 'disabled');
    for (var i = 0; i < test.length; i++) {
        // Add the class margin to the individual elements.
        test[i].classList.remove('opa');
      }
    }
}


function reset(){
    
    check.checked = true;
    weightTemp = document.getElementById("weight").value = "";
    doseTemp = document.getElementById("dose").value = "";
    timesTemp = document.getElementById("times").value = "";
    mgTemp = document.getElementById("mg").value = "";
    mlTemp = document.getElementById("ml").value = "";
}

function start(){
    weight = Number(document.getElementById('weight').value);
    dose = Number(document.getElementById('dose').value);
    times = Number(document.getElementById("times").value);
    mg = Number(document.getElementById("mg").value);
    ml = Number(document.getElementById("ml").value);
    
    if(check.checked === true){
        result = dose * weight / (mg / ml) / times; 
        result = Math.floor(result * 100) / 100;
        res.innerHTML = "Принимать по " + result + " мг";
        disc.innerHTML = `<p>Вес - ${weight}кг<br>` + `Доза - ${dose}мг/кг<br>` + `Количество приёмов - ${times} в сутки<br>` + `Миллиграмм действующего вещества - ${mg}мг<br>` + `Объём - ${ml}мл</p>`;
    }
    else if (check.checked === false){
        result = dose * weight / times; 
        result = Math.floor(result * 100) / 100;
        res.innerHTML = "Принимать по " + result + " мг";
        disc.innerHTML = `<p>Вес - ${weight}кг<br>` + `Доза - ${dose}мг/кг<br>` + `Количество приёмов - ${times} в сутки<br></p>`;
    }
    if(isNaN(result)){
        res.innerHTML = "Проверьте поля для заполнения";
    }
    else{
    
    }
}

