let main = document.querySelector('main').remove(),
    body = document.querySelector('body');


let input = document.createElement('input'),
    div = document.createElement('div');
 
    input.setAttribute('type','number');
    input.setAttribute('class','in');   

    div.setAttribute('class','blocs');

    body.appendChild(input);
    body.appendChild(div);

    document.querySelector('.in').addEventListener('keyup', function(){
        let blocs = document.querySelector('.blocs'),
                count = parseInt(this.value);


        while(blocs.firstChild){
            blocs.removeChild(blocs.firstChild);
        }													

        while(count){
        
         let div = document.createElement('div');
            blocs.appendChild(div);
            count--;
        }																						 
    });