        let score = JSON.parse(localStorage.getItem('score')) ||
        {
        wins:0,
        losses:0,
        ties:0
        };

        updateScoreElement();

        function pickComputerMove(){
          let computerMove='';
          let randomNumber=Math.random();
          if(randomNumber>=0 && randomNumber<1/3){
          computerMove='rock';
          }else if(randomNumber>=1/3 && randomNumber<2/3){
          computerMove='paper';
          }else{
          computerMove='scissors';
          }
          return computerMove;
        }

      let isAutoPlaying = false;
      let intervalId;

        function autoPlay(){
          if(isAutoPlaying){
            clearInterval(intervalId);
            isAutoPlaying =false;
          }
          else{
            intervalId = setInterval(
              () => {
                const playerMove = pickComputerMove();
                playGame(playerMove);
              }, 1000);
             isAutoPlaying=true;
          }
          } 
        
        document.querySelector('.js-rock-button')
            .addEventListener('click',()=>{
            playGame('rock');
            });

        document.querySelector('.js-paper-button')
           .addEventListener('click',()=>{
            playGame('paper');
          });

        document.querySelector('.js-scissors-button')
            .addEventListener('click',()=>{
            playGame('scissors');
          });

        document.querySelector('.js-reset')
            .addEventListener('click',()=>{
            resetScore();
            updateScoreElement();
          });

        document.querySelector('.js-auto')
          .addEventListener('click',()=>{
          autoPlay();
        }); 


        document.body.addEventListener('keydown', (event) =>{
            if(event.key==='r'){
              playGame('rock');
            }else if(event.key==='p'){
              playGame('paper');
            }else if(event.key==='s'){
              playGame('scissors');
            }
        });


        function playGame(playerMove){
          const computerMove=pickComputerMove();
          let result='';
          if(playerMove==='scissors'){
          if(computerMove==='rock'){
          result='you lose';
          }else if(computerMove==='paper'){
          result='you win';
          }else{
          result='tie';
        }

        }else if(playerMove==='paper'){
          if(computerMove==='rock'){
          result='you win';
          }else if(computerMove==='paper'){
          result='tie';
          }else{
          result='you lose';
        }

        } else if(playerMove==='rock'){
          if(computerMove==='rock'){
          result='tie';
          }else if(computerMove==='paper'){
          result='you lose';
          }else{
          result='you win';
        }
        }

        if(result==='you win'){
          score.wins++;
          }else if(result==='you lose'){
          score.losses++;
          }else if(result==='tie'){
        score.ties++;
        }

        localStorage.setItem('score',JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result')
        .innerHTML=result;   

        document.querySelector('.js-moves')
          .innerHTML= `shyam saran 
          <img src="${playerMove}-emoji.png" class="move-icon">
          <img src="${computerMove}-emoji.png" class="move-icon">
          computer`;
          }


        function updateScoreElement(){
        document.querySelector('.js-score')
        .innerHTML = `wins : ${score.wins}, losses ${score.losses}, ties ${score.ties}`;
        }

        function resetScore(){
          score.losses=0;
          score.ties=0;
          score.wins=0;
          localStorage.removeItem('score');
          alert('score has been reset');
        }

        
