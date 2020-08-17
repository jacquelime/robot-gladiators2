
// Game States
// "WIN" - Player robot has defeated all enemy robots
//      *Fight all enemy robots
//      *Defeat each enemy robot
// LOSE" - Player robot's health is zero or less

// -----------------------------------Global Variables-------------------------------------------

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var confirmSkip = true;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index ");
    for(var i = 0; i < enemyNames.length; i++) {
        console.log(enemyNames[i]);
    }

}

// i++;
// i -= 1;
// // shortcut for i = i + 1;
// i = 0;
// i = i + 1; // i = 1;
// i = i + 1; // i = 2;
// ...
// var str = "";
// str += enemyNames[0]; // "Roborto"
// str += enemyNames[1]; // "RobortoAmy Android"
// str = str + " " + enemyNames[2]; // "RobortoAmy AndroidRoboTrumble"

//--------------------------------------------- FUNCTIONS ---------------------------------------

function changeToLowerCase(string) {
    return string.toLowerCase ()
}
var fight = function()
{
    window.alert("Welcome to Robot Gladiators");
    

    var promptFight = (window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."));
    promptFight = promptFight.toLowerCase();
    console.log(
        promptFight
    )
    var promptFightLowerCase = changeToLowerCase (promptFight);
    console.log(
        promptFightLowerCase
    )

    if (promptFightLowerCase === "fight") {


        // this creates a fuction named "fight" 
        function fight() 
        {
            window.alert("The fight has begun!");
        }


    // remove enemy's health by subtracting the amount set in the playerAttack variable
    
   
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining "
    );
    // check enemy's health
    if (enemyHealth <= 0) 
    {
        window.alert(enemyNames + " has died! ");
    }
    else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )

       

    // check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left. ");
    }



    // if player chooses to skip
} else if (promptFight === "skip") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
    if (confirmSkip) {
        // 
    }
    // subtract money for skipping
    playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight();
    }
    window.alert(playerName + " has chosen to skip the fight!");
} else {
    window.alert("You need to pick a valid option. Try again!");
}


};
// ---------------------------------------------Main Processes--------------------------------------------
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
  





