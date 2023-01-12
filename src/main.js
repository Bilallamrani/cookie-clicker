import "./index.css";

(() => {
   
    var clickdouble =false;
    var clickboost=false;
    var score = 0;


  document.getElementById("cookie").addEventListener("click", () => {
           
            if(clickdouble==true){
                 score+=1;
            }else if(clickboost==true){
                  score+=3;
            }
            score++;
          
            document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
    
    });

    
      document.getElementById("run1").addEventListener("click", () => {
        var confirmer = confirm('vous voulez acheter ce multiplicateur *2 à 50 ptn ');
         if(confirmer==true && score>50){
             score-=50;
             alert("felicitation vous avez obtenu le double *2");
             document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
               clickdouble=true;
         }else{
                alert("erreur ");
         }
      });
     

    document.getElementById("run").addEventListener("click", () => {
        var confirmer = confirm('vous voulez acheter ce booster à 80 ptn ');

          if(confirmer== true && score>80){
               score-=80;
               alert("felicitation vous avez obtenu le bosster *4");
             document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
                clickboost=true;
               
          }else{
               
                    alert("dsl vous n'avez pas assez des points");
                
          }
            
          
});
  
})();
