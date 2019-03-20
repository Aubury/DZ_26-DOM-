

let main = document.querySelector('main'),
    body = document.querySelector('body'),
    text = document.createElement('h2'),
    massDiv = [],
    child = 0;


//===============================================================
function addDiv(){

    for(let i = 0; i < 10; i++){
     
    for(let j = 0; j < 10; j++){
        
          let div = document.createElement("div");
          main.appendChild(div);
         
        }
       
    }
        
        body.appendChild(text);
        main.insertAdjacentElement("beforebegin",text);

}
//================================================================
function randomColor(){
     
    return '#'+Math.floor(Math.random()*16777215).toString(16);

}
//===============================================================
function colorDiv(){

   let interval = setInterval(func,1000);
     //---------------------------------------------------------
  function func(){

    if(massDiv.length < 100){

    child = Math.floor(Math.random()*100);

    massDiv.indexOf(child) === -1 ? massDiv.push(child) && (main.children[child].style.backgroundColor = randomColor()) 
                                  :  func();
    
    }else{
        
        clearInterval(interval);
    
        text.innerHTML = "Заполнение завершено";
    }
    //-----------------------------------------------------------
  }
}
//=======================================================================
addDiv();
colorDiv();






