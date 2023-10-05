#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { todo } from "node:test";

let myTodos:string[]= [];
let condition = true;
while (condition){
let todo = await inquirer.prompt([
    {
        name:"TODOS",
        type:"input",
        message:chalk.bgGreenBright("what do you want to do?")
},
{
    name:"Repitition",
    type:"confirm",
    message:chalk.bgBlue("Do you want to add more? "),
    default:false
}
]);

condition = todo.Repitition
if(todo.TODOS){
myTodos.push(todo.TODOS)
}
else{console.log("please enter valid")
}
};
console.log(myTodos);
if (myTodos.length>0){
    console.log("My todo list is:")
    myTodos.forEach(todo=>{console.log(todo);
    })
}
else{console.log("Nothing to do in list")
};