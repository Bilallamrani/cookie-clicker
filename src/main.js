import "./index.css";

(() => {
   
    var clickdouble =false;
    var clickboost=false;
    var clickBonus= false;
    var clickAuto=false;
    var score = 0;
    var cptDouble =1;
    var cptBooster=1;
    var cptBonus=1;
    var cptAuto=1;

    let buttonRun = document.querySelector("#run");
    buttonRun.disabled = true;
    let buttonRun1 = document.querySelector("#run1");
    buttonRun1.disabled = true;
    let buttonRun2 = document.querySelector("#run2");
    buttonRun2.disabled = true;
    let buttonRun3 = document.querySelector("#run3");
    buttonRun3.disabled = true;

    document.getElementById("reset").addEventListener("click", () => {
     clickdouble =false;
     clickboost=false;
     clickBonus= false;
     clickAuto=false;
     score = 0;
     cptDouble =1;
     cptBooster=1;
     cptBonus=1;
     cptAuto=1;

   
    buttonRun.disabled = true;
   
    buttonRun1.disabled = true;
   
    buttonRun2.disabled = true;
  
    buttonRun3.disabled = true;
    document.getElementById ( 'run' ).style.backgroundColor = "blue" ;
    document.getElementById ( 'run1' ).style.backgroundColor = "blue" ;
    document.getElementById ( 'run2' ).style.backgroundColor = "blue" ;
    document.getElementById ( 'run3' ).style.backgroundColor = "blue" ;
              document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
      
      });
  
  document.getElementById("cookie").addEventListener("click", () => {
    if(score > 50){
      buttonRun1.disabled= false;
      document.getElementById ( 'run1' ).style.backgroundColor = "red" ;
      
    } if(score>80){
      buttonRun2.disabled=false;
      document.getElementById ( 'run2' ).style.backgroundColor = "red" ;
    } if(score>200){
      buttonRun3.disabled=false;
      document.getElementById ( 'run3' ).style.backgroundColor = "red" ;
    }if(score>250){
        buttonRun.disabled=false;
        document.getElementById ( 'run' ).style.backgroundColor = "red" ;
    }
       
            if(clickdouble==true){
                 score+=1;
            }else if(clickboost==true){
                  score+=3;
            }else if(clickAuto== true){
            
                score+=4;
                setTimeout(() => {clickAuto=false}, 30000);
                
              
               


            }else if(clickBonus== true){
                  score+=250;
                  clickBonus=false;
            }
            score++;
          
            document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
    
    });



    document.getElementById("run").addEventListener("click", () => {
      if(cptBonus==1){

        var confirmer = confirm('vous voulez acheter ce Bonus  à 250 ptn pour obtenir 200% ');
     if(confirmer==true && score>250){
         score-=250;
         alert("felicitation vous avez obtenu le Bonus 200%");
         document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
          clickAuto=false;
          clickdouble=false;
           clickBonus=true;
           clickboost=false;
            
       
           
     }else{
            alert("erreur ");
     }
    }else if(cptBonus>1){
        var confirmer = confirm('vous voulez acheter ce Bonus 200% à '+250*cptBonus+'ptn ');
        if(confirmer==true && score>250*cptBonus){
            score-=250*cptBonus;
            alert("felicitation vous avez obtenu ce bonus 200%");
            document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
              clickAuto=false;
              clickdouble=false;
              clickBonus=true;
              clickboost=false;
              
    }else{
        cptBonus--;
        alert("erreur ");
 }
}
     cptBonus++; 

     
});

    
    document.getElementById("run3").addEventListener("click", () => {
        if(cptAuto==1){

            var confirmer = confirm('vous voulez acheter ce Bonus *5 à 200 ptn pendant 30secondes ');
         if(confirmer==true && score>200){
             score-=200;
             alert("felicitation vous avez obtenu le Bonus *5 pendant 30s");
             document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
            clickAuto=true;
            clickdouble=false;
            clickBonus=false;
            clickboost=false;
            bonusx5();
            timeSeconde();
           
               
         }else{
                  cptAuto--;
                alert("erreur ");
         }
        }else if(cptAuto>1){
            var confirmer = confirm('vous voulez acheter ce Bonus *5 à '+200*cptAuto+'ptn ');
            if(confirmer==true && score>200*cptAuto){
                score-=200*cptAuto;
                alert("felicitation vous avez obtenu ce bonus *5 pendant 30s");
                document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
                  timeSeconde();
                  clickAuto=true;
                  clickdouble=false;
                  clickBonus=false;
                  clickboost=false;
                  bonusx5();
                 
        }else{
            cptAuto--;
            alert("erreur ");
     }
    }
         cptAuto++; 
  

});
 

      document.getElementById("run1").addEventListener("click", () => {
      
        if(cptDouble==1){

            var confirmer = confirm('vous voulez acheter ce multiplicateur *2 à 50 ptn ');
         if(confirmer==true && score>50){
             score-=50;
             alert("felicitation vous avez obtenu le double *2");
             document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
               clickdouble=true;
               clickBonus=false;
               clickboost=false;
               clickAuto=false;
               bonusx2();
         }else{
                 cptDouble--;
                alert("erreur ");
         }
        }else if(cptDouble>1){
            var confirmer = confirm('vous voulez acheter ce multiplicateur *2 à '+50*cptDouble+'ptn ');
            if(confirmer==true && score>50*cptDouble){
                score-=50*cptDouble;
                alert("felicitation vous avez obtenu le double *2");
                document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
                  clickdouble=true;
                  clickBonus=false;
                  clickboost=false;
                  clickAuto=false;
                  bonusx2();
        }else{
            cptDouble--;
            alert("erreur ");
     }
    }
         cptDouble++;
      });
     

    document.getElementById("run2").addEventListener("click", () => {
        if(cptBooster==1){

        var confirmer = confirm('vous voulez acheter ce booster à 80 ptn ');

          if(confirmer== true && score>80){
               score-=80;
               alert("felicitation vous avez obtenu le bosster *4");
             document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
                clickboost=true;
                clickdouble=false;
                clickBonus=false;
                clickAuto=false;
                booster();
               
          }else{
                    cptBooster--;
                    alert("dsl vous n'avez pas assez des points");
                
          }
        }else  if(cptBooster>1){
            var confirmer = confirm('vous voulez acheter ce booster à '+ 80*cptBooster+' ptn ');

            if(confirmer== true && score>80*cptBooster){
                 score-=80*cptBooster;
                 alert("felicitation vous avez obtenu le bosster *4");
               document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
                  clickboost=true;
                  clickdouble=false;
                  clickBonus=false;
                  clickAuto=false;
                  booster();
                 
            }else{
                     cptBooster--;
                      alert("dsl vous n'avez pas assez des points");
                  
            }

        }
        cptBooster++;  
});
function timeSecondeAzero(){
  //const departMinutes = 1;
  let temps = 0;
        
  const timerElement = document.getElementById("timeInSeconde");
  
  setInterval(() => {
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);
  
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
  
    timerElement.innerText = `${minutes}:${secondes}`;
    temps = temps <= 0 ? 0 : temps - 1;
  }, 1000);
  
 }

function timeSeconde(){
    //const departMinutes = 1;
    let temps = 0.5 * 60;
          
    const timerElement = document.getElementById("timeInSeconde");
    
    setInterval(() => {
      let minutes = parseInt(temps / 60, 10);
      let secondes = parseInt(temps % 60, 10);
    
      minutes = minutes < 10 ? "0" + minutes : minutes;
      secondes = secondes < 10 ? "0" + secondes : secondes;
    
      timerElement.innerText = `${minutes}:${secondes}`;
      temps = temps <= 0 ? 0 : temps - 1;
    }, 1000);
    
   }
  
   function bonusx2(){
    const image = document.getElementById("bonusx2");
    image.style.display = "block";
      setTimeout(() => {
        image.style.display = "none";
      }, 4000);
  } 
  
  function bonusx5(){
    const image = document.getElementById("bonusx5");
    image.style.display = "block";
    setTimeout(() => {
      image.style.display = "none";
    }, 4000);
    
  }
  
  function booster(){
    const image = document.getElementById("booster");
    image.style.display = "block";
    setTimeout(() => {
      image.style.display = "none";
    }, 4000);
    
  }


})();
