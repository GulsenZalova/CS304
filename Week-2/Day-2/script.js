// console.log("first")
// setTimeout(()=>{
//   console.log("salam")
// },7000)
// console.log("second")



// get,delete,post,put


// then/catch

axios.get("https://northwind.vercel.app/api/categories")
.then(result=>{
    console.log(result.data)
})
.catch(err=>{
    {
        console.log(err)
    }
})


// async/await
let cardDiv=document.querySelector(".cards")

async function GetDatas() {
    let datas = await axios.get("https://northwind.vercel.app/api/categories")
    try{
        // console.log(datas.data)
        CreateCards(datas.data)
    }catch(err){
        console.log(err)
    }
}

function CreateCards(datas){
   datas.forEach(data => {
      cardDiv.innerHTML+=`
      <div class="card">
      <div class="card-top">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="">
      </div>
      <div class="card-bottom">
          <h3>${data.name}</h3>
          <span>${data.description}</span>
          <button>View</button>
      </div>
  </div>
      
      
      `
   });
}
GetDatas()





// async function GetData() {
//     let datas = await axios.get("https://northwind.vercel.app/api/categories")
//     try{
//         console.log(datas.data)
//         // CreateCards(datas.data)
//     }catch(err){
//         console.log(err)
//     }
// }

// async function DeleteData(id) {
//     let datas = await axios.delete(`https://northwind.vercel.app/api/categories/${id}`)
//     try{
//         console.log(datas.data)
//         // CreateCards(datas.data)
//     }catch(err){
//         console.log(err)
//     }
// }


// async function PostData() {
//     let datas = await axios.post(`https://northwind.vercel.app/api/categories`,{name:"Jafar",description:"Student"})
//     try{
//         console.log(datas.data)
//         CreateCards(datas.data)
//     }catch(err){
//         console.log(err)
//     }
// }

// async function UpdateData(id,name) {
//     let datas = await axios.put(`https://northwind.vercel.app/api/categories/${id}`,{name:name,description:"Student"})
//     try{
//         console.log(datas.data)
//         // CreateCards(datas.data)
//     }catch(err){
//         console.log(err)
//     }
// }

// UpdateData(1,"Rauf")

// PostData()
// DeleteData(8)


// GetData()