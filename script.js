const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body")


buttons.forEach(function (btn){
    btn.addEventListener('click',function (e) {

          if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id

          }else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
          
          }else if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id
          
          }else if(e.target.id ==='pink'){
            body.style.backgroundColor = e.target.id
          
         }else  if(e.target.id ==='purple'){
            body.style.backgroundColor = e.target.id
         
         }else   if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id
        
         }else if(e.target.id ==='orange'){
            body.style.backgroundColor = e.target.id
          
         }else if(e.target.id ==='green'){
            body.style.backgroundColor = e.target.id
         
         }
    });
});


