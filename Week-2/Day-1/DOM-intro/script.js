// Selecting Elements

// let head=document.getElementById("head")
// let parags=document.getElementsByClassName("parag")


// let head=document.querySelector("#head")
// let parags=document.querySelectorAll(".parag")



// traversing elements


// let list1=document.querySelector(".list1")

// let parent=list1.parentElement
// let prev=list1.previousElementSibling
// // let next=list1.closest("p")

// console.log(parent)
// console.log(prev)
// console.log(next)


// 



// let div=document.createElement("div")
// div.textContent="HelloWorld"
// div.innerText="Salamlar"

// div.innerHTML=`
// <ul>
// <li >Hello</li>
// <li class="list1">salam</li>
// <li>World</li>
// </ul>
// `

// document.body.appendChild(div)

// console.log(document)



// let time=Number(prompt("nece defe?"))
// let ul=document.createElement("ul")


// for(let i=0;i<time;i++){
//     let li=document.createElement("li")
//     li.textContent="Salam"
//     ul.appendChild(li)
// }

// document.body.appendChild(ul)









// let head=document.querySelector("#head")

// head.style.backgroundColor="red"

// head.style.fontSize="45px"



// let btn=document.querySelector(".btn-click")

// btn.addEventListener("click",function(){
//     alert("Welcome")
// })


// let form=document.querySelector(".form")
// let inp=document.querySelector("input")


// form.addEventListener("submit",function(event){
//     event.preventDefault()
//     console.log(inp.value)
// })




// Ekranda bir button olsun, aşağısında isə bir div . Buttona click etdikdə həmin divin backgroundColoru qirmizi, height ve width deyerleri 300px olsun.(evvel background yaşıl, height ve width deyerleri 200px olmalıdı. )


let div=document.querySelector(".myDiv")
let btn=document.querySelector(".btn")

btn.addEventListener("click",function(){
    div.style.backgroundColor="red"
    div.style.width="300px"
    div.style.height="300px"
    div.style.opacity="0.5"
})