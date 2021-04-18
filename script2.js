document.write("welcome to the spring world!");

document.body.style.backgroundImage = "URL(spring.jpg)";

function sayHello(){
var response = prompt("What is your name?");
alert("Hello " + response + ", Welcome to the spring world!");
}
sayHello();


function Enterquestion(){
var response = prompt("Do you like the spring?");
alert("No matter if you like the spring,let's start our spring journey!Please go to the first stop!");
var x = document.getElementById("demo");
x.style.fontSize = "25px";
x.style.color = "green";
}
Enterquestion();

function springstart(){
  var respose = prompt("which month is the spring start?(number only)");
  if(respose === "3"){
    alert("You are great! let's go to the next stop!");
  }
  else{
    alert("Sorry,you are wrong,please try again!");
  }
};

function springgarden(){
  var flowers = [];
  for (i=1;i<4;i++){
    flowers[i] = prompt("what flowers bloom in spring?");
  }
  alert("flower contains" + flowers + ",let's go to the next stop!");
  };

  function springfestival(){
    var respose = prompt("what is the traditional chinese festival in April?(Not pinyin)");
    if(respose === "Tomb-Sweeping Day"){
      alert("Great! You are right! Please go to the next stop!");
    }
    else{
      alert("Sorry,you are wrong,please try again!");
    }
  };

  function springf2(){
    var respose = prompt("which solar term is the start of spring in china?(Only PingYin and no capital)");
    if(respose === "lichun"){
      alert("Great! You are right! Please go to the next stop!");
    }
    else{
      alert("Sorry, you are wrong, plese try again!");
    }
  };


function springp(){
  var respose = prompt("what's the common environment problem in the spring of Beijing?(No capital)");
  if(respose === "catkin"){
    alert("Great! You are right!");
  }
  else{
    alert("Sorry, you are wrong, plese try again!");
  }
};
