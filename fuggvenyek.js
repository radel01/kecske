
let kepekElem = document.querySelectorAll("#bal>p>img");
let tomb=[];
const csonakDiv = document.getElementById("csonak")
csonakDiv.innerHTML=`<img src="kepek/csonak.png" alt="csonak">`

export function kepekElemEvent(){
    for (let index = 0; index < kepekElem.length; index++) {
        kepekElem[index].addEventListener("click", tombbeMent)
    
        //5.
        kepekElem[index].addEventListener("mouseover", function(event){
            event.target.className="kiemel"
        })
        kepekElem[index].addEventListener("mouseout", function(event){
            event.target.className=""
        })
        //6.
        kepekElem[index].addEventListener("click", function(event){
            event.target.style.display="none"
            csonakDiv.innerHTML=`<img src="${event.target.src}" alt="kep">`
        })
        //8.
        kepekElem[index].addEventListener("click", function(event){
            if(tomb.includes('http://127.0.0.1:5500/kecskeKaposztafarkas/kepek/kecske2.png') && tomb.includes('http://127.0.0.1:5500/kecskeKaposztafarkas/kepek/kaposzta.png')){
                alert("Veszélyes elemek!");
                console.log("veszelyes")
            }else if(tomb.includes('http://127.0.0.1:5500/kecskeKaposztafarkas/kepek/kecske2.png') && tomb.includes('http://127.0.0.1:5500/kecskeKaposztafarkas/kepek/farkas.png')){
                alert("Veszélyes elemek!");
            }
        })
    }
}
export function tombbeMent(){
    tomb.push(event.target.src);
    console.log(tomb);
}