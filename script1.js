// // if else else if questions
// // Q1: user se maanngo ek nunber or agar numer 10 se zyada ho toh print kro hello nahi toh bye

// var number = prompt("enter a number")
// if(number>10){
//     console.log("hello")

// }

// else
// {
//     console.log("bye")

// }


// // Q2: user se maango do number or usme 10 add krdo or usme 10 add pr 20 se zyada arha hai toh yes print kro nahi toh no print kro


// var num1 = Number(prompt("enter a number 1:"))
// var num2 = Number(prompt("enter a number 2:"))


// let add = num1+num2;

// if(add > 20){
//     console.log("yes more than a 20")

// }

// else{
//     console.log("no, it is  less than a 20")

// }


// // prompt se kuch bhi lene pr value apko hameshga ek string vakue hi milegi use convert krlo apne question ke according

// // Q3: user se nunber maango do bar or add kro or agar doosre number ki akhri digit us added number se choti hai toh print kro 



// var first = Number(prompt("Enter a first nunmber n1"))
// var second = Number(prompt("Enter a second nunber n2"))

// let additon = first + second;
// if(second%10 < additon){
//     console.log("Yes it is smaller than the last digit of a second number ")

// }

// else{
//     console.log("no it is not smaller than the last digit of a second numebr ")

// // }



// // Q4: user se do passwords maango agar woh dono password same hai toh login kro nahi toh wrong password bolo 


// var password1 = prompt("set  password of your Account")
// var password2  = prompt("Enter the login password of your account ")

// if(password1 === password2){
//     console.log("Logges In")

// }

// else{
//     console.log("sorry,you entered a wrong password")
    
// }

// Q:5 : write a   javascript function to check whether an input is an array or not !

// function arraycheck(input){
//       return Array.isArray(input);
// }

// var ans = arraycheck([1,2,3,4,5]);
// console.log(ans)


// second method to do the same question 
// function arraycheck2(input){
//     return input instanceof Array;
// }

// var ans2 = arraycheck2([])
// console.log(ans2);


// Q6: write a javascipt to clone an array .

// function clonearray(arr){
//     var cloned = [...arr];
//     return cloned;
// }

// var cloningarray = clonearray([1,2,3,4,5,6,7,8,9,10]);
// console.log(cloningarray);


// Q7: write the javascript fucntion to get the first element of an array, passing a parameter "n"  then will return the first n element of an array as an output..

// function getter(inp, get = 1)
// {
//     var cloned = [ ];
//     for(var i=0; i<get; i++){
//         cloned.push(inp[i]);
//     }
//     return cloned;
// }


// var answer = getter([1,2,3,4,5,6] , 3);
// console.log(answer);



// Q8:  write a simple  javascript  program to join all  elements of  the following array into a string as an output .


// function arraytostring(arrstring){
// var strings =  arrstring.join(" ,");
// return strings;
// }


// var output = arraytostring(["red", "green", "white", "blue", "pink"]);

// console.log(output);


//Q9:  possible ways to create an object

// var obj  = {}
// console.log(obj);


// var obj2 =  Object.create(null);
// console.log(obj2);


// function obj3(){
//   this.name =  "syed samad ali";
//   this.age = 20;
//   this.identity = "indian";
// }

// var answer3 = new obj3();
// console.log(typeof(answer3));


// class abcd {
//     constructor(){}
//     a = 12;

// }

// var outpute   = new abcd();
// console.log(outpute);

// Q:10 :  higher order function  : higher order woh functions hote hai jo parameter me koi fucntion accept kre yah phir apne andar se koi fucntion return krde us  kehte hai higher order functions  in js



// function hof(fnc){
//     fnc();
// }

// hof(function(){console.log("higher order functions ")});



// function hof2(){

//     return function(){
//         console.log("higher order fucntion second type.");
//     }
// }


// var anssss   =  hof2();
// console.log(anssss);



// var arrs = [1,2,3,4,5];

// arrs.forEach(function(elem){
// var ans = elem+2;
// console.log(ans);
// })


// foreach map filter they all are a type of higher order functions



//  Q11:  difference betweeen the var let and const

// var:  var es5 ka part hai , fucntion scope variable hota hai , var apne aapko window me bhi add krta hai ..

