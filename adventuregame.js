import chalk from "chalk";
import inquirer from "inquirer";
// Classes Palyer & Opponent
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
;
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
;
// Player Name & Opponent select
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name"
});
// console.log(player.name);
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Please Select Your Opponent",
    choices: ["Skeleto", "Assassin", "Zombie"]
});
// console.log(opponent.select);
// Gather Data
let p1 = new Player(player.name);
// console.log(p1);
let o1 = new Opponent(opponent.select);
// console.log(o1);
do {
    // Skeleto
    if (opponent.select == "Skeleto") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Please Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run for Your Life."]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run for Your Life.") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
    // Assassin
    if (opponent.select == "Assassin") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Please Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run for Your Life."]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run for Your Life.") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
    // Zombie
    if (opponent.select == "Zombie") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Please Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run for Your Life."]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run for Your Life.") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
// import chalk from "chalk";
// import inquirer from "inquirer";
// // Character class
// class Character {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// // Player Name & Opponent select
// const player = await inquirer.prompt({
//   type: "input",
//   name: "name",
//   message: "Please Enter Your Name",
// });
// const opponent = await inquirer.prompt({
//   type: "list",
//   name: "select",
//   message: "Please Select Your Opponent",
//   choices: ["SKeleto", "Assassin", "Zombie"],
// });
// console.log(`Player Name: ${player.name}`);
// console.log(`Opponent: ${opponent.select}`);
// // Gather Data
// const p1 = new Character(player.name);
// const o1 = new Character(opponent.select);
// // Display the player's name and opponent selection
// if (opponent.select == "skeleto"){
//     console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
// }
// // Add more logic here for the game
