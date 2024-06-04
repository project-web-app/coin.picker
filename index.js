
const numbers =[];
for(let i=0;i<101;i++){
    numbers.push(i);
    document.querySelector(".inner-card").innerHTML += "<button class='out m-1'>"+i+"</button>";
}
console.log("Original list of numbers:", numbers);

const poppedList = [];

function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

while (numbers.length > 0) {

    document.getElementById("card-1").addEventListener("click",displayer); 
    button.addEventListener("click", calculateBMI); 
}
function displayer()
{
    document.querySelector("h").classList.add("heading");
    const choiceElement = getRandomElement(numbers);
    console.log("Chosen element:", choiceElement);
    if(choiceElement != undefined){document.querySelector("h").innerHTML=choiceElement;}
    else{document.querySelector("h").innerHTML="Completed";}
    const index = numbers.indexOf(choiceElement);
    
        numbers.splice(index, 1);
        poppedList.push(choiceElement);
        document.querySelectorAll("button")[choiceElement].classList.add("c-a");

}