// function es5(){
//     var a = 12;
//     console.log(a);
// }
// es5();


// let:  let es6 ka part hai , let braces scoped  variable hota hai, and let khudko window object me add nhi krta hai 



// function es6(){

//    {
//     let b = 22;
//     console.log(b);
//    }

//    console.log(b);
// }
// es6();


// const:  constant hota hai  constants baane ke liye hota hai  , yeh es6 ka part hai cont update nhi krskte hai ek baar banane ke baad


// const c  = 12;
// console.log(c)



// Q12: this, call , apply , bind

// this ek keyword hota  hai js mein: jiske alag alag jagah alag value hoti hai 
// global mein : window
// function mein : window
// method mein : object
// eventlistener mein : parent jis par event listener laga ho 




// console.log(this);


// function thiskey(){
//     console.log(this);
// }

// thiskey();




// var objec  = {
    
//     name : "samad",
//     age : 20,
//     fnc : function(){
//         console.log(this);
//     }
// }


// objec.fnc()



// var button  = document.querySelector("button");
// button.addEventListener("click", function(){
//     console.log(this);
// })




// call : call or apply jab use hota hai aapko this se kuch or taget krvana ho  object jese




// function sss(){

//     console.log(this);
// }

// var objs = {age: 20}

// sss.call(objs);




// var objss2 = {
//     name : "saanmd",
//     age : 20,
//     rollno : 57,
//     indian : true,
// }


// function ss2(a,b,c,d,e){
//  console.log(this);
//  console.log(a,b,c,d,e);
// }

// ss2.apply(objss2, [1,2,3,4,5]);




// function binfnc(){
// console.log(this);
// }


// var bc  = binfnc.bind(obj4);
// bc();

// var obj4 = {
//     name : "Syed samad ali",
//     single : true,
// }


// array : foreach , map , filter..

// var arr = [1,2,3,4,5];
// // foreach is a loop  which works on array, foreach loop utni baar chalta hai jitne array ke members hote hai ek ek krek array ke saare  members pe loop krne ko hi foreach loop kehte hai js mein ..


// //q : foreach ki help se array ki har value mein 2 add krke print kro..
// arr.forEach(function(elem){
//     console.log(elem + 2);
// })


// // q: foreach  ki help se array ke har element ke aghe koi string add krke print kro


// arr.forEach(function(val){
//     console.log(`hello ${val}`);

// })


// // q3: using foreach print all members of an array except ones which is greater than 2 


// arr.forEach(function(elem){
//     if(elem<= 2){
//         console.log(elem);
//     }

// })



// // q4: saare elements jo array me unka sum print kro as an answer..

// var sum = 0;
// arr.forEach(function(elem){
//     sum += elem;
// })

// console.log("sum of all array members is ", sum);


// // q5: saare members ka sum kro string ko chodh kee

// var arr2 = [1,2,3,"hello", "samad", "sad", "pen", 23, 100];
// arr2.forEach(function(val){
//     if( typeof val  == "number"){
//         sum  = sum  + val;
//     }
// })
// console.log("sum :", sum);


// var arr3 = [ ];

// for(var i = 0; i<10; i++){
//     arr3.push(function() {
//         setTimeout(function(){
//             console.log(i);
//         }, 1000);
//     })
// }


// for(var i = 0; i<10; i++){
//     arr3[i] ();
// }





//sync vs asyn code


// console.log("hey1")
// console.log("hey2")
// console.log("hey3")
// setTimeout(function(){
//     console.log("hey4");
// }, 10000);
// console.log("hey5");


// sync code : ek ke baad ek chalta hai line se serially main stack mein   or asyn code jab tk behind the scene processing hota hai side stack mein  or jab sab sync code chal jata hai poora , uske baad async code main stack me ata hai or exexute hota hai ...



// syncrounous code me agar errror agya toh uske error se  toh waha se aghe ke code ka exexution nhi hoga atak yaega....


// aysnc code waits till sync code is not finished  and when sync code is finished  exexuting, then the async code starts exexuting , as code is async so it might have some delay, it also takes something that is callback jo chala tha hai sync code ko...


// jab fb se photo ajayega toh chal jana : dleay hai callback lagega
// callback hota hai ek function jo async code chalata hai.. 


