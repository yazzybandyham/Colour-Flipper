const colours = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

btn.addEventListener('click', function(){
    const randomColour = randomNumber();

    document.body.style.backgroundColor = colours[randomColour];
    colour.textContent = colours[randomColour];
});

// randomly cycles through colours array
function randomNumber() {
    return Math.floor(Math.random() * colours.length);
};