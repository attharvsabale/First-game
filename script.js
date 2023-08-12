var time =30;
var score =0;
var clickeNum;

//function for score
function Score(){
    score += 10 ;
    score = document.querySelector("#points").textContent = score;
}

//function for bubbles 
function makeBubble (){
    var num ="";

    for(var i = 1; i <= 78; i++){
       let RandomNum = Math.floor(Math.random()*10);
       num += `<div class="bubble">${RandomNum}</div>`;
    }
   
    document.querySelector("#pbottom").innerHTML = num;
   
    
}

//function for Hits
function hit(){
    clickeNum = Math.floor(Math.random()*10);
    document.querySelector("#hitts").textContent = clickeNum;
}

//function for time 
function runtime (){
   var timespan = setInterval(function(){
        if(time>0){
        time--;
        document.querySelector("#timer").textContent=time;
    
    }else{
          clearInterval(timespan);
          document.querySelector("#pbottom").innerHTML = "Timeup! your score is = " + `${score}`;
    }
    },1000);
}

//logic of clicking 

document.querySelector("#pbottom").addEventListener("click",function(deteails){
      var Num = (Number(deteails.target.textContent));
      if(Num === clickeNum){
        Score();
        makeBubble();
        hit();
      }
});




//calleing all functions 
runtime();
makeBubble();
hit();
