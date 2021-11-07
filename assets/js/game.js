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

for(var i = 0; i<enemyRobots.length;i++){
    //debugger;
    enemyHealth = 50;
    fight(enemyRobots[i]);
}