
var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roboto";
var enemyHealth = 50;
var enemyAttack = 12;

function fight(){
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'F' or 'S' to choose.");
    console.log("promptFight = " + promptFight);

    if(promptFight == "F" || promptFight == "f"){
        enemyHealth -= playerAttack;
        console.log("eneamyHealth = " + enemyHealth);
    
        if(enemyHealth <= 0){
            window.alert(enemyName + " has died!");
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " hit points left.");
        }
    
        playerHealth -= enemyAttack;
        console.log("playerhealth = "+  playerHealth);
    
        if(playerHealth <= 0){
            window.alert(playerName + " has died!");
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " hit points left.");
        }
    }
    else if(promptFight == "S" || promptFight == "s"){
        var confirmSkip = window.confirm("Are you sure you want to skip this fight?");

        if(confirmSkip){
            playerMoney -= 2;
            window.alert(playerName + " has chosen to skip the fight!");
        }
        else{
            fight();
        }
        
    }
    else{
        window.alert("Player choice could not be recognized.");
    }


}

fight();