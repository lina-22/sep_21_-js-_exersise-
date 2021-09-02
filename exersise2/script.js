let btnStart = document.querySelector('button');
let message = document.querySelector('h1');
btnStart.addEventListener('click', () =>{
    btnStart.innerText = 'start the work'; 
    setTimeout(()=>{
        btnSend.style.display ="none";
        message.innerText = 'start';
    }, 5000);
})