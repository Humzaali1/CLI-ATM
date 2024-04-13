#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("Correct pin code !!!"));
    console.log(chalk.white.bgMagenta("------------Welcome to HBL ATM-------------------"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash", "Exit"],
        },
    ]);
    //Withdraw
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount you want to withdraw",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(chalk.white.bgMagentaBright(`Your remaining balance is ${myBalance}`));
        }
        else {
            console.log(chalk.white.bgRed("Insufficient balance"));
        }
    }
    // Check Balance
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.white.bold.bgMagenta(`Your balance is: ${myBalance}`));
    }
    // Fast Cash
    else if (operationAns.operation === "Fast Cash") {
        let fastCashAnswer = await inquirer.prompt([
            {
                type: "list",
                name: "fast_amount",
                message: "Select the amount you want to cash:",
                choices: [1000, 3000, 5000],
            },
        ]);
        if (fastCashAnswer.fast_amount <= myBalance) {
            myBalance -= fastCashAnswer.fast_amount;
            console.log(chalk.whiteBright.bgMagentaBright(`Your remaining balance is ${myBalance}`));
        }
        else {
            console.log(chalk.red("Insufficient balance"));
        }
    }
    // Exit
    else if (operationAns.operation === "Exit") {
        console.log(chalk.whiteBright.bgYellow("Thankyou for using HBL ATM"));
    }
}
else {
    console.log(chalk.white.bgRedBright("Incorrect pin number"));
}
