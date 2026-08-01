const container = document.querySelector("#container");
const result = document.querySelector("#result");

// Count

function updateCount() {
    result.innerText = "Total Products : " + container.children.length;
}

updateCount();

//Delete

document.querySelectorAll(".deleteBtn").forEach(btn => {

    btn.addEventListener("click", function () {

        this.closest(".card").remove();

        updateCount();

    });

});

// Favorite

document.querySelectorAll(".favoriteBtn").forEach(btn => {

    btn.addEventListener("click", function () {

        this.closest(".card").classList.toggle("fav");

    });

});

//Buy

document.querySelectorAll(".buyBtn").forEach(btn => {

    btn.addEventListener("click", function () {

        let card = this.closest(".card");

        card.classList.add("fav");

        alert(card.children[0].innerText + " Purchased");

    });

});

//Next

document.querySelectorAll(".nextBtn").forEach(btn => {

    btn.addEventListener("click", function () {

        let current = this.closest(".card");

        let next = current.nextElementSibling;

        if(next){

            alert("Next Product : " + next.children[0].innerText);

        }else{

            alert("No Next Product");

        }

    });

});

//Previous

document.querySelectorAll(".prevBtn").forEach(btn => {

    btn.addEventListener("click", function () {

        let current = this.closest(".card");

        let prev = current.previousElementSibling;

        if(prev){

            alert("Previous Product : " + prev.children[0].innerText);

        }else{

            alert("No Previous Product");

        }

    });

});

//First

document.querySelector("#firstBtn").addEventListener("click", function(){

    let first = container.firstElementChild;

    alert("First Product : " + first.children[0].innerText);

});

//Last

document.querySelector("#lastBtn").addEventListener("click", function(){

    let last = container.lastElementChild;

    alert("Last Product : " + last.children[0].innerText);

});

//Highlight All

document.querySelector("#highlightBtn").addEventListener("click", function(){

    Array.from(container.children).forEach(card=>{

        card.classList.add("fav");

    });

});

//Reset

document.querySelector("#resetBtn").addEventListener("click", function(){

    Array.from(container.children).forEach(card=>{

        card.classList.remove("fav");

    });

});

//Count Button

document.querySelector("#countBtn").addEventListener("click", function(){

    alert("Total Products : " + container.children.length);

});

//childNodes

console.log(container.childNodes);