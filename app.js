let user=0;
let comp=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const genCompChoice = () => {
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const draw=()=>{
    
    msg.innerText="game was draw";
    msg.style.backgroundColor="black";
}
const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        user++;
        userScorePara.innerText=user;
        
        msg.innerText=`YOU WIN! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comp++;
        compScorePara.innerText=comp;
       
        msg.innerText=`YOU LOSE. computer ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userchoice)=>{
    console.log("user choice =",userchoice)
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
    if(userchoice===compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        
        }else if(userchoice==="paper"){
           userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
};



choices.forEach((choice)=>{
    const userchoice=choice.getAttribute("id") ;
    choice.addEventListener("click",()=>{
        console.log("choice was clicked",userchoice);
        playGame(userchoice);
    })
})