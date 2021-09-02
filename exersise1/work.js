// colors arry
let colors = ['black', 'white', 'red'];
// get button
let button = document.getElementById('button');
// add event listener
button.addEventListener('click', function(){
    // randomizer
    var randomColor = colors [Math.floor(Math.random() *colors.length)]
    // get container
    let container = document.getElementById('container');
    
    container.style.background = randomColor;
})