// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// let myVariable;
// myVariable = "bob";
// let maCariable = "bob";
// myVariable; //注释
// // print("35 + 25");
// let iceCream = "";
// // let heartRate = 85;
// // console.log(heartRate); // 输出：85
// // document.querySelector("html").addEventListener("click", function () {
// //   alert("别戳我，我怕疼！");
// // });

// document.querySelector("html").addEventListener("click", () => {
//   alert("别戳我，我怕疼！");
// }); //箭头函数的用法

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
}; //图片切换功能
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function () {
  alert("别戳我，我怕疼！");
  setUserName();
};

let sign = prompt("你是什么星座的？");

if (sign == "天蝎座") {
  alert("哇！我也是天蝎座的耶！");
}
//const aNumber = Number(window.prompt("输入一个数字", ""));
