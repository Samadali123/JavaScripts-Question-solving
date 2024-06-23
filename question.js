// methods ☑️
//  sort() ☑️
//  join() ☑️
//  split() ☑️
//  concat()  ☑️
//  includes() ☑️
//  ToUpperCase()  ☑️
//  ToLowerCase()  ☑️
// trim() ☑️
//   toString()  ☑️
//   .substring() ☑️
//   Nuumber() ☑️
//   isNan() ☑️
// Array.isArray() ☑️
//  charAt() ☑️
//  CodePointAT() ☑️
//  charCodeAt() ☑️
//   indexof() ☑️
//   lastIndexOf() ☑️
//  instanceof()
//   valueOf()  
//   replace() 
//   search() 
//   Promise.all()  

const e = require("express");



// var str1 = "hello hi how are you";
// var str2 = "byee bye gye";

// var newstr1 = str1.split(" ");
// var newstr12=  newstr1.join(" ");

// var  arr1 = [1,2, 3,4,5]
// var arr2 = [5,6,7,8,9,10]

// var arr3 = arr1.concat(arr2);
// console.log(arr3);


// var string1 = "hello prettiest";
// var string2 = "how cute you aree";

// var string3 = string1.concat(string2)
// console.log(string3)

// if(string3.includes("o")){
//     console.log("  yes , it is there")
// }
// else{
//     console.log("NO given searching charcter is not there in a string")
// }

// var str = "hello how are you hope your are fine there"
// var str2 = "KESE HO APP SAB"
// var str3 = "              hii hello kese jo sap san       ";
// var four = 123;
// var str4 = "mozilla";
// var five = "1234";
// var ans = str.toUpperCase();
// console.log(ans)
// var ans2 = str2.toLowerCase();
// console.log(ans2)
// var ans3 = str3.trim();
// var ans4 = four.toString()
// var ans5 = str4.substring(0, 3) + "developer"+str4.substring(3);
// console.log(ans5);
// var ans6 =  Number(five);
// console.log(ans6)
// var six = "hello123";
// var ans7  =isNaN(six)
// var arr = [1,2,3];
// var ans8 = Array.isArray(arr);
// var chars  = "helo devils people wanna  fight with me"
// var ans9  = chars.charAt(3)
// console.log(`charcater at index3 is`, ans9);
// var codeadd =  "character";
// var index = 0;
// var ans10 = codeadd.codePointAt(index);
// var ans11 = codeadd.charCodeAt(index);
// var para = "hello hi kaise hi apnki esi thi hii apki dash";
// var para2 = "hello kaise ho kutte apki hcdcdc kutte hello kutte schcvdc";
// var searchword = "hi";
// var searchword2 = "kutte";
// var ans12 =  para.indexOf(searchword);
// var ans13 = para2.lastIndexOf(searchword2)
// var st   = "hello how are you cutiue pie "



// // Q1: user se maanngo ek number or agar numer 10 se zyada ho toh print kro hello nahi toh bye


// var user = Number(prompt("enter a number"));
// if(user>10){
//     console.log("hello")

// }

// else{
//     console.log("hii")

// }


// // Q2: user se maango do number or usme 10 add krdo or usme 10 add pr 20 se zyada arha hai toh yes print kro nahi toh no print kro

// var n1 = Number(prompt("enter n1"))
// var n2 = Number(prompt("enter n2"))
// var add = n1+n2;

// if(add>20){
//     console.log("yes ")
// }

// else{
//     console.log("no")

// }

// // Q3: user se nunber maango do bar or add kro or agar doosre number ki akhri digit us added number se choti hai toh print kro 


// var n1 = Number(prompt("enter n1"))
// var n2 = Number(prompt("enter n2"))
// var lastdigitn2 =   n2%10;
// var added = n1+n2;
// if(lastdigitn2<added){
//     console.log("yes choti hai")

// }

// else{
//     console.log("no badi hai")
// }


// // Q4: user se do passwords maango agar woh dono password same hai toh login kro nahi toh wrong password bolo 

// var pass1 = Number(prompt("enter password1"))
// var pass2  = Number(prompt("enter password2"))


// if(pass1 === pass2){
//   alert("logged in")

// }

// else{
//     alert("sorry, youve entered a wrong password")

