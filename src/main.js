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
          
            document.getElementById ( 'clicker-counter' ) . innerHTML  = +score ;
    
    });

    
      document.getElementById("run1").addEventListener("click", () => {
        var confirmer = confirm('vous voulez acheter ce multiplicateur *2 à 50 ptn ');
         if(confirmer==true && score>50){
             score-=50;
             alert("felicitation vous avez obtenu le double *2");
             bonusx2();
             document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
               clickdouble=true;
         }else{
                alert("erreur ");
         }
      });
     

    document.getElementById("run2").addEventListener("click", () => {
        var confirmer = confirm('vous voulez acheter ce booster à 80 ptn ');

          if(confirmer== true && score>80){
               score-=80;
               alert("felicitation vous avez obtenu le booster *5");
               booster();
             document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
                clickboost=true;
               
          }else{
               
                    alert("Désolé vous n'avez pas assez des points");
                
          }     
          
});
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

// const button = document.getElementById("cookie");
// const image = document.getElementById("bonusx2");

// button.addEventListener("click", function() {
//   if (score === 30) {
//     image.style.display = "block";
//     setTimeout(() => {
//       image.style.display = "none";
//     }, 3000);
//   }
// });


  
})();
