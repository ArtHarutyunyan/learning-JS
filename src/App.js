//this, bind, call, apply,
// console.log(this);
// function akt() {
//   console.log(this);
// }
// akt();
// const obj = {
//   a: 10,
//   b: 40,
//   print() {
//     console.log(this);
//   },
// };
// obj.print1 = function () {
//   setTimeout(function () {
//     console.log(this);
//   }, 1000);
// };
// obj.print1 = function () {
//   setTimeout(() => {
//     console.log(this);
//   }, 1000);
// };
// obj.print();
// obj.print1();
// const btn = document.querySelector("button");
// function log() {
//   console.log(this);
// }
// log();
//btn.addEventListener("click", log);
// function printThis() {
//   console.log(this);
// }
// printThis();
// const myObj = { x: 1, y: 5 };
// printThis = printThis.bind(myObj);
// printThis();
// const person = {
//   name: "Artur",
//   prof: "Web developer",
//   hi() {
//     console.log("Hi, my name is " + this.name);
//   },
// };
// person.hi();
// const person2 = {
//   name: "Petros",
// };
// person.hi.call(person2);
// person2.hi = person.hi.bind(person2);
// person2.hi();
// person.hi.apply(person2);
///apply, call
const numbers = [1, 2, 6];
console.log(Math.max(1, 5, 4));
console.log(Math.max(numbers)); //NaN
console.log(Math.max(...numbers));
console.log(Math.max.apply(null, numbers));
console.log(Math.max.call(null, 3, 3, 0));

//Promise methods
//Promise.all
// async function getPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//   return await response.json();
// }
// async function getUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");

//   return await response.json();
// }
// async function getComments() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/comments");

//   return await response.json();
// }
// getPosts().then((res) => console.log(res));
// Promise.all([getComments(), getPosts(), getUsers()]).then(console.log);
//Promise.allSettled()
// Promise.allSettled([getComments(), getPosts(), getUsers()]).then(console.log);
// //Promise.allSettled()
// Promise.race([getComments(), getPosts(), getUsers()]).then(console.log);
// //Promise.resolve
// async function getImages() {
// const response = await fetch("https://jsonplaceholder.typicode.com/images");

// return await response.json();
// return Promise.resolve([
//   {
//     id: 1,
//     sueit: "lsjf",
//     name: "name",
//   },
//   // ]);
//   return Promise.reject("server error");
// }
// getImages().then(console.log).catch(console.warn);

//async await, try catch
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((respons) => respons.json())
//   .then(console.log)
//   .catch(console.error);

// any asyncron function return Promise
// function hello() {
//   return "hello";
// }
// async function hello1() {
//   return "hello1";
// }
// hello();
// hello1(); return Promise [[PromiseState]]:"fulfilled",[[PromiseResult]]:"hello1"

// async function getPosts(url) {
//   const respons = await fetch(url);
//   const posts = await respons.json();

//   return posts;
// }

// async function getPosts(url) {
//   try {
//     const respons = await fetch(url);
//     const posts = await respons.json();

//     return posts;
//   } catch (error) {
//     console.warn(error);
//     return error;
//   }
// }
// let arr = [];
// getPosts("https://jsonplaceholder.tyicode.com/posts").then((res) => {
//   arr = res;
// });
//.catch(console.warn);

// setTimeout(() => console.log(arr), 1000);

// const getComments = async () => {};

// class Articles {
//   async methodName() {}
// }
// const articles1 = new Articles();
// articles1.methodName().then();

//Promise
// function akaFetch() {
//   return new Promise((resolve, reject) => {
//     setInterval(() => resolve("hello new promise"), 2000);
//   });
// }
// akaFetch()
//   .then((response) => {
//     console.log(response);
//     return response + "!";
//   })
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => console.error("operation complete!"));

// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((respons) => respons.json())
//   .then(console.log);

//CommonJS
//export - module.exports, exports
//import - require (modeJS utils, npm packeses, custom modules)

// const name = "nelo Artur";
// console.log(name);
// const {sayHello} = require("./components/hello");
// console.log(sayHello());

//ES6 Moduels
//export
//import
//re-export

//import sayHello, {greeting, welcome} from "./components/hello";
// import * as hello from "./components/hello";
// import ("./components/bye").then((module)=>console.log(module))

// hello.greeting();

// sayHello();
// greeting();
// welcome();

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      hello
      <button>click me</button>
    </div>
  );
}

export default App;