// map: map bhi ek method hoti hai jo bilkul foreach ki tarah hoti hai, map array pe chalta hai jab aapko kuch operations yah kuch calculations  krna ho array pe or new array me save krna ho , map return krta hai ek new array..

// jab aapko array ke har ek member  pr kuch operation perform krke unhe new array me dalna ho tab ham use krte hai map ko 


// map ka strucuture bilkul foreach ki tarah hota hai, map return krta hai ek new array woh array ek copy banata hai imaginary banata  hai....


// q1: map se har ke har ek member pr 2 add kro or ek new array me save krdo
// var ar  = [1,2,3,4,5,6];

// var ans = ar.map(function(elem){
//         return  elem + 2;
// })
// console.log(ans);



// q2:  nap se har ek array ke member pe hello printr krdo ek new array meiun

// var ans2 = ar.map(function(elem){
//     return  ` hello ${elem}`;
// })
// console.log(ans2);



// q3: ek array se ek new array me dalo agar word ki length 5 ho toh use p tag pe dalo nhi toh span tag me dalo do using map

// var ar3  =  ["hello",  "samad", "samiya", "mustajab", "samar"];

// var ans3 = ar3.map(function(elem){
//     if(elem.length == 5 ){
//         return  `<p>${elem}</p>`;
//     }
   
//     else{
//         return  `<span>${elem}</span>`;
//     }
// })




//q4: ek array of objects hai, aur us array mein hum logo ke  pass  kaafi deta hai,  usse ek array baano jisme sirf name ho


// var ar4 = [
//     {name: "samad",  age: 20,  single: true},
//     {name: "samiya",  age: 20.5,  single: true},
//     {name: "samar",  age: 2,  single: true}
// ]


// var ans4 = ar4.map(function(elem){
//    return  console.log(elem.name);
// })



// var ans4part2    = ar4.map(function(elem){
//     return {name: elem.name};
// })




// filter : filter bhi ek array ki method hoti hai jo sirf array pe hi chalta hai , filter ka structure map ki tarah hi hai, filter bhi return krta hai naya array, 


// filter me return ho krenge woh  har haalat mein ek boolen hi return hoga  yah toh true or yah toh false ,

// map jp return krta hai woh direct save hota hai array mein , but filter  retiurn krta  hai booolean mein toh us waqt jo value hogi woh save hogi new array mein boolen save nhi hogi naya array mein



// q1: jp bhi array mein woh  new array mein save kro using filter method.
// var ar5  = [1,2,3,4,5];

// var ans6   = ar5.filter(function(elem){
//     return true;
// })


//  q2:  woh numbers retrun kro even ho using filter method 
// var ans6part2 = ar5.filter(function(val){

//     if(val%2 === 0){
//         return true;
//     }
// })


// q3:  array mein jitne bhi naam hai jinke name mein a arha ho unhe remove krdo baki ek new array mein save krdo using filter methd


// var ar6  = ["samad", "samiya", "hello", "hiii", "endian", "bye"];

// var ans7  = ar6.filter(function(val){
//     if(! val.includes("a")){
//         return true;
//     }
// })

// q4: aise naam ko remove kro jinsme do yah do se zyaada baar a arha ho 


// agar name mein ek a hai do mein split hoga array
// agar name mein do a  hai teen  mein split hoga array

// var ar8 = ["samad", "aftb",  "saaamad", "samiya", "arshaad", "hiioooaaaa"];

// var ans8   =   ar8.filter(function(val){
//     if(val.split("a") .length  <= 2) {
//         return true;
//     }
// })



// iife :  immediate  invoked  fucntion expression
// yeh woh fucntion hota hai jo banate hi chal jata hai, isliye ise ham kehte hain immediately invoked fucntion.

// iife use hota hai private variables banane ke liye taki koi bahar se use access nhi krskte .. 
 
// var ansiife  =  (function(){
//     // console.log("helllo");
//       var a = 12;

//       return {
//         getter: function(){
//             console.log(a);
//         }
//         ,
//        setter : function(input){
//            a = input;
//            console.log(a);
//        }
//       }
// })();


// console.log(ansiife.getter())
// ansiife.setter(20);
// console.log(ansiife.setter())