// }
// Q:5 : write a   javascript function to check whether an input is an array or not !


// function check(input){
//        return Array.isArray(input)
// }

// alert(check([1,2,3,4,5]));

// Q6: write a javascipt to clone an array .

// function clonedarray (clone){
//       return [...clone]
// }
// console.log(clonedarray([1,2,3,4,5]));


// Q7: write the javascript fucntion to get the first element of an array, passing a parameter "n"  then will return the first n element of an array as an output..


// function parmss(inp, n= 1){

//     for(i=0; i<n; i++){
//         console.log(inp[i])
//     }
// }

// parmss([1,2,3,4,5], 2 )

// Q8:  write a simple  javascript  program to join all  elements of  the following array into a string as an output .

// function joinstr(arr){
//      return arr.join(" ")
// }

// console.log(joinstr(["helo", "kaise", "ho"]));


// split krte hai toh array retrun hota hai or agar join krenge toh string return hogi


//Q9:  possible ways to create an object

// var obj = {};
// console.log(typeof(obj))

// var obj2  = Object.create(null)
// console.log(typeof(obj2))

// function obj3 (){
// }

// var ans =  new obj3();
// console.log(typeof(ans))


//Q10: foreach ki help se array ki har value mein 2 add krke print kro..


// var arr = [1,2,3,4,5]
// arr.forEach(function(elem){
//     console.log(elem+2)

// })


// Q11: foreach  ki help se array ke har element ke aghe koi string add krke print kro

// var arr = [1,2,3,4,5]
// arr.forEach(function(elem){
//      console.log(elem+ "hello")
// })


// q12: using foreach print all members of an array except ones which is greater than 2 
// var arr = [1,2,3,4,5,6,7]
// arr.forEach(function(elem){
//     if(elem<=2)
// {
//     console.log(elem)
// }

// })

// q13: saare elements jo array me unka sum print kro as an answer..

// var arr = [1,2,3,4,5]
// var sum = 0;
// arr.forEach(function(elem){
//     sum = sum + elem;
// })
// console.log(sum)

// Q14: saare members ka sum kro string ko chodh kee

// var arr = ["hello", 1, 2, 3, 4, 5, "samad", "kaise", "ho"]
// var sum = 0;
// arr.forEach(function(elem){
//     if(typeof elem === 'number'){
//         sum = sum + elem;
//     }
// })
// console.log(sum);


// q15: map se har ke har ek member pr 2 add kro or ek new array me save krdo

//    var arr = [1,2,3,4,5]
//    var ans= arr.map(function(elem){
//        return elem+2;
//    })
//    console.log(ans)


// q16:  nap se har ek array ke member pe hello printr krdo ek new array meiun

//  var arr = [1,2,3,4,5];
//  var ans = arr.map(function(elem){
//     return `hello ${elem}`;
//  })

//  console.log(ans)

// Q17: ek array se ek new array me dalo agar word ki length 5 ho toh use p tag pe dalo nhi toh span tag me dalo do using map

// var arr = ["hello", "samad", "samiya", "kaiseho"];

// var ans = arr.map(function(elem){
//     if(elem.length == 5){
//         return `<p>${elem}</p>`;
//     }
//     else{
//         return  `<span>${elem}</p>`
//     }
// })
// console.log(ans)



//q18: ek array of objects hai, aur us array mein hum logo ke  pass  kaafi deta hai,  usse ek array baano jisme sirf name ho

// var arr = [
//     {name: "samad", age: 20, male: true},
//     {name: "arham", age: 19, male: true},
//     {name: "salim", age: 21, male: true},
//     {name: "tahoor", age: 20, male: true},
// ]

// var namearr = arr.map(function(elem){
//     //  return elem.name;
//     return {name:elem.name};
// })
// console.log(namearr)





// q19: jp bhi array mein woh  new array mein save kro using filter method.

// var arr = [1,2,4,6,8, 10,12,14,16,18, 20,21]
// var ans = arr.filter(function(elem){
//      if(elem%2 === 0){
//         return true;
//      }
// })
// console.log(ans)


//  q20:  woh numbers retrun kro odd ho using filter method 

// var arr = [1,2,3,4,5,6,7,8,9,10]
// var evenarray = arr.filter(function(elem){
//     if(elem%2 !== 0  && elem>=5){
//         return true
//     }
// })

