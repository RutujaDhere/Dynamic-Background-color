var arr = ["red", "blue", "rgba(133,122,200)", "#f15025"];

const button = document.querySelector("#button");
const color = document.querySelector(".color")


button.addEventListener("click", function() {
    
    //Creating random number between 0 to 6
    var randomNumber = Math.floor(Math.random()*6);
    
    document.body.style.backgroundColor = arr[randomNumber];
    color.innerText = arr[randomNumber]
  
})
