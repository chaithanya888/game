const result=document.getElementsByClassName("game-result");
const showingoutput=document.getElementsByClassName("shownig-result");

 
const scores={
    win:0,
    loss:0,
    tie:0,
};
function Paper(){

    
    let pickingMOVE =Math.random();
    let computermove="";

    if(pickingMOVE<=0 && pickingMOVE<1/2){
    computermove="scissors";
    
} else if(pickingMOVE<=1/2 && pickingMOVE<2/3){
    computermove="rock";

}   
else if(pickingMOVE<=2/3 && pickingMOVE<1){
    computermove="paper";
} 

if(computermove==="paper"){
    console.log("Tie");
    scores.tie +=1;
}else if(computermove==="rock"){
    console.log("You lose.");
    scores.loss +=1;
}else if(computermove==="scissors"){
    console.log("You win.");
    scores.win +=1;
}
document.getElementsByClassName("game-result")[0].
innerHTML = `<p>computer move ${computermove}</p>
              <p>wins: ${scores.win} 
                loss: ${scores.loss} 
                ties: ${scores.tie}</p>`;


}
function Rock(){

    let pickingMOVE =Math.random();
    let computermove="";

    if(pickingMOVE<=0 && pickingMOVE<1/2){
    computermove="paper";
    
} else if(pickingMOVE<=1/2 && pickingMOVE<2/3){
    computermove="rock";

}   
else if(pickingMOVE<=2/3 && pickingMOVE<1){
    computermove="scissors";
} 

if(computermove==="paper"){
    console.log("You loss");
    scores.loss +=1;
    
}else if(computermove==="rock"){
    console.log("Tie");
    scores.tie +=1;
}else if(computermove==="scissors"){
    console.log("You win.");
    scores.win +=1;
}
document.getElementsByClassName("game-result")[0].
innerHTML = `  <p>computer move ${computermove}</p>
               <p>wins: ${scores.win} 
                loss: ${scores.loss} 
                ties: ${scores.tie}</p>`;

}

function Scissores(){

    let pickingMOVE =Math.random();
    let computermove="";
    
    if(pickingMOVE<=0 && pickingMOVE<1/2){
    computermove="rock";
    
} else if(pickingMOVE<=1/2 && pickingMOVE<2/3){
    computermove="paper";

}   
else if(pickingMOVE<=2/3 && pickingMOVE<1){
    computermove="scissors";
} 


if(computermove==="paper"){
    console.log("You win.");
    scores.win +=1;
}else if(computermove==="rock"){
    console.log("You lose.");
    scores.loss +=1;
}else if(computermove==="scissors"){
    console.log("Tie.");
    scores.tie +=1;
}

document.getElementsByClassName("game-result")[0].
innerHTML = `<p>computer move ${computermove}</p>
                <p>wins: ${scores.win} 
                loss: ${scores.loss} 
                ties: ${scores.tie}</p>`;

}
function reset(){
    scores.win=0;
    scores.loss=0;
    scores.tie=0;
    document.getElementsByClassName("game-result")[0].innerHTML
      =`<p>wins: ${scores.win} loss: ${scores.loss} tie: ${scores.tie}</P>`;
      console.log("Rested");
}