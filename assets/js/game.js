var getPlayerName = function(){
    var name = "";

    while(name === "" || name === null){
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
}

var playerInfo = {
    playerName : getPlayerName(),
    playerHealth : 100,
    playerAttack : 10,
    playerMoney : 10,
    reset: function() {
        this.playerHealth = 100;
        this.playerMoney = 10;
        this.playerAttack = 10;
      },
    refillHealth: function() {
        if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      },
    upgradeAttack: function() {
        if (this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
          this.attack += 6;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      }
}



console.log(Math.PI);

var fight = function fight(enemyInfo){

    while(playerInfo.playerHealth > 0 && enemyInfo.health > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'F' or 'S' to choose.");
        if(promptFight == "S" || promptFight == "s"){
            var confirmSkip = window.confirm("Are you sure you want to skip this fight?");
    
            if(confirmSkip){
                playerInfo.playerMoney = Math.max(0, playerInfo.playerMoney-10);
                window.alert(playerInfo.playerName + " has chosen to skip the fight!");
                console.log("playerInfo.playerMoney = " + playerInfo.playerMoney);
                break;
            }            
        }


        var damage = randomNum(playerInfo.playerAttack-3, playerInfo.playerAttack);
        enemyInfo.health = Math.max(0, enemyInfo.health-damage);
        console.log(playerInfo.playerName+" attacked " + enemyInfo.name + ". " + enemyInfo.name + " now has " + enemyInfo.health + " remaining.");
        
        if(enemyInfo.health <= 0){
            window.alert(enemyInfo.name + " has died!");
            break;
        }
        else{
            window.alert(enemyInfo.name + " still has " + enemyInfo.health + " hit points left.");
        }
        
        var damage = randomNum(enemyInfo.attack-3, enemyInfo.attack);
        playerInfo.playerHealth = Math.max(0, playerInfo.playerHealth-damage);
        console.log(enemyInfo.name+" attacked " + playerInfo.playerName + ". " + playerInfo.playerName + " now has " + playerInfo.playerHealth + " remaining.");
        
        if(playerInfo.playerHealth <= 0){
            window.alert(playerInfo.playerName + " has died!");
            break;
        }
        else{
            window.alert(playerInfo.playerName + " still has " + playerInfo.playerHealth + " hit points left.");
        }
    }

}

var startGame = function(){
    playerInfo.reset();
    

    for(var i = 0; i<enemyInfo.length;i++){
        //debugger;
        
        if (playerInfo.playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i+ 1));
            //debugger;
            fight(enemyInfo[i]);
            if(playerInfo.playerHealth > 0 && i < enemyInfo.length -1){
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
    if (playerInfo.playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.playerMoney + ".");
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
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
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

var randomNum = function(min, max){
    var value = Math.floor(Math.random() * (min-max+1)) + min;
    return value;
}

var enemyInfo = [
    {
        name: "Roboto",
        attack: randomNum(10, 14),
        health: randomNum(40,60),
    }, 
    {
        name: "Amy Android",
        attack: randomNum(10, 14),
        health: randomNum(40,60),
    }, 
    {
        name: "Robo Trumble",
        attack: randomNum(10, 14),
        health: randomNum(40,60),
    }
];

startGame();

