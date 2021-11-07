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
            if(playerHealth > 0 && i < enemyRobots.length -1){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                  shopFunction();
                }
            }
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

var shopFunction = function(){
      // ask player what they'd like to do
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch (shopOptionPrompt){
        case "REFILL":
        case "refill":
            if(playerMoney>=7){
                window.alert("Refilling player's health by 20 for 7 dollars.");
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money for a health refill.");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if(playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars");
                playerAttack += 6;
                playerMoney -=7;
            }
            else{
                window.alert("You don't have enough money for an attack upgrade.");
            }
            break;
        case "LEAVE":    
        case "leave":
            window.alert("Leaving the store.")
            break;
        default:
            window.alert("You didn't pick a valid option. Try again.");
            shopFunction();
            break;
    }

}

startGame();

