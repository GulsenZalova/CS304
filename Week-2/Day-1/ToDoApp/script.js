let form=document.querySelector(".todo-form")
let inp=document.querySelector(".todo-inp")
let list=document.querySelector(".todo-list")



form.addEventListener("submit",function(event){
    event.preventDefault()
    let newToDo=inp.value
    list.innerHTML+=`<li><span>${newToDo}</span><button class="btn-delete">Delete</button><button class="btn-complete">Complete</button></li>`
    inp.value=""

    let deleteBtns=document.querySelectorAll(".btn-delete")
    let completeBtns=document.querySelectorAll(".btn-complete")
    for(let i=0;i<deleteBtns.length;i++){
        deleteBtns[i].addEventListener("click",function(){
            deleteBtns[i].parentElement.remove()
        })
    }

   deleteBtns.forEach(silmebuttonum=>{
    silmebuttonum.addEventListener("click",function(){
        silmebuttonum.parentElement.remove()
    })
   })
   
    completeBtns.forEach(tamamlabuttonum=>{
      tamamlabuttonum.addEventListener("click",function(){
        //   tamamlabuttonum.previousElementSibling.previousElementSibling.style.textDecoration="line-through"
        tamamlabuttonum.previousElementSibling.previousElementSibling.classList.toggle("active")
      })
    })
})