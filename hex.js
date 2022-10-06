const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

btn.addEventListener('click', function(){
    let hexColour = '#';
    
    for(let i = 0; i < 6; i++) {
        //hex[0] prints first index 6 times e.g. #000000
        hexColour += hex[randomNumber()];
    }


    document.body.style.backgroundColor = hexColour;
    colour.textContent = hexColour;
})

// randomly cycles through colours array
function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}