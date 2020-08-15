
// -----------------------------------Global Variables-------------------------------------------


// What's your robots name?
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

function changeToLowerCase(string) {
    return string.toLowerCase ()
}
var fight = function()
{
    window.alert("Welcome to Robot Gladiators");
    

    var promptFight = (window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")) ;
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
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining "
    );
    // check enemy's health
    if (enemyHealth <= 0) 
    {
        window.alert(enemyName + " has died! ");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )

    // check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left. ");
    }



    // if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + "has decided to skip this fight. Goodbye!");
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
fight();


/*
It can work like 
this too if you really need it too.
You won't always 
need it to, but sometimes you 
will
*/

