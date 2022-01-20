//ELEMENTS IN DOM
let inputDOM = document.querySelector("#task");
let submitDOM = document.querySelector("#submitBtn");
submitDOM.addEventListener(`submit`, newElement)
let listDOM = document.querySelector("#list");
let ulListDOM = document.getElementsByTagName("li");
let savedList = [];

//FUNCTIONS FOR EVENTS
//ADD NEW ITEM AND MAKE A DELETE BUTTON
function newElement() {
      if (inputDOM.value[0] == " " || inputDOM.value.length == 0) {
         $(".error").toast('show');
    } else {
        $(".success").toast("show");
     
    // localStorage.setItem("list", inputDOM.value);
    savedList.push(inputDOM.value)
    localStorage.setItem("savedList", JSON.stringify(savedList));
    // console.log(setItem("savedList", JSON.stringify(savedList)));
    console.log(JSON.parse(localStorage.getItem("savedList")));
    // I will add a feature that save and load list on local storage 
    let liDOM = document.createElement('li');
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    inputDOM.value = "";

    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    liDOM.append(closeButton);
    }
};
//CHECK LIST
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});
//ADD DELETE BUTTONS TO DEFAULT LIST ITEMS
for (let i=0; i < ulListDOM.length; i++) { 
   let closeButton = document.createElement("span");
   closeButton.textContent = "\u00D7";
   closeButton.classList.add("close");
   closeButton.onclick = removeButton; 
   ulListDOM[i].append(closeButton);
   };

function removeButton() {
    this.parentElement.remove();
};
