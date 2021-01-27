// Create a 16x16 grid
const sketchpad = document.querySelector('.sketchpad');

function createGrid(size){
    for (let i = 0; i < size; i++){
        for (let k = 0; k < 16; k++){
            
            let block = document.createElement('div');
            block.classList.add('block');
            sketchpad.appendChild(block);
        }
    }
    
    //Add event listeners to all blocks and add the hover attribute.
    let sketchpadDivs = document.querySelectorAll('.sketchpad div');

    sketchpadDivs.forEach(block => 
        block.addEventListener('mouseover', function(e){
            block.style.backgroundColor = 'black';
        }   
    ));   
} //end of createGrid()




//Add event listener to the button
let button = document.querySelector('button');

button.addEventListener('click', function(e) {
    while(true){
        let size = parseInt(prompt("What grid size would you like?"));
        console.log(size);
        if (Number.isInteger(size) && size <= 100){
            
            //Remove the divs
            let sketchpadDivs = document.querySelectorAll('.sketchpad div');
            
            sketchpadDivs.forEach(block => block.remove()); 

            //Create a new grid
            console.log("i made it");
            createGrid(size);
            
            break;
        } //end if

    }//end while

}); //end function(e)

createGrid(16);