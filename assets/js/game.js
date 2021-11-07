//win - player defeats enemy robots by making their health go to zero 
//*player must fight each enemy robot and defeat each enemy robot
//lose - the player's health goes to zero
var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyRobots = ["Roboto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function fight(enemyName){

    while(playerHealth > 0 && enemyHealth > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'F' or 'S' to choose.");
        if(promptFight == "S" || promptFight == "s"){
            var confirmSkip = window.confirm("Are you sure you want to skip this fight?");
    
            if(confirmSkip){
                playerMoney -= 10;
                window.alert(playerName + " has chosen to skip the fight!");
                console.log("playerMoney = " + playerMoney);
                break;
            }            
        }

        enemyHealth -= playerAttack;
        console.log(playerName+" attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining.");
        
        if(enemyHealth <= 0){
            window.alert(enemyName + " has died!");
            break;
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " hit points left.");
        }
        
        playerHealth -= enemyAttack;
        console.log(enemyName+" attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining.");
        
        if(playerHealth <= 0){
            window.alert(playerName + " has died!");
            break;
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " hit points left.");
        }
    }

}

var startGame = function(){
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i<enemyRobots.length;i++){
        //debugger;
        
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i+ 1));
            enemyHealth = 50;
            fight(enemyRobots[i]);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
      } 
      else {
        window.alert("You've lost your robot in battle.");
      }
      // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
    // restart the game
    startGame();
    } 
    else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

startGame();

