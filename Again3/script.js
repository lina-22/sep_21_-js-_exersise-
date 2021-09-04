// (()=>{
//     let myDiv = document.querySelector('.child');
//     myDiv.addEventListener('click',()=>{
//         if(myDiv.classList.contains('pink')){
//             myDiv.classList.remove('pink');
//             myDiv.classList.add('green')
//         }else{myDiv.classList.remove('green');
//               myDiv.classList.add('pink')}
//     })
// })()

(()=>{
    let myDiv = document.querySelector('.child');
    myDiv.addEventListener('click',()=>{
    myDiv.classList.toggle('green')    
    })
})()

