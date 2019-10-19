(function(){ //IIFE

    var winNumber = 0;
    var randomNum = 0;
    
function resetWinningNumber(){
    // this is targeting the class name
    var winningNumber = document.querySelector('.win-num');

    // this is creatiing a random number from 19-120
    randomNum = Math.round((Math.random() * 101) + 19);

    //this function creates a random number from 1-12
    var randomNumCrystals = function(){
        return Math.round((Math.random() * 11) + 1);
    };

    //This places the random number inside of the winning number
    winningNumber.innerHTML = randomNum;

    winNumber = randomNum;

    // This selects each of the crystals
    var crystal1 = document.querySelector('.crystal1');
    var crystal2 = document.querySelector('.crystal2');
    var crystal3 = document.querySelector('.crystal3');
    var crystal4 = document.querySelector('.crystal4');


    // This places random numbers inside of the crystals
    crystal1.dataset.number = randomNumCrystals();
    crystal2.dataset.number = randomNumCrystals();
    crystal3.dataset.number = randomNumCrystals();
    crystal4.dataset.number = randomNumCrystals();
}

resetWinningNumber();




var myScore = 0;
var wins = 0;
var losses = 0;

function resetMyScore(){
    myScore = 0;
    $('.my-score').html(myScore);
}



// targets any class that has .crystal class
var crystal = $('.crystal');

//do an on click event when clicking on the crystals
crystal.on('click', function(){
    console.log('test');
    var gemNum = $(this).data('number');
    
    myScore = myScore + gemNum;
    $('.my-score').html(myScore);

    if(myScore == winNumber){
        console.log('you win')
        wins += 1;
        $('.wins').html(wins);
        resetMyScore();
        resetWinningNumber();
    }else if(myScore > winNumber){
        console.log('you lose');
        losses += 1;
        $('.losses').html(losses);
        resetMyScore();
        resetWinningNumber();
    }
});

})();