// agar ham function ke andar us variables ko change and access  krne ka code likhe or use bahar bhejde toh hum use bahar se bhi  change or accesss krskte hai ham us private variables ko.



//  slice and splice method in js
// slice array me se kisi bhi part ko alag krdeta  hai.

// var b = [1,2,3,4,5,6,7,8,9,10];
// console.log(b.slice(2,5));
// console.log(b.splice(2,4));


// mutable and immutable 
// aisa koi bhi operation jise krne se array change hojaye use kehte hai mutable and agar array pehla jaisa hi hai change nhi hai koi bhi operation krne ke baad toh use kehte hai immutable




// how to remove any  property in objects 

var c = {
    name: "syed samad ali",
    age : 26,
    profession : "Js developer & founder of techno syeds",
    married : true,
    childs: true,

}
delete c.age;
// console.log(c);


const d = {
    name: "apne bhoiss",
    age: 26,
    professions : "developers & co founders ",
    married : true,
    childs: Infinity,
}

d.name  = "all sainties";
// agar const obj me object banaoge toh obj change nhi krskte pr uske andar ki properties ko update krskte hai apn log.




var e = {
    name : "xyz",
    rollno : 57,
    isengineer : true,

}
Object.freeze(e);
e.name = "saand";
delete e.rollno;


// agar kisi bhi object ko freeze krdoge toh nahi update krpagoe na hi change krskte hai us object pe koi bhi operation nhi krskte hai apn log



//  !! symbol ka use
/// !! use krskte  hai ham kisi bhi cheez ko uske resembled  krne ke liye mtlb ki agar ham kiis bhi cheez ke aghe toh woh apne falsy yah truthy nature me se jo bhi nature ki hogi usme convert hojayegi ..



// Q: remove dulicates from an array 

// var arrr = [1,1,1,2,3,4,2,2,1,1,4,5,6,1,2,5,6,7,8,1,8,10,23];
// var arr2 = [... new Set(arrr)];


// promises : promises mtlb koi bhi kaam jo ap ko krna hai pr woh baad me complete hoga toh us time pr use krte hai promises ko

//promises jab use hoga koi kaam ap krrhe ho pr woh future me kabhi jake hoga toh woh promises se hoga

// usme teen state hongi yah toh promise poora hoga yah nhi
// agar promise poora hoga mtlb resolve  toh then chalega nahi toh catch chalega mtlb reject hua hoga or yeh dono future me pata chalega toh isko ek variable me save krskte hai kyoki jab pending state me hoga

// promises ke andar hamesha yah toh res chalega yah phir rej or agar resolve chala toh woh then ke basis pe chaleha or rej hua toh catch ke basis pe chalega


//Q1: 5 second baad ek random number nikalo,or agr random number 5 se chota hai toh,hello print kro nahi toh hii print kro


// setTimeout(function(){
//     var rn = Math.floor(Math.random() * 10);
//     if(rn<5){
//         console.log("helloo");
//     }

//     else{
//         console.log("hii")

//     }
// }, 5000)


// var ans = new Promise(function(res, rej){
//     if(false){
//          return res();
//     }

//     else{
//          return rej();
//     }
// })

// ans
// .then(function(){
//     console.log("resolved hua");
// })

// .catch(function(){
//     console.log("reject hua hai")

// })

// promises me jo bhi hoga yah toh woh pending state me hoga m yah resolve hojayega yah reject hojayega

// state 1: promise banao or resultant lo
// state 2 : waiting time jaha pr promise complete hoga
// state 3: ab then yah catch chalega res or rej ke basis pe

// q2: 

// var ans = new Promise(function(res, rej){
//     setTimeout(function(){
//         return res();
//     }, 1000)
// })


// ans
// .then(function(){
//     console.log("helooooo")
// })

// .catch(function(){
//     console.log("byeeeeeeeeeeeeee")

// })


// series of work using promise chain
// subah utho or namaz padho
// workout kro or diet lo
// coding kro or question solver kro
// so jao



// var ans = new Promise(function(res, rej){
//      setTimeout(function(){
//         return res("subah utho or namaz padho");
//      }, 1000)
// })


// var p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//          return res("workout kro or diet loo");
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data)

//     return new Promise(function(res, rej){
//         return res("coding kro or question solve kro")
//     })
// })


