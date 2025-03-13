
let userScore=0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");
// console.log(choices);
ShowWinner =(userwin) =>{
    if(userwin===true){
        console.log("you win")
    }
    else{
        console.log("you lost")
    }

}

drawgame = () => {
    console.log("Game is draw");
}


const gencomputerchoice = () =>{
options = ["rock","paper","Sicessors"]
let index = Math.floor(Math.random() *3)
return options[index]};

playgame = (UserChoice) => {
const ComputerChoice = gencomputerchoice();
console.log("user choice is " ,UserChoice);
console.log("computer choice is " ,ComputerChoice);
   
if(UserChoice===ComputerChoice){
    drawgame();
}else{
    let userwin=true ;
    if(UserChoice==="rock"){
       userwin=ComputerChoice==="paper"?false:true; 
    }
    else if( UserChoice==="paper")
        {userwin=ComputerChoice==="Sicessors"?false:true;}
     else{
        userwin=ComputerChoice===rock?true:false;
    }
    ShowWinner(userwin);

}
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let UserChoice = choice.getAttribute("id") ;
        // console.log("choice is clicked",UserChoice);
        playgame(UserChoice);
    });
});
