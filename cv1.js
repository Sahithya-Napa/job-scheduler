// var n="hii"
// console.log(n);
// var int=2344
// console.log(int);
// var dou=9.876//can redeclear//
// console.log(dou);
// n=87.997
// console.log(Navigator);


// let nam="javaScript"//we cannot redeclare but we can replace//

// console.log(nam);
// nam=875
// console.log(nam);

// const sa="hello"
// console.log(sa);
// //sa=9876//we can't change//
// console.log(sa);

// var a=234
// var b=134
// var c=986
// if(a>b)
// {
//     console.log(a);
    
// }
// else if (b>c) {
//     console.log(b);
    
    
// }
// else if (c>a) {
//     console.log(c);
    
    
// }
// else{
//     console.log("non");
    
// }

// //switch case
// switch (2) {
//     case 1:
//         console.log(1);
        
//         break;

//     case 2:
//         console.log(2);
//         break;
//     default:
//         console.log(0);
        
//         break;

    
// }


// for (let i = 0; i < 10; i++) {
//     if (i%2==0) {
//         console.log(i);
//     }
    
    
// }

//  var i=0
// while (true) {
//     console.log(i++);
//     if (i==10) {
//         break;
//     }
    
// }


// console.log(5*5);
// console.log(5**5);//powering

// let num1=20
// let num2="20"
// if (num1 !==num2) {
//     console.log("equal");
    
// }
// else
// {
//     console.log("not equal");
    
// }

// if (num1 ===num2) {//strictly follow 
//     console.log("equal");
    
// }
// else
// {
//     console.log("not equal");
    
// }

// if (num1 ==num2) {//didn't 
//     console.log("equal");
    
// }
// else
// {
//     console.log("not equal");
    
// }



// const arr=[1,2.987,"String",false]
// console.log(arr);
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
    
    
// }
// const obj={
//     id:20351,
//     car_brand:"kia",
//     car_price:2000
// }
// console.log(obj);
// arr.push("hello");
// console.log(arr);
// arr.pop(2.987);
// console.log(arr);


// function js(num1,num2) {
//     console.log(num1+num2);
    
// }

// js(2, 8)
// function js(num1,num2) {
//     console.log(num1*num2);
    
// }
//  const a=function js(num1,num2) {
//     console.log(num1+num2);
    
// }
// const b=(num1,num2) => {
//     console.log(num1+num2);
    
// }
// b(7, 8)


//arrays-for of
//object - for in

// console.log(0==false);//true

// console.log(0===false);//false

 

//  console.log('' == false);//true
//  console.log('' === false);//false

 //if ("0") console.log('truthy');
//   if (0) console.log('falsy');
//   if ([]) console.log('truthy');
//   if ({}) console.log('truthy');
//   if (null) console.log('falsy');
//   if (undefined) console.log('falsy');
//  console.log('5' + 1);
//  console.log('5' - 1);
//  console.log(true + 1);
//  console.log(false + 1);
// console.log('5' * '2');
//  console.log(null + 1);
//  console.log(undefined + 1);
//  console.log(typeof null);
//  console.log(typeof NaN);
//  console.log(NaN !== NaN);
// console.log('5' + 2);
//  console.log('5' - 2);
//  console.log(null + 1);
//  console.log(undefined + 1);
//  console.log(true + false);
//  console.log([] + []);
//  console.log([] + {});
//  console.log({} + []);
//  console.log('2' * '3');
//  console.log('10' - '4' - '3' - 2 + '5');



//class and oops concepts
// class lap {
//     // let type="hp"
//     // var company=
//     constructor(type,company) {
//         this.type=type
//         this.company=company
//     }
//     read(){
//         console.log(this.type+" "+this.company);
//         console.log(`type: ${this.type}  by: ${this.company}`);
        
//     }
// }
// // const la=new  lap("asus"+"vivo")
// // la.read()

// class ecart extends lap{
//     constructor(type,company,cost)
//     {
//         super(type,company)
//         this.cost=cost
//     }

//     buy()
//     {
//         console.log(`type: ${this.type} by : ${this.company} cost:${this.cost}`);
        
//   

// encapuslation
pass=98765
class user{
    #password
    constructor(id,password)
    {
        this.id=id
        this.#password=password
    }
    myDetails()
    {
        return this.#password===pass
        
    }
}
const u=new user("sai",9876)
console.log(u.myDetails());

