
let nev=document.querySelectorAll("footer p")[0]
nev.innerHTML="Roszkopf Adél"

let kepekElem = document.querySelectorAll("#bal>p>img")[0];

kepekElem.addEventListener("click", tombbeMent())

function tombbeMent(){
    var tomb=[];
    tomb.push(event.target.src);
    console.log(event.target.src)
}

console.log(tomb);