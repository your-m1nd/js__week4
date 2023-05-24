
let typeName = document.getElementById('typeName');
let paragraf = document.getElementById('paragraf');
typeName.addEventListener('keyup', function(evt) {
let str = evt.target.value.toLowerCase();
let str2 = str[0].toUpperCase()+ str.slice(1);
    paragraf.textContent = str2;
});


let typeLink = document.getElementById('typeLink');
let img = document.querySelector('img');
typeLink.addEventListener('keyup', function(evt) {
img.src = evt.target.value;
});

let commentEnter = document.getElementById('commentEnter');
let comment = document.getElementById('comment');
commentEnter.addEventListener('keyup', function(evt) {
comment.textContent = evt.target.value;
})



function checkSpam(str) {
str = commentEnter.evt.target.value;
const comment1 = str.checkSpam('buy ViAgRA now'); 
const newComment1 = comment1.replace(ViAgRA/i, '***');

}

//результат buy *** now
const comment2 = checkSpam('free xxx'); //результат free ***
const comment3 = checkSpam("innocent rabbit") ; //результат innocent rabbit


//lowerStr.includes('viagra');



//let submit = document.getElementById('submit');
//submit.onclick = function send() {
//evt.preventDefault();}