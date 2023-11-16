let myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/boochi01.png"){
        myImage.setAttribute("src","images/fole.png")
    }else{
        myImage.setAttribute("src","images/boochi01.png")
    }
}


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "welcome " + myName;
  }


  if(!localStorage.getItem("name")){
    setUserName();
  }else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "welcome " + storedName;
  }