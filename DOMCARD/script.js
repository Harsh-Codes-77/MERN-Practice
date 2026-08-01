// const button = document.querySelectorAll('.button');

// for(let btn of button){
//     btn.addEventListener('click', function(){
//         const card = this.closest('.card');
//         const title = card.querySelector('h2');
//         const para = card.querySelector('.para');

//         alert(
//             title.innerText + "\n" + para.innerText 
//         )
//     });
// }


const buttons = document.querySelectorAll(".delete");

for (let btn of buttons) {
    btn.addEventListener("click", function () {
        let row = this.closest("tr");
        let name = row.children[0].innerText;

        alert(name + " deleted");

        row.remove();
    });
}