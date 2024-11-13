

// let container= document.querySelector(".container")
// container.style.jistifyContent= "center"
// container.style.margin="630px"
// container.style.padding="630px"
 

let img=document.querySelector(".img")
img.style.backgroundImage="url('https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=1380&t=st=1705607469~exp=1705608069~hmac=278471867b312bc0088e9ffac7a2f27addf229e5e57bacefa17334eee38448ad')";
img.style.height="600px"
img.style.maxWidth="600px"
img.style.display="flex"
img.style.justifyContent="center"
img.style.backgroundPosition="center"
img.style.backgroundSize="cover"
img.style.alignItems="center"
img.style.margin="0px"



let box=document.querySelector(".box")
box.style.backgroundColor="#f6c56e"
box.style.height="180px"
box.style.width="600px"
box.style.padding="1px"
box.style.margin="0vw"
box.style.borderRadius="15px"
box.style.justifyContent="center"
box.style.alignItems="center"



let title=document.querySelector("h2")
title.textContent="HAPPY MEALS"
title.style.fontFamily="Bree Serif"
title.style.fontWeight="bold"
title.style.fontSize="2vw"
title.style.padding="0px"
// textSection.appendChild(title)

let p=document.querySelector("p")
p.textContent="Discover the best foods over the 1,000 restaurants ";
p.style.fontFamily="Roboto"
p.style.fontSize="1vw"


let button=document.querySelector("button")
button.textContent="SHABNAM"
button.style.backgroundColor="yellow"
button.style.height="40px"
button.style.width="90px"
button.style.borderRadius="5px"



function responsivepage(){
    let item= document.getElementById(".container")
    if(window.innerWidth<600){
        item.style.width="50px";
    }
    else{
        item.style.width= "100px";
    }
}
window.addEventListener('resize', responsivepage);