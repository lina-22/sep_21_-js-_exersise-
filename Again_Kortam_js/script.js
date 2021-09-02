(()=> {
    let myDiv = document.querySelector('.child');
    // myDiv.addEventListener('click', ()=>{
    //     if(myDiv.classList.contains('black')){
    //        myDiv.classList.remove('black')
    //        myDiv.classList.add('red')
    //     }else {
    //         myDiv.classList.remove('red');
    //         myDiv.classList.add('black');
    //     }
    // })
    myDiv.addEventListener('click', ()=>{
        // if(myDiv.classList.contains('black')){
        //    myDiv.classList.remove('black')
        //    myDiv.classList.add('red')
        // }else {
        //     myDiv.classList.remove('red');
        //     myDiv.classList.add('black');
        // }
        myDiv.classList.toggle('red');
    })
    
})();