// var p4 = p3.then(function(data){
//     console.log(data)
//     return new Promise(function(res, rej){
//         return res("so jao ab bht kaam krlia")
//     })
// })


// p4.then(function(data){
//     console.log(data);
// })


// q: user will ask a number btw 0 to 9 and if the number is below 5 resolve if not reject



// var ans = new Promise(function(res, rej){
//   var n = Math.floor(Math.random() * 9)

//   if(n<5){
//     return res();
//   }

//   else{
//     return rej();
//   }
// })

// ans
// .then(function(){
//     console.log("resolver hua")
// })
// .catch(function(){
//     console.log("reject hua")
// })

// classes in js 
// why classes : ek single individual ka initial data or us data ke sath  related operations  sab ek jagah likh skte ho, aur phir us jese jitne chahe bana skte ho..

// class is like a  mould or a saancha jese ap sanche se us ke jese bht sare products bana skte ho or kha  skte ho pr woh khane laayak hote hai or woh sab ek jese hote hai, or ap sancha ko nhi kha skte, sancha ek structure deta jese products baneneg uske liyem pr us product ki value hoti hai or sancha ki nhi

// eg sanche pe likha hai width, heigh,  color, shape, toh products banege us sanche se uski sanche ke barbar width hogi, height hogi, color jo product bana chate ho woh color hoga, shape jo sanche ko hoga, toh ap sanche ko use nhi krskte kyoki us ki koin value nhi hoti hai, pr usse banne wale products ki value hoti hai, or ap use kha bhi skte ho agar khane layak product ban jaye toh

//  classes basically ek template ka kaam krti objects create krne ke liye jitne chahte aaap utne objects same or dynamic both..

// class ek andar ek constructor fnc ata hai jiske andar apn key value ki form me value detea hau or woh values  biscuti me save hojati hai jaha jaha this kwyord likha ho waha waha..


// new keyword ek blank object create krke deta hai or usme woh sab value ati hai jo this ke form me likhi hiui hai constructot fnc ke andar...


//  class sanchabiscuit{
//     constructor(name, width, height, color){
//         this.name = name;
//         this.width =  width;
//         this.height = height;
//         this.color = color;
//     }
//  }

//  var biscuit1  = new sanchabiscuit("parleG",30, 50, "red");
//  var biscuit2  = new sanchabiscuit("oreo",39, 50, "orange");
//  var biscuit3  = new sanchabiscuit("choclate", 30, 50, "black");


//  q: write a js program to find the frequency of each element of an array..

//array ke har member pr check kro ki wese koi property obj me hai yah nhi agar nhi hai toh value 1 krdo or agar hai toh value badhado..

// var obj = {}
// var arr  = ["a", "a", "a", "aa", "aa", "aa", "abcd", "abc", "abcd", "e", "e"]


// arr.forEach(function(elem){

//     obj.hasOwnProperty(elem) ? obj[elem]++ : obj[elem] = 1;
// })
// console.log(obj)


// q2: write a js program to find the duplicates value of an array.
// var obj ={}
// var arr = ["aa", "aa", 1, 1, 1, "abc", "abc", "e", "e", 2, "helloo"]

// arr.forEach(function(elem){
//     obj.hasOwnProperty(elem) ? obj[elem]++ : obj[elem] = 1;
// })


// for(var i in obj){
//     if(obj[i]> 1){
//         console.log(i)
//     }
// }




//  write a js program which accept a number as input and insert dahes (-) between  each two even numbers ..
// for eg : if youb accept 025468 as input the output shoule be  0254 -6-8//


// var n = 56526634;
// var nstr  = n.toString();

// for(var i = 1; i<nstr.length; i++){
//     if(Number(nstr[i-1]) % 2 === 0 && Number(nstr[i]) %2 ===0){
//         nstr = nstr.substring(0, i) + "-" + nstr.substring(i, nstr.length);
//     }

// }


// write a js program which accepts a string as input and change their cases uppercase to lowercase and lowrrcase to uppercase..

// function caseconvert(str){
//  var sptarray = str.split("").map(function(elem){
//       // lower case character
//       if(elem.charCodeAt() > 90){
//          return elem.toUpperCase();
//       }

