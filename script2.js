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

    function checkSpam() {
      let comment1 = commentEnter.value.includes('ViAgRa');
      console.log(comment1);
    }
})



//function checkSpam(str) {

    //let newStr = commentEnter.value;

 //'buy ViAgRA now'.includes('ViAgRa').replace(ViAgRA/i, '***'); // true
//'free xxxxx'.includes('xxxxx').replace(xxx/i, '***');
//}


let send = document.getElementById('send');
    send.onclick = function getInputValue() {

    let newName = typeName.value.toLowerCase();
    let newName2 = newName[0].toUpperCase() + newName.slice(1);
    paragraf.textContent = newName2;

    img.src = typeLink.value;

    //comment.textContent = newcomment1
function checkSpam () {
    let comment1 = commentEnter.value.replace('ViAgRA','***');
    let newComment1 = comment1;
    comment.textContent = newComment1;

    //let comment2 = commentEnter.value.replace('xxx', '***');
    //let newcomment2 = comment2;
    //comment.textContent = newcomment2;
}
}


//const comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
//const comment2 = checkSpam('free xxx'); //результат free ***
//const comment3 = checkSpam("innocent rabbit") ; //результат innocent rabbit
    //let comment1 = commentEnter.value.replace(ViAgRA/i, '***');
    //let comment2 = commentEnter.value.replace(xxxx/i, '***');


let formElement = document.getElementById('form-comment');
formElement.addEventListener('submit', function (evt) {
evt.preventDefault();
});