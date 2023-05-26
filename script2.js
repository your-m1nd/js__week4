let typeName = document.getElementById("typeName");
let typeLink = document.getElementById("typeLink");
let commentEnter = document.getElementById("commentEnter");


let paragraf = document.getElementById("paragraf");
let img = document.getElementById("img");
let comment = document.getElementById("comment");


let send = document.getElementById("send");
send.onclick = function createInfoBlock(evt) {

    let newName = typeName.value.toLowerCase();
    let newName2 = newName[0].toUpperCase() + newName.slice(1);
    paragraf.textContent = newName2;

    img.src = typeLink.value;

    let newStr1 = commentEnter.value.replace(/(xxx|viagra)/gi, "***");
  comment.textContent = newStr1;

  evt.preventDefault();
}