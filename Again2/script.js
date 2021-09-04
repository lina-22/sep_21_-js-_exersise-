(()=>{
    let myDiv = document.querySelector('.child');
    myDiv.addEventListener('click', ()=>{
      if(myDiv.classList.contains('blue')){
         myDiv.classList.remove('blue');
         myDiv.classList.add('red');
      }  else {
            myDiv.classList.remove('red');
            myDiv.classList.add('blue');
      } 
    })
})()


