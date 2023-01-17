import "./index.css";
import * as toastr from 'toastr';

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

    document.getElementById("run1").addEventListener("click", () => {
      
    if(cptDouble==1){

      toastr.info("Voulez-vous acheter ce multiplicateur x2 à 50 pts ?", "Confirmation", {
        closeButton: true,
        tapToDismiss: false,
        timeOut: 0,
        extendedTimeOut: 0,
        buttons: {
          confirm: {
              label: 'OK',
              className: 'btn-success'
          },
          cancel: {
              label: 'Annuler',
              className: 'btn-danger'
          }
      },
        onclick: function() {
          // action à effectuer si l'utilisateur clique sur OK
          if (score > 50) {
            score -= 50;
            toastr.success("Félicitation, vous avez obtenu le bonus x2");
            bonusx2();
            document.getElementById('clicker-counter').innerHTML = "score :" + score;
            document.getElementById('run1').innerHTML = "50 ptn";
            clickdouble = true;
            clickBonus = false;
            clickboost = false;
            clickAuto = false;
          } else {
            toastr.error("Désolé, vous n'avez pas assez de points pour acheter ce multiplicateur");
          }
        }
      });

       }else if(cptDouble>1){
      toastr.info("Voulez-vous acheter ce multiplicateur *2 à " + (50*cptDouble) + "ptn ?", "Confirmation", {
        closeButton: true,
        tapToDismiss: false,
        timeOut: 0,
        extendedTimeOut: 0,
        buttons: {
          confirm: {
              label: 'OK',
              className: 'btn-success'
          },
          cancel: {
              label: 'Annuler',
              className: 'btn-danger'
          }
      },
    onclick: function() {
      // action à effectuer si l'utilisateur clique sur OK
      if (score > 50*cptDouble) {
        score -= 50*cptDouble;
        toastr.success("Félicitation, vous avez obtenu le bonus x2");
        document.getElementById('clicker-counter').innerHTML = "score :" + score;
        document.getElementById('run1').innerHTML = 50*cptDouble+'ptn ';
        clickdouble = true;
        clickBonus = false;
        clickboost = false;
        clickAuto = false;
      } else {
        cptDouble--;
        toastr.error("Désolé, vous n'avez pas assez de points pour acheter ce multiplicateur");
      }
    }
  });
}
cptDouble++;
});
    

    document.getElementById("run2").addEventListener("click", () => {


        if(cptBooster==1){


            toastr.info("Voulez-vous acheter ce multiplicateur x5 à 80 pts ?", "Confirmation", {
            closeButton: true,
            tapToDismiss: false,
            timeOut: 0,
            extendedTimeOut: 0,
            buttons: {
              confirm: {
                  label: 'OK',
                  className: 'btn-success'
              },
              cancel: {
                  label: 'Annuler',
                  className: 'btn-danger'
              }
          },
            onclick: function() {
              if (score > 80) {
                score -= 80;
                toastr.success("Félicitation, vous avez obtenu le bonus x5");
                booster();
                document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
                clickboost=true;
                clickdouble=false;
                clickBonus=false;
                clickAuto=false;
               
          }else{
            toastr.error("Désolé, vous n'avez pas assez de points pour acheter ce multiplicateur");
          }
        }
      });

        }else if(cptBooster>1){
          toastr.info("Voulez-vous acheter ce multiplicateur x5 à " + (80*cptDouble) + "ptn ?", "Confirmation", {
            closeButton: true,
            tapToDismiss: false,
            timeOut: 0,
            extendedTimeOut: 0,
            buttons: {
              confirm: {
                  label: 'OK',
                  className: 'btn-success'
              },
              cancel: {
                  label: 'Annuler',
                  className: 'btn-danger'
              }
          },

        onclick: function() {
          if (score > 80*cptDouble) {
              score -= 80*cptDouble;
              toastr.success("Félicitation, vous avez obtenu le bonus x5");
              document.getElementById ( 'clicker-counter' ) . innerHTML  = "score :"+score ;
              clickboost=true;
              clickdouble=false;
              clickBonus=false;
              clickAuto=false;
            
            }else{
              cptBooster--;
              toastr.error("Désolé, vous n'avez pas assez de points pour acheter ce multiplicateur");
                    }
                  }
                });
              }
        cptBooster++;  
      
});

document.getElementById("run3").addEventListener("click", () => {

  if(cptAuto==1){

      toastr.info("Voulez-vous acheter ce Bonus x5 à 200 pts pendant 30 secondes ?", "Confirmation", {
      closeButton: true,
      tapToDismiss: false,
      timeOut: 0,
      extendedTimeOut: 0,
      buttons: {
          confirm: {
              label: 'OK',
              className: 'btn-success'
          },
          cancel: {
              label: 'Annuler',
              className: 'btn-danger'
          }
      },
      onclick: function() {
          if( score > 200 ){
              score-=200;
              toastr.success("Félicitation, vous avez obtenu le Bonus x5 pendant 30 secondes");
              bonusx5();
              document.getElementById ( 'clicker-counter' ) . innerHTML  = +score ;
              clickAuto=true;
              clickdouble=false;
              clickBonus=false;
              clickboost=false;
              timeSeconde();

          }else{
              toastr.error("erreur : vous n'avez pas assez de points pour acheter ce Bonus");
          }
      }
  });
  } else if(cptAuto>1) {
      toastr.info("Voulez-vous acheter ce Bonus x5 à " + (200*cptAuto) + "ptn pendant 30 secondes ?", "Confirmation", {
          closeButton: true,
          tapToDismiss: false,
          timeOut: 0,
          extendedTimeOut: 0,
          buttons: {
              confirm: {
                  label: 'OK',
                  className: 'btn-success'
              },
              cancel: {
                  label: 'Annuler',
                  className: 'btn-danger'
              }
          },
          onclick: function() {
              if( score > 200*cptAuto ){
                  score-=200*cptAuto;
                  toastr.success("Félicitation, vous avez obtenu le Bonus x5 pendant 30 secondes");
                  bonusx5();
                  document.getElementById ( 'clicker-counter' ) . innerHTML  = +score ;
                  clickAuto=true;
                  clickdouble=false;
                  clickBonus=false;
                  clickboost=false;
                  timeSeconde();
              }else{
                  cptAuto--;
                  toastr.error("Désolé, vous n'avez pas assez de points pour acheter ce Bonus");
              }
          }
      });
  }
  cptAuto++;
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