//       else{
//         // uppercase chararer
//         return elem.toLowerCase();

//       }
//  })

//   return   sptarray.join("");

// }

// var ans = caseconvert("Hi helooo KaiseHo App SAAb");
// console.log(ans);



//Q: write the js program which prints the elemenst of the array
//

// var a  =[[1,2,3,4],   [5,6,7,8],   [9,10,11,12]];

// for(var  i = 0;  i<a.length; i++){
//       console.log(`printing row ${i+1}`)

//     for(var j = 0; j<a[i].length;  j++){
//           console.log(a[i][j]);
//     }
// }



// // Q: binary serach  in js
// var arr = [1,2,3,4,5,6,7,8,10];
// var search = 6;
// var start = arr[0];
// var end = arr.length-1;
// var check = 0;
// var mid = Math.floor((start+mid)/2);

// while(start<=end){
//     if(search == arr[mid]){
//       check = mid;
//       break;
//     }

//     else if(search>arr[mid]){
//         start = mid+1;
//         mid = Math.floor((start+end)/2);
//         check =mid;

//     }
//     else if(search<arr[mid]){
//         end = mid-1;
//         mid = Math.floor((start+end)/2);
//         check = mid;
//     }

// }


// if(check == 0){
//     console.log("not found the element you are searching in an given array")

// }
// else{
//     console.log("found at index ", check );
// }  


//  Q: write a js program to add  to compute the sum of each individual index values of a given two arrays

// var a = [1,2,3,4,5]
// var b = [6,7,8,9,10];


// for(var i = 0; i<a.length; i++){
//    console.log(a[i] + b[i]);

// }


//  lambda fucntions
//  jo js mein fat arrow fucntions hote hau es6 mein use hi lambda fucntions kehte hai js mein 

// var a = (name) =>{
//    console.log(name)
// }

// a("samad");


// agar fat arrow fucntion me ek params ho toh fat hatha skte hai  uska apn fat hatha skte hai

// var print = a =>{
//   console.log(a)
// }
// print(1)



// fat arrow fucntion me ham bina {} lagaye bina return like return krkste hai agar ek single line statement kuch return krna ho toh...


// var add = (a,b)=> a+b;
// var ans = add(1,2);
// console.log(ans)






//  temporal dead zone
// vars ki help se ham pehle js mein varivales banate the or usme ham varivale baad me baane ke baad bhi pehle use krskte the koi bhi error  nhi atha tha kyoki waha hoisting ka concept lgta tha


// console.log(a) // ans mein undefined print hoga kyoki variable toh hai upar declare hoisting ke concept se pr usme koi value nhi hai use pehele hi access krliya islige undefined ayega not defined yah error nhi ayega

// var a = 12;




// console.log(a); //  jab ham variable banate hai let ke help se js mein toh usme hoiting ka concept nhi lgta hai or refernce error ata hai ,  kyoki us waqt variable temporal dead zone stage mein hota hai...


// let a = 12;


// currying :  currying ka concept fucntins ke liye hota hai,  jab bhi hamare pass esa fnc ho jisme ek se zyada params ho,toh use ham simplify krdete hai, ese fnc jismein ek se zyadda params ho use ham series of fnc mein todh dete hai, or har fnc return krta hai ek or fnc jo ki purane fnc ke parms ko use krega...



// curring mein ham ese fnc ko jisme ek se zyada prams ho usko series of fnction mein todh dete hai, or woh series of fnc retun krte hai fnc or us fucntions mein uske upar wale fncs ke params ko use krskte hai



// function add(a,b){
// console.log("sum of a and b is ", a+b);
// }
// add(12,13)




// function parent(a){
//    return function(b){
//      return a+b;
//    }
// }

// var ans = parent(12);
// var finalans = ans(13);

// function parent(a){

//     return function(b){
//         return a*b;
//     }
// }


// var ans = parent(12);
// var finalsns = ans(12);


// pure functions : pure function woh fnc hota hai jo do condtion ko satisfy krta hai
// 1: global variavle ki value change na kre
// 2: same parms dene pr har bar same outpu dena chauiye


// var a = 12;
// function purefnc(val){
//     return Math.random() * val;
//     // return val+2;
//     // a++;


// }

// var ans = purefnc(1);
// console.log(ans)



