//1.
// const colors= ["Red", "Blue","Green"]
// const [first, ,third]=colors

// console.log(first);
// console.log(third);
  

//2.
// const person={name:"Alice", age: 25, job: "Developer"}
// const {name,age}=person
// console.log(name);
// console.log(age);

//3.
// const user={ 
//     id: 1,
//     name: "Sok",
//     address:{
//         street:"123 Main St",
//          city:"PP"
//         }
//     };
// const {address:{street,city}}=user
//   console.log(`${street},${city}`);

//4.

// const Nums1 = [1, 2, 3]
// const Nums2 = [4, 5, 6]
// const merge=[...Nums1,...Nums2]
// console.log(merge);

//5.
// function sum(...num) {
//     return num.reduce((total,number)=> total+number)
// }
// console.log(sum(1,2));
// console.log(sum(1,2,3,4,5));

//6.

// const points = [{x: 1, y:2}, {x:2, y:3}, {x:3, y:4}]
// const [firstPoint,...otherPoint]=points
// console.log(firstPoint);
// console.log(otherPoint);


//7.

// function filterProps(object,...rest){
//     let newObj={}
//     // step1: loop to find key
//         for(let key in object){
//            if(!rest.includes(key)){
//             newObj[key]=object[key]
//            }
//         }
//         return newObj
//     }
// let object={a:1, b:2, c:3, d:4}
// console.log(filterProps(object,"b","d"))



