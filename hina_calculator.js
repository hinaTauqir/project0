#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
console.log(chalk.blue("Have a Nice Day!"));
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("start calculator");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
async function askQuestion() {
    await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "which operation you want to perform \n",
            choices: ["addition", "subtraction", "multiplication", "division"]
        },
        {
            type: "number",
            name: "num1",
            message: "enter your first number\n",
        },
        {
            type: "number",
            name: "num2",
            message: "enter your second number\n",
        }
    ])
        .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers);
        if (answers.operator == "addition") {
            console.log(chalk.green(`${answers.num1}+${answers.num2} = ${answers.num1 + answers.num2}`));
        }
        else if (answers.operator == "subtraction") {
            console.log(chalk.green(`${answers.num1}-${answers.num2} = ${answers.num1 - answers.num2}`));
        }
        else if (answers.operator == "multiplication") {
            console.log(chalk.blue(`${answers.num1}*${answers.num2} = ${answers.num1 * answers.num2}`));
        }
        else if (answers.operator == "division") {
            console.log(chalk.green(`${answers.num1}/${answers.num2} = ${answers.num1 / answers.num2}`));
        }
    });
}
;
//askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "do you want to restart? press y or n",
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
startAgain();
