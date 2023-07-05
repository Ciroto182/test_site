/*
Everything in between is a comment.
*/

/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!"; */

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Chrome is cool, ${storedName}`;
  }
  
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/checco.jpg") {
    myImage.setAttribute("src", "images/mare.jpg");
  } else {
    myImage.setAttribute("src", "images/checco.jpg");
  }
};

myButton.onclick = () => {
    setUserName();
  };
  
function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    }
    else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Chrome is cool, ${myName}`;
    }
  }
  
  
