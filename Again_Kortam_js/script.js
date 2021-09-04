// (()=> {
//     let myDiv = document.querySelector('.child');
//     myDiv.addEventListener('click', ()=>{
//         if(myDiv.classList.contains('black')){
//            myDiv.classList.remove('black')
//            myDiv.classList.add('red')
//         }else {
//             myDiv.classList.remove('red');
//             myDiv.classList.add('black');
//         }
//     })
    // myDiv.addEventListener('click', ()=>{
    //     if(myDiv.classList.contains('black')){
    //        myDiv.classList.remove('black')
    //        myDiv.classList.add('red')
    //     }else {
    //         myDiv.classList.remove('red');
    //         myDiv.classList.add('black');
    //     }
        // myDiv.classList.toggle('red');
    // })
    
// })();

// today try

// (()=>{
//     let myDiv = document.querySelector('.child')
//     myDiv.addEventListener('click', ()=>{
//         if(myDiv.classList.contains('black')){
//             myDiv.classList.remove('black');
//             myDiv.classList.add('red');
//         }else {
//             myDiv.classList.remove('red');
//             myDiv.classList.add('black');
//         }   
//     })

    
// })()

// 2nd Way



(()=>{
    let myDiv = document.querySelector('.child');
    myDiv.addEventListener('click', ()=>{
    myDiv.classList.toggle('red')    
    })
})()

