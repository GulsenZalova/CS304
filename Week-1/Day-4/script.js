
// for(let i=0; i<=10; i++){
//    if(i==5){
//       break
//    }
//    console.log(i)
// }

// for(let i=10; i>0; i--){
//     console.log(i)
//  }
 
// 1-ci algoritm
// let num=100
// let count=0

// for(let i=0;i<=num;i++){
//     if(i%2==1){
//        count++
//     }else{

//     }

// }

// 2-ci algotihtm

// let num=5
// let even=0
// let odd=0
// let result=0
// for(let i=0;i<=num;i++){
//     if(i%2==1){
//        even+=i
//     }else{
//         odd+=i
//     }

// }
// result=even+odd
// console.log(result)



// 3-cu algo

// let num=45


// for(let i=1;i<=num;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz")
//     }else if(i%5==0){
//         console.log("Buzz")
//     }else if(i%3==0){
//         console.log("Fizz")
//     }
// }



// 4cu algo



// let num = 150


// for(let i=1;i<=num;i++){
//     if(num<=50){
//         if(i%5==0){
//             console.log(i)
//         }
//     }else if(num>=50 && num<=100){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
//     else if(num>100){
//         if(i%8==0){
//             console.log(i)
//         }
//     }
// }



// 5-ci algo


// let name="SAlAmlAr"
// let count=0
// for(let i=1;i<name.length;i++){
//     if(name[i].toLowerCase()=="a"){
//         count++
//     }
// }
// console.log(count)

// console.log(name[4])


let cities=["baki","Berde","Sirvan","Sumqayit"]



// for(let i=0;i<cities.length;i++){
//     for(let j=0;j<cities[i].length;j++){
//         if(cities[i][j]=="a"){
//             console.log(cities[i])
//         }
//     }
// }


// for(let i=0;i<cities.length;i++){
//      if(cities[i][0].toUpperCase()=="B"){
//         console.log(cities[i])
//      }
// }


// Ededin faktorialini tapin


// let num=prompt("eded daxil edin")

// let hasil=1
// for(let i=1;i<=num;i++){555
//     hasil*=i
// }


// console.log(hasil)





// While / Do While
// let i=0
// while(i<5){
//     console.log(i)
//     i++
// }


// Functions

// let surname=prompt("soyadiniz daxil edin")
// let name=prompt("adinizi daxil edin")
// function SayHello(a,b){
//     console.log(`Hello ${a} ${b}`)
// }


// function Topla(num1,num2){
//    let sum=num1+num2
// //    return sum
// //    console.log(sum)

// SayHello(sum)
// }

// SayHello(surname,name)


// let res=Topla(3,5)

// console.log(res)


let count=0
function complex_Or_Prime(num){
     for(let i=1;i<=num;i++){
            if(num%i==0){
                count++
            }
     }
    if(count>2){
        console.log("Complex")
    }else{
        console.log("Prime")
    }
}

ComplexOrPrime(49)








