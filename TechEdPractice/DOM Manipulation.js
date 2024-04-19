 const text = document.querySelector(".title");


text.computedStyleMap.changeColor ="red";
const changeColor = document.querySelector(".changeColor");

text.classList.add('change');

changeColor.addEventListener('click', function() {
text.classList.toggle('change');

})


const newUser = {
    // properties with different values 
    firstName :"Mitko",
    personAge : 24,
    married: true, 
    purchases: ["phone","car","laptop"],
    sayName: function() {
        console.log(this.firstName);
    }
}