// console.log(evenarray)


// q21:  array mein jitne bhi naam hai jinke name mein a arha ho unhe remove krdo baki ek new array mein save krdo using filter methd

// var names =  ["samad", "samiya", "arham","hey", "tullu", "chmeen"]
// var ans = names.filter(function(elem){
//      if(elem.includes('a')){}
//      else{
//         return true;
//      }
// })

// console.log(ans)


// q22: aise naam ko remove kro jinsme do yah do se zyaada baar a arha ho 

// var names = ["samad", "samiya", "salim", "tahoor", "arham", "naved"];

// var ans = names.filter(function(elem){
//     var splitted = elem.split("a");
//     if(splitted.length<=2){
//         return true;
//     }
// })
// console.log(ans)

// Q23: remove dulicates from an array 
// var arr = [1,2,1,2,3,2,4,2,5,6,3,6,7,2,1,10]
// var newarr = [...new Set(arr)];
// console.log(newarr)



//Q24: 5 second baad ek random number nikalo,or agr random number 5 se chota hai toh,hello print kro nahi toh hii print kro

// var rn = Math.floor(Math.random())
// setTimeout(function(){
//     if(rn <=  5){
//         console.log("hello")
//     }

//     else{
// console.log("hii")

//     }
// }, 5000)


// Q25: user will ask a number btw 0 to 9 and if the number is below 5 resolve if not reject

// var rn = Math.floor(Math.random()* 9)
// var ans = new Promise(function(res, rej){
//     if(rn<5){
//         return res("resolved");
//     }

//     else{
//         return rej("rejects");
//     }
// }) 

// ans.then(function(data){
//     console.log(data);
// })
// .catch(function(data){
//     console.log(data)
// })


// Q26: write a js program to find the frequency of each element of an array..

// var arr = [1,2,3,4,5,1,2,2,3,4,5,2,3,5,56,2,4,5,5,6]
// var obj ={};

// arr.forEach(function(elem){
//     obj.hasOwnProperty(elem) ? obj[elem]++ : obj[elem] = 1;
// })
// console.log(obj)



// Q27: write a js program to find the duplicates value of an array.

// var obj = {}
// var arr = [1,2,3,4,5,6,7,2,2,3,1,4,5,3,4,5,6,10]

// arr.forEach(function(elem){
//     obj.hasOwnProperty(elem) ? obj[elem]++ : obj[elem] = 1;
// })

// for(var key in obj){
//     if(obj[key]>1){
//         console.log(key)
//     }
// }


// Q28 write a js program which accept a number as input and insert dahes (-) between  each two even numbers .. for eg : if youb accept 025468 as input the output shoule be  0254 -6-8

var input = 12436891;
// var nstr  = input.toString();

// for(var i = 1; i<nstr.length; i++){
//     if(Number(nstr[i-1]) %2 == 0 && Number(nstr[i])% 2 == 0){
//         nstr = nstr.substring(0, i) + "-" + nstr.substring(i, nstr.length);
//     }
// }

// console.log(nstr)




//Q29 write a js program which accepts a string as input and change their cases uppercase to lowercase and lowrrcase to uppercase..


// function stringchange(str){
//      var splittedstr = str.split("")
//      var ans = splittedstr.map(function(elem){
//          if(elem.charCodeAt() > 90){
//             return elem.toUpperCase();
//          }

//          else{
//             return elem.toLowerCase();
//          }
//      })

//      return ans.join("");
// }

// var output = stringchange("Hello Kaise ho app SaB")

//Q30: write the js program which prints the elemenst of the array

// var arr =  [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15]];

// for(var i = 0;  i<arr.length; i++){
// console.log(`printing row ${i+1}`)
// for(var j = 0; j<arr[i].length;  j++){
//     console.log(arr[i][j]);
// }
// }

// Q31: linear  serach  in js

// var arr = [1,2,3,4,5,6,7]
// var searching = 3;
// var check = 0;

// for(var i = 0; i<arr.length; i++){
//     if(arr[i] == searching){
//         check = i;
//         break;
//     }
// }

// if(check == 0){
//     console.log("not found")

// }
// else{
//     console.log(`found at index ${check}`)
// }

// Q31: binary search in js

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var start = arr[0];
// var end = arr.length - 1;
// var searching = 7;
// var middle = Math.floor((start + end) / 2);
// var check = 0;

// while (start <= end) {
//     if (searching == arr[middle]) {
//         check = middle;
//         break;
//     }

//     else if (searching > arr[middle]) {
//         start = middle + 1;
//         middle = Math.floor((start + end) / 2);
//     }

//     else if (searching < arr[middle]) {
//         end = middle - 1; 
//         middle = Math.floor((start + end) / 2);
//     }
// }


// if (check == 0) {
//     console.log("not found the element you are searching in an given array")
// }
// else {
//     console.log("found at index ", check);
// }

// //  Q33: write a js program to add  to compute the sum of each individual index values of a given two arrays

// var arr1 = [1,2,3,4,5]
// var arr2 = [1,2,3,4,5]


// for(var i = 0; i<arr1.length; i++){
//     console.log(arr1[i] + arr2[i]);
// }


// Q34: given  a string,  reverse each word in a string
// var str = "hello dostion kaise ho";
// var str2= str.split(" ").map(function(word){
//     var ans = word.split("").reverse().join("");
//     return ans;
// })
// var str3 = str2.join(" ")
// console.log(str3)


//Q35: how to check if an object is an array or not ?

// function checkarray(input){
//   return Array.isArray(input)
// }

// var ans = checkarray([])
// var anss = checkarray({})
// console.log(ans)
// console.log(anss)


// q36: how to empty an array in javaScript

// var arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.length)
// arr.length = 0;
// console.log(arr)


// q37: how to check if a number is an integer ?

// var num = 1233444444;
// // console.log(Number.isInteger(num));

// if(num % 1 === 0){
//     console.log("integer hai sahab")
// }

// else{
//     console.log("not a integer")
// }


// q38:  duplicate an array:
// eg: [1,2,3,4,5]  [1,2,3,4,5]


// function duplicate(arr){
//   var ans =  arr.concat(arr)
//   return ans;
// }

// console.log(duplicate([1,2,3,4,5]));



// q39:  write a javascipt function which reverse a number;

// function reversekro(num){
//    return Number(num.toString().split("").reverse().join(""));
// }

// console.log(reversekro(12));
// function reverse(num){
// var rev = 0;
// while(num>0){
//     var lastgigit =  num%10;
//     rev = rev*10+lastgigit;
//     num = Math.floor(num/10) ;
// }
// return rev;
// }
// console.log(reverse(1234));

// q40: write a JavaScript fucntion which checks a whether a string is pallindromic or not

// function stringcheck(str){
//     let  rev =str.split("").reverse().join("");
//     if(str === rev){
//         console.log("pallidromic string hai")
//     }
//     else{
//         console.log("not a pallindromic string")
//     }
// }

// stringcheck("oyo")


//q41: write a js fnc that retruns a  passes strung with an  letters in alphabetical order 


// function str(input){
//   return   input.split("").sort().join("");
// }
// console.log(str("apple"));



//q42:  write a js fnc which accepts a string and converts first letter to uppercase and returns it 



// function convert(str){
//     var ans =  str.split(" ").map(function(word){
//          return word.charAt(0).toUpperCase() + word.substring(1)
//      })

//     return ans.join(" ")
// }

// console.log(convert("hello kaise ho"));






// var id1 = Symbol("123");
// var id2 = Symbol("123");
// console.table([typeof(id1),  typeof(id2)])

// symbol is primitve data type which is used to give an unique property to an element or any variable..


// var  a = (1+2+"2");
// var b = ("2"+ 1+ 1);
// var c = (1+2+3+"23"+2+"1")
// var d = ("1"+"2"+2+2+2+"1")
// console.table([a,b,c,d])

// agar staring me number hai toh usmein convert hoga type or agr staring mein string value hai toh phir poori value string me leg awoh by default.


// console.log(true)
// console.log(+true)


// q43: write a js fnc to get the number of occurences  of  each letter in a specified string...


// var obj = {};
// function occurences(str){
//       str.split("").forEach(function(elem){
//         obj.hasOwnProperty(elem) ? obj[elem]++ : obj[elem] = 1;
//       })
//    return obj;
// }
// console.log(occurences("apple"));


// Q34: loop an array and add all memebers of it.


// var arr = [1,2,3,4,5]
// var sum = 0;

// arr.forEach(function(elem){
//     sum+=elem;
// })
// console.log(sum)



// Q35: In an array of strings add only those which are  not a string

// var arr = ["hello", 123, "samad", "sam", 1, "bye", "meetyou", 2, 23, 23]

// var sum = 0;
// arr.forEach(function(elem){
//     if(typeof(elem) === "number"){
//         sum = sum + elem;
//     }
// })
// console.log(sum)

// Q36: loop an array of objects and remove alll objects which doesmt have male property


// var arr = [
//     {name:"syed samad ali", gender:"male", age:20},
//     {name:"arham", gender:"male", age:19},
//     {name:"ladki", gender:"female", age:10},
//     {name:"someone", gender:"notspecified", age:20},
//     {name:"boy", gender:"male", age:20},
//     {name:"arshad", gender:"male", age:20},
// ]


// var count = 0;
// arr.forEach(function(elem){
//    if(elem.gender !== "male"){
//     count++;
//    }

// })


//  for(var j = 1; j<=count; j++){
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i].gender  !== "male"){
//             arr.splice(i,1);
//         }
//     }
//  }

//  console.log(arr)


// q37: write a js fucntion to clone an array

// function cloning(arr){
//   var arr2 = [...arr];
//   return arr2;
// }

// console.log(cloning([1,2,3,4,5]))

// Q38: wirte a js function to get the first element  of an array,passing a paramter n,will get the first n numbers of an array


// function retrieve(arr, n = 1){
//     if(n <= arr.length){
//         for(var i = 0; i<n; i++){
//             console.log(arr[i]);
//        }
//     }

//     else{
//         console.log("not having that much elements in an array..")
//     }
// }

// retrieve([1,2,3,4,5], 4)


// q39: wirte a js function to get the last element  of an array,passing a paramter n,will get the last n numbers of an array


// function lastretriver(arr, n = 1){
//        if(n<=arr.length){
//         for(var i = 0; i<n; i++){
//             console.log(arr[arr.length-1 - i])
//         }
//        }

//        else{
//         console.log("sorry, youve have not that sufiifcient elements in  an array")

//        }
// }

// lastretriver([1,2,3,4,5], 10)

// // Q40: write a js fnc to get the most frequent element of an array

// var freq = { };
// function frequentelemchecker(arr){
//    arr.forEach(function(elem){
//         freq.hasOwnProperty(elem) ? freq[elem]++ : freq[elem] = 1;
//    })
// var ans  = Object.keys(freq).reduce(function(acc, val){
//     return freq[acc]> freq[val] ? acc : val;
// })

// console.log(ans)
// }

// frequentelemchecker([1,1,1,1,1,1,2,3,1,2,3,41,2,3,4,1,3,1,3,3,2,1])


// Q41: write a js program to shuffle an array randomly use math.random fucntion to shuffle an array randomly



// function shuffle(arr){
//     var  totalshufflearea = arr.length;
//    while(totalshufflearea > 0){
//     totalshufflearea--;
//     var indextobechanged = Math.floor(Math.random() * totalshufflearea)
//     var temp = arr[totalshufflearea];
//     arr[totalshufflearea] = arr[indextobechanged];
//     arr[indextobechanged]= temp;
//    }

//    return arr;
// }
// console.log(shuffle([1,2,3,4,5,6]));

// Q42: write a js function to add two arrays and same number should not be repeated


// function repeated(arr1, arr2){
// var ans = [...new Set(arr1.concat(arr2))];
// return ans;
// }
// console.log(repeated([1,2,3,13,4,51,2], [2,3,41,25,9,3,7,9,10]));



var str = "hello ji last kaise hai app last hello kast ";
var index = "last";
var str2  = new String("hii kese ho app sab")
// console.log(str2)
// console.log(str.charAt(2));
// console.log(str.indexOf(index))
// console.log(str.lastIndexOf(index));

var str3 = "hello";
var anotherstr3 =  str3.slice(0,3);
// console.log(anotherstr3)
var ansstring = str3.split("");
// console.log(ansstring.splice(0,2))
var newstr = "    hellokaisehoapp    ";
// console.log(newstr.trim())

const url = "https://syed%20samad%20ali%20.com";
var newurl = url.replace('%20', '-')
// console.log(newurl)

var anstr = "hellokaise";
// console.log(anstr.substring(0, 4)+"-"+anstr.substring(5));


var num = 12;
// console.log(typeof num)
var num2 = new Number(233)
// console.log(typeof num2)

var num3 = num.toString()
// console.log(typeof num3)
var num4 = 12345.37444;
// console.log(num4.toFixed(2)); // point ke baad kitne values chhaihye uske liye hota hai tofixed method or total kitne values me answer chahiye uske liye hota hai toprecision

// console.log(num4.toPrecision(4));


var currency = 1000000;
// console.log(currency.toLocaleString('en-US')); 

// yeh hota hai wording alag alag formate me krne ke liye 

// Math.random();
// 0.685475171757667
// Math.floor(3.2);
// 3
// Math.floor(Math.random()*10);
// 4

//floor whole number me convert krdeta hai lowert imteger mein


// Math.round(3.3);
// 3
// Math.round(4.8);
// 5
// Math.round(3.5);
// 4
// Math.round(3.4);
// 3
// Math.round(9.9);
10

// round value of round off krdeta hai closest value mein .4 tk hoga toh lower value lega nahi toh gtreater value lega

// Math.ceil(3.2);
// 4
// Math.ceil(2.0);
// 2
// Math.ceil(3.4)
// 4
// Math.ceil(5.8)
// 6

//ceil badi value me round off krta hai, ceil bilkul reverse hota hai floor ke

// Math.min(1,2,3,4)
// 1
// Math.max(2,3,2,23)
// 23

var date = new Date()
// console.log(date.toLocaleString())

// arrays and methods

var arr1 = [1,2,3,4,5]
var arr4 = [1,23,45,5,2,3,5]
var arr2 = new Array("hello", 124, "samad", 12, 90)

var specialarr = [1,2,3, [5,6,7], [9,10,11]]
var ansarr  = specialarr.flat(Infinity) //special property

// console.log(Array.from("syedsamadali"))
var first = "syed";
var middlename = "samad";
var lastname = "ali";

var names = Array.of(first,middlename,lastname)
// console.log(names.toString().split("").join(""));

// console.log(Array.isArray(arr1));
// console.log(arr1  instanceof(Array))
// console.log(ansarr)


// console.log(arr1.includes(1));
// console.log(arr1.concat(arr2));

// console.log(arr1.indexOf(2));

arr1.push(1)
arr2.pop()

arr1.unshift(0)
arr2.shift()

// console.log(arr1.slice(0,3));
arr2.splice(0,2)
// console.log(arr2)


var name = (a,b)=> a+b;
// console.log(name(12,12)); 

const obj = {
    name: "syed samad ali",
    age:20,
    issingle : true,
}

obj['age'] = 22;
// console.log(obj.name);
// console.log(obj['issingle']);
// console.log(obj.age);

// Object.freeze(obj);
obj.age = 30;
// console.log(obj.age);
obj.hello = function(){
    // console.log("hello from fucntion method here");
}

// console.log(obj.hello());
// console.log(obj);


const obj2  = Object.create(null);
obj2.name = "samad ali";
obj2.email = "samadali0125@gmail.com";

// console.log(obj2);


const obj3  = new Object();
// console.log(obj3);
obj3.name = "abdul syed samad ali";
obj3.isloggedin = true;
// console.log(obj3);



const obj4  =  {
    name: "syed samad ali",
    age: 30,
    hello : function(){
            console.log("hello from fucntion");
    },
   sayname: [{name: "arham"}, {name:"salim"}, {name: "tahoor sex"}],
  
   country : {
        nation: "indian",
        sex: "male",
        phone: "android",
   }
}

// console.log(obj4.sayname[2]);
// console.log(obj4.country.sex);



const obj5  = {
    name: "tahoorsex",
    age:20,
    issingle: true,
    badmaash: true,
    haramri: "boht xyadaaa",
}


for(var key in obj5){
    // console.log(key, obj[key]);
}  

// console.log(Object.keys(obj5));
// console.log(Object.values(obj5))



const object1 =   {name:"samad", age:20, humor: "notmuch"};
const object2 =   {name:"arham", age:20, humor: "kaafi xyaada"};


// const object3 = Object.assign(object1,object2);
// console.log(object1)

const object3 = {...object1, ...object2}
// console.log(object3)



const o1 = {
    name: "samad ali",
    age:20,
    indian: true
}

const {age}  = o1;
// console.log(age)

var {indian:boolean} = o1;
// console.log(boolean)

var arr1 = [1,2,3,4,5]
var [a,b, ...c]  = arr1;
// console.log(a,b,c) 


var  arr = ["samad", "arham", "salim", "sadaf", "sameera"]
var [a,,d] = arr;
// console.log(a,d);

function add(a,b=12){
     return a+b;

}
// console.log(add(1));


function restopt(a,b,c, ...d){
       console.log(a,b,c,d)

}

// restopt(1,2,3,4,5,6,7,8,9,10);



function naming(){
    var s = "samad ali";
    // console.log(s)

    function child(){
        var k = "samiya";
        console.log(s)
    }
    child()

    // console.log(k)

}

// naming();
// console.log(s)


{
    let m = 12;
}

// console.log(m)

// console.log(this)

function thiskey(){
    console.log(this)
}

// thiskey()



const o = {
    name: "Samad",
    age:20,
    indian:true,
    issingle : true,
    married : false,
    ans: function(){
        console.log(this.name)
    }
}
// o.ans();

var arrow = (a,b)=> a*b
arrow(12,12);


// (function(){console.log("syed samad ali")})();
var ans2 =  (function priavtevaldeclaration(){
          var privatvalue = 12;
     return { 
             getter: function(){       
                  console.log(privatvalue);
             },
             setter: function(newvalue){
                 privatvalue = newvalue;
                 console.log(privatvalue);
             }
         }
     }) ();

    //  console.log(ans2)

    // JavaScript Execution context :
    // 1: Global execution context  this: window
    // it contains: two phases , memory phase and exexution phase

    
    // memory phase me varaivbles or sabko memory assign hoti hai or exexution phase me usme value ati hai or execution wala part ata hai


    // 2: function execution context:
    // function execution context bhi hota hai woh function ke liye hota hai usme bhi memory exexution hota hai or execution phase bhi hota hai or jo return krte hai woh global execution phase me ata hai

    // function execution poora hone ke baad woh exuction delete hojata hai memory se


    // 3: eval execution context: eval exexcution phase mongoose me hota hai
    
    
    // memory phase  >  execution phase  > thread
   // call stack mein lifo follow hota hai jo pehle last me banta hai woh pehel out hota hai




   // nulling coalescing operator  ?? null : undefined 
  // null value nhi leta hai uske oppsite me jo value deoge woh lelega yah 

   let val;
//    val = 5 ?? 10;
// val = null ?? 4;
// val = undefined  ?? 12;
// val = null ?? undefined;
val =  13 ?? undefined;
//    console.log(`value of val is ${val}`);



// ternary operator 
 12>3 ? console.log("true hai") : console.log("false hai")


 // for of loop : sab pe chalta hai array strings..

 var arr = [1,2,3,4,5];
 for (const i of arr) {
    //  console.log(i);
 }


var str = "syed samad ali";

for (const i of str) {
    if(i !== " "){
        // console.log(i)
    }
}


var map = new Map();
 map.set("name", "syed samad ali")
 map.set("age", 21)
 map.set("single", true)

//  console.log(map)
 for (const i of map) {
    // console.log(i);
 }
 
 for(const [key, value] of map){
    //    console.log(`${key} = ${value}`)
 }



 // for in loop mainly for objects but we can use it on array also


var names = {
    name1: "syed samad ali",
    name2: "syed arham ali",
    name3: "salim khan",
    name4: "tahoor khan",
}



for(let key in names){
    // console.log(`${key} : ${names[key]}`);
}


var array = ["samad", "arham", "tahorr"]
for(let key in array){
    // console.log(array[key]);
}

 array.forEach(function(elem){
    // console.log(elem)
})


var ans = array.map(function(elem){
        //  return ` hello${elem}`;
})

// console.log(ans);


var arr2 =  [1,2,3,4,5,6]
var ans2 = arr2.filter(function(elem){
    return elem>3;
})

// console.log(ans2)



var arr3 =  [1,2,3,4,5]
var ans3 = arr3.reduce(function(acc, cval){
    return acc = acc+cval;
}, 0)

console.log(ans3);









    










































































