//function getInputValue() {
    //let typeName = document.getElementById('typeName').value;
    //let paragraf = document.getElementById('paragraf');
    //paragraf = typeName.value.toLowerCase();
        //let str = typeName.value.toLowerCase();
        //let str2 = str[0].toUpperCase()+ str.slice(1);
        //paragraf.textContent = str2;
       // };



let typeName = document.getElementById('typeName');
typeName.addEventListener('keydown', function (event) {
});
let paragraf = document.getElementById('paragraf');

let typeLink = document.getElementById('typeLink');
let img = document.getElementById('img');
typeLink.addEventListener('keyup', function(evt) {
    });

let commentEnter = document.getElementById('commentEnter');
let comment = document.getElementById('comment');
commentEnter.addEventListener('keyup', function(evt) {
    })


let send = document.getElementById('send');
    send.onclick = function getInputValue() {
    paragraf.textContent = typeName.value.toLowerCase();
    let newName = typeName.value.toLowerCase();
    let newName2 = newName[0].toUpperCase() + newName.slice(1);
    paragraf.textContent = newName2;

    img.src = typeLink.value;

    comment.textContent = commentEnter.value;

    }


let formElement = document.getElementById('form-comment');
formElement.addEventListener('submit', function (evt) {
evt.preventDefault();
});