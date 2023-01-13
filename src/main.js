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

   


  document.getElementById("cookie").addEventListener("click", () => {
           
            if(clickdouble==true){
                 score+=1;
            }else if(clickboost==true){
                  score+=3;
            }else if(clickAuto== true){
                score+=4;
                setTimeout(() => {clickAuto=false}, 30000);
            }
            score++;
          
            document.getElementById ( 'clicker-counter' ) . innerHTML  = +score ;
    
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
            timeSeconde();
           
               
         }else{
                alert("erreur ");
         }
        }else if(cptAuto>1){
            var confirmer = confirm('vous voulez acheter ce Bonus *5 à '+200*cptAuto+'ptn ');
            if(confirmer==true && score>200*cptDouble){
                score-=200*cpt;
                alert("felicitation vous avez obtenu ce bonus *5 pendant 30s");
                document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
                  clickAuto=true;
                  clickdouble=false;
                  clickBonus=false;
                  clickboost=false;
                  timeSeconde();
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
         }else{
                alert("erreur ");
         }
        }else if(cptDouble>1){
            var confirmer = confirm('vous voulez acheter ce multiplicateur *2 à '+50*cptDouble+'ptn ');
            if(confirmer==true && score>50*cptDouble){
                score-=50*cpt;
                alert("felicitation vous avez obtenu le double *2");
                document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
                  clickdouble=true;
                  clickBonus=false;
                  clickboost=false;
                  clickAuto=false;
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
               
          }else{

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
                 
            }else{
                     cptBooster--;
                      alert("dsl vous n'avez pas assez des points");
                  
            }

        }
        cptBooster++;  
});
  
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
  



})();
