// Create a 16x16 grid
const sketchpad = document.querySelector('.sketchpad');

let counter = 0;
for (let i = 0; i < 16; i++){
    for (let k = 0; k < 16; k++){
        
        let block = document.createElement('div');
        block.classList.add('block');
        sketchpad.appendChild(block);
        counter++;
        console.log(counter);
    }
}   //finish creating grid

let sketchpadDivs = document.querySelectorAll('.sketchpad div');
sketchpadDivs.forEach(block => block.addEventListener('hover', ))