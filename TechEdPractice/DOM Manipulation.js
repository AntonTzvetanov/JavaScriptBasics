 const text = document.querySelector(".title");


text.computedStyleMap.changeColor ="red";
const changeColor = document.querySelector(".changeColor");

text.classList.add('change');

changeColor.addEventListener('click', function() {
text.classList.toggle('change');

})
