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

//let str = commentEnter.value;

//function checkSpam(str) {
    //let newComment1 = document.getElementById('commentEnter');
    //let newComment11 = document.getElementById('comment');
    //let str1 = str;
    //let newStr1 = str1.replace('ViAgRA', '***');
//}

//const comment1 = checkSpam('buy ViAgRA now');

let send = document.getElementById('send');
    send.onclick = function getInputValue() {

    let newName = typeName.value.toLowerCase();
    let newName2 = newName[0].toUpperCase() + newName.slice(1);
    paragraf.textContent = newName2;

    img.src = typeLink.value;


    let comment1 = commentEnter.value;
    let comment2 = commentEnter.value;
    let comment3 = commentEnter.value;

    let comment11= comment1.replace('ViAgRA', '***');
    let comment22= comment2.replace('free xxx', '***');
    let comment33= comment1.slice(0);


    comment.textContent = comment11;
   // comment.textContent = comment22;
    //comment.textContent = commentEnter.value.replace('ViAgRA', '***');
    //comment.textContent = commentEnter.value.replace('free xxx', '***');
    //comment.textContent = commentEnter.value.slice(0);

}


let formElement = document.getElementById('form-comment');
formElement.addEventListener('submit', function (evt) {
evt.preventDefault();
});