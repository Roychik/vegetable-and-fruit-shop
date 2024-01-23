"use strict"

// let x = 0
// x = +prompt('Enter numbers');
// if (x % 2 == 0) {
//     alert ('This numbers is even')
// } else {
//     alert ('This numbers is not even')
// }

// let x = 0
// let z = 0
// let q = 0
// x = +prompt ('Enter your mass in k/g')
// z = +prompt ('Enter your hight in meters ')
// q = x / (z**2)
// if (q <= 16) {
//     alert('excessive mass deficit')
// } else if ( q > 16 && q <18,5){
//     alert('body weight deficit')
// }else if ( q > 18,5 && q <24,99){
//     alert('normal mass')
// }else if ( q >25  && q <30){
//     alert('obesity')
// }else if ( q >30 && q <35){
//     alert('obesity of the 1st degree')
// }else if ( q >35  && q <40){
//     alert('obesity of the 2 degree')
// }else {
//     alert('obesity of the 3 degree')
// }

// const sum = document.querySelector('#money');
// const select = document.querySelector('#currency');
// const result = document.querySelector('.result span')
// const bug = {
//     'eur': 39.93,
//     'usd': 36.89,
//     'btc': 959709.64
// }
// select.addEventListener('change' , (event)=>{
//     if (event.target.value){
//         let res = +sum.value / bug[event.target.value]
//         result.innerHTML = res

//     }else {
//         result.innerHTML = '';
//     }
// })


// let z = [2,5,23,-23,2.23, 332]
// let sum = 0
// let seed = 0
// for ( let i in z ){
//     sum += z[i]
// } 
// console.log(sum/z.length)

// let a = 10
// let b = 5
 
// while(a!=b){
//     if(a>b){
//         a = a - b
//         continue
//     }else{
//         b = b - a
//         continue
//     }
    
//     break

// }
// console.log(a)

// const rectangles = document.querySelector('.wrapper');
// const r = document.querySelectorAll('.rectangle') 
// rectangles.addEventListener('click' , function(e){
//     for (let rec of r ){
//         rec.classList.remove('rebeccapurple')
//     }
//     if(e.target.classList.contains('rectangle')){
//         e.target.classList.add('rebeccapurple')
//     }
// })
// rectangles.forEach(rect => {
//     rect.onclick = function(){
//         for(let p of rectangles){
//             p.classList.remove('rebeccapurple')
//         }
//         this.classList.add('rebeccapurple')
//     }
// })


    