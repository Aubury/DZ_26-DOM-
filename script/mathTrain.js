let body = document.querySelector('body'),
    main = document.querySelector('main'),
    inputAnsw = document.createElement('input'),
    inputTasck = document.createElement('input'),
    button = document.createElement('button'),
    text = document.createElement('h3');

    main.remove();
//=================================================================================
function createMath(){

        inputAnsw.setAttribute('id','answer');
        inputAnsw.setAttribute("type", "text");
        inputAnsw.setAttribute('placeholder','Введите предполагаемый ответ');

        inputTasck.setAttribute('id','tasck');
        inputTasck.setAttribute("type", "text");
        inputTasck.setAttribute('placeholder','Введите математическое действие');

        button.innerText = "Проверь себя";
        button.setAttribute('onclick','tasck()');

   

   body.appendChild(inputTasck);
   body.appendChild(inputAnsw);
   body.appendChild(button);
   body.appendChild(text);
 
}
//===================================================================================
function tasck(){
 
    let answer = inputAnsw.value,
        tasck = inputTasck.value,
        ref = /[*+/-]/g,
        massTasck = tasck.match(ref),
        numbers = tasck.split(ref).map(parseFloat);
        
        if(!isNaN(numbers[0]) && !isNaN(numbers[1]) && ref.test(massTasck)){

         switch(massTasck[0]){

            case '+' : numbers[0]+numbers[1] == parseFloat(answer) ? 
                       text.innerHTML = "Все верно" : text.innerHTML = "Подумай еще";
                       break;
            case '-' : numbers[0]-numbers[1] == parseFloat(answer) ? 
                       text.innerHTML = "Все верно" : text.innerHTML = "Подумай еще";
                       break;
            case '/' : numbers[0]/numbers[1] == parseFloat(answer) ? 
                       text.innerHTML = "Все верно" : text.innerHTML = "Подумай еще";
                       break;
            case '*' : numbers[0]*numbers[1] == parseFloat(answer) ? 
                       text.innerHTML = "Все верно" : text.innerHTML = "Подумай еще";
                       break;
            default:   text.innerHTML = "Подумай еще";        

         }
    }else{
       
        text.innerHTML = "Подумай еще";   

    }

}
createMath();
