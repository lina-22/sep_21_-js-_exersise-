(()=>{
    let workOn = document.querySelector('.tifa');
    workOn.addEventListener('click', ()=>{
        if(workOn.classlist.contains('start')){
            workOn.classList.remove('start'),
            workOn.classList.add('stop')
        }else{
            workOn.classList.remove('stop');
            workOn.classList.add('start')
        }

    })
})()