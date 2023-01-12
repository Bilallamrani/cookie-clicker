import "./index.css";
(() => {
   
    var etiquette;
    var clickdouble =false;
    var clickboost=false;
    var score = 0;


  document.getElementById("cookie").addEventListener("click", () => {
           
            if(clickdouble==true){
                 score+=1;
            }else if(clickboost==true){
                  score+=4;
            }
            score++;
            etiquette = score;
            alert(score)
    
    });

    
      document.getElementById("run1").addEventListener("click", () => {
        var confirmer = confirm('vous voulez acheter ce multiplicateur *2 à 250 ptn ');
         if(confirmer==true && score>20){
             score=-250;
             alert("felicitation vous avez obtenu le double *2");
               etiquette=score;
               clickdouble=true;
         }else{
                alert("erreur ");
         }
      });
     

    document.getElementById("run2").addEventListener("click", () => {
        var confirmer = confirm('vous voulez acheter ce booster à 450 ptn ');

          if(confirmer== true && score>30){
               score-=350;
               alert("felicitation vous avez obtenu le bosster *4");
                etiquette=score;
                clickboost=true;
               
          }else{
               
                    alert("dsl vous n'avez pas assez des points");
                
          }
            
          
});
  
})();