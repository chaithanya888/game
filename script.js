const button=document.getElementById("button");
const Password=document.getElementById("password");
const Username=document.getElementById("username");

document.getElementById("button").addEventListener("click",  function()
{

  event.preventDefault();
  

  const usernamevalue=Username.value;
  
  const userinput=document.getElementById("namefeild");
  
  if(usernamevalue===""){
    userinput.textContent="Fill the Username feild!";
    userinput.style.fontFamily="Microsoft JhengHei";
    userinput.style.color="red";
  }else{
    userinput.textContent="";
  }
  


const passwordvalue=Password.value;

const passwordinput=document.getElementById("passfeild");

if(passwordvalue===""){
  passwordinput.textContent="Enter your password.";
  passwordinput.style.color="red";
  passwordinput.style.fontFamily="Microsoft JhangHei";

}else{
  passwordinput.textContent="";
}

buttonhandler(usernamevalue, passwordvalue);


});

function buttonhandler(usernamevalue,passwordvalue){
  if(usernamevalue !==""&& passwordvalue!==""){
    alert("LOGIN COMPLETED!");
    location.reload();
  }else{
    alert("LOGIN FAILED.");
  }
  
}
