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



//console.log(Math.PI);

var fightOrSkip = function(){
      // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // Enter the conditional recursive function call here!
  if(!promptFight){
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }
  promptFight = promptFight.toLowerCase();
  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerInfo.playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping, but don't let them go into the negative
        playerInfo.money = Math.max(0, playerInfo.money - 10);
  
        // return true if player wants to leave
        return true;
      }
  }
  return false;
}

var fight = function(enemy) {
    // keep track of who goes first
    var isPlayerTurn = true;
  
    // randomly change turn order
    if (Math.random() > 0.5) {
      isPlayerTurn = false;
    }
    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
            
            // ask player if they'd like to fight or skip using fightOrSkip function
            if (fightOrSkip()) {
            // if true, leave fight by breaking loop
                break;
            }
  
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
  
            // remove enemy's health by subtracting the amount we set in the damage variable
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(playerInfo.name +" attacked " +enemy.name +". " +enemy.name +" now has " +enemy.health +" health remaining.");
  
            // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
  
                // award player money for winning
                playerInfo.money = playerInfo.money + 20;
  
                // leave while() loop since enemy is dead
                break;
            } 
            else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
        // player gets attacked first
        } 
        else {
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
  
            // remove player's health by subtracting the amount we set in the damage variable
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(enemy.name +" attacked " +playerInfo.name +". " +playerInfo.name +" now has " +playerInfo.health +" health remaining.");
  
            // check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                // leave while() loop if player is dead
                break;
            } 
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        }
        // switch turn order for next round
        isPlayerTurn = !isPlayerTurn;
    }
  };

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
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");
  shopOptionPrompt = parseInt(shopOptionPrompt);  
  switch (shopOptionPrompt){
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:    
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

