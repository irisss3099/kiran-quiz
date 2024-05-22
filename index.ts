#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";



let quiz = await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"What is your name?"
    },
    {
        name:"start",
        type:"list",
        message:"Are you Ready for Quiz..?",
        choices:["yes","no"]
    }
   
])
    if (quiz.start === "yes"){{
        let countdown = ["0","1","2","3","START..."]
        for(let i=0; i<=4; i++){
            console.log(chalk.redBright.italic.bold(countdown[i]));
        } 
           
        }
        
        
 let point = 0
     
    let  question1 = await inquirer.prompt([
        {
            name:"q1",
            type:"list",
            message:"Which of the following statements about TypeScript is true?",
            choices:["a) TypeScript is a superset of JavaScript",       //correct
                     "b) TypeScript cannot be compiled",
                     " c) TypeScript code runs directly in the browser",
                     " d) TypeScript is primarily used for server-side scripting"
                    ]   
        }
    ])

    if (question1.q1 === "a) TypeScript is a superset of JavaScript"){
        console.log(chalk.blue("Correct Answer..!!"))
        point++
    }
    else{
        console.log(chalk.red("Wrong Answer :( " ));
        
    }
        
        let  question2 = await inquirer.prompt([
        {
            name:"q2",
            type:"list",
            message:"What is the keyword used to declare variables in JavaScript?",
            choices:["a) var",
                     "b) let",      //correct
                     "c) const",
                     " d) declare"
                    ]   
        }
        ])

        if (question2.q2 === "b) let"){
            console.log(chalk.blue("Correct Answer..!!"))
            point++
        }
        else{
            console.log(chalk.red("Wrong Answer :( ") );
            
        }

        let  question3 = await inquirer.prompt([
        {
            name:"q3",
            type:"list",
            message:"Which method is used to add an element to the end of an array in JavaScript?",
            choices:["a) append()",
                     "b) push()",        //correct
                     "c) add()",
                     " d) insert()"
                    ]
        }
        ])

        if (question3.q3 === "b) push()"){
            console.log(chalk.blue("Correct Answer..!!"))
            point++
        }
        else{
            console.log(chalk.red("Wrong Answer :( ") );
            
        }

        let  question4 = await inquirer.prompt([
        {
            name:"q4",
            type:"list",
            message:"Which symbol is used for single-line comments in most programming languages? " ,              
            choices:["a) //",           //correct
                     " b) #",
                     "c) /* */",
                     "d) --"
                    ] 
        }
        ])

        if (question4.q4 === "a) //"){
            console.log(chalk.blue("Correct Answer..!!"))
            point++
        }
        else{
            console.log(chalk.red("Wrong Answer :( " ));
            
        }

        let  question5 = await inquirer.prompt([
        {
            name:"q5",
            type:"list",
            message:"Which of the following is a valid way to define a function in JavaScript? " ,              
            choices:["a) function myFunction() {}",
                     "b) var myFunction = function() {}",
                     "c) const myFunction = () => {}",
                     "d) All of the above"            //correct
                    ]           
        }
        ])

        if (question5.q5 === "d) All of the above"  ){
            console.log(chalk.blue("Correct Answer..!!"))
            point++
        }
        else{
            console.log(chalk.red("Wrong Answer :( ") );
            
        }

        let  question6 = await inquirer.prompt([
        {
            name:"q6",
            type:"list",
            message:"What does the ('typeof') operator in JavaScript return?",
            choices:["a) The value of a variable",      
                     "b) The size of a variable",
                     "c) a) The data type of a variable",       //correct
                     "d) The index of a variable"
                    ] 
        }
        ])

        if (question6.q6 === "c) The data type of a variable"){
            console.log(chalk.blue("Correct Answer..!!"))
            point++
        }
        else{
            console.log(chalk.red("Wrong Answer :( ") );
            
        }

        let  question7 = await inquirer.prompt([
        {
            name:"q7",
            type:"list",
            message:"Which method is used to remove the last element from an array in JavaScript?",
            choices:["a) splice()",              
                     " b) removeLast()",
                     " c) deleteLast()",
                     " d) pop()"        //correct
                    ]
        }
        ])

        if (question7.q7 === "a) pop()"){
            console.log(chalk.blue("Correct Answer..!!"))
            point++
        }
        else{
            console.log(chalk.red("Wrong Answer :( " ));
            
        }

        let  question8 = await inquirer.prompt([
        {
            name:"q8",
            type:"list",
            message:"What is the purpose of the ('this') keyword in JavaScript?",
            choices:["a) To refer to the current object",       //correct
                     "b) To declare variables",
                     "c) To define functions",
                     "d) To perform arithmetic operations"
                    ]
        }
        ])

        if (question8.q8 === "a) To refer to the current object"){
            console.log(chalk.blue("Correct Answer..!!"))
            point++
        }
        else{
            console.log(chalk.red("Wrong Answer :( ") );
            
        }

        let  question9 = await inquirer.prompt([
        {
            name:"q9",
            type:"list",
            message:"Which of the following is NOT a valid data type in TypeScript?",
            choices:["a) string",
                     "b) number",
                     "c) boolean",
                     "d) character"         //correct
                    ] 
        }
        ])

        if (question9.q9 === "d) character"){
            console.log(chalk.blue("Correct Answer..!!"))
            point++
        }
        else{
            console.log(chalk.red("Wrong Answer :( ") );
            
        }

        let  question10 = await inquirer.prompt([
        {
            name:"q10",
            type:"list",
            message:"What does the ('===') operator in JavaScript compare?",
            choices:["a) Types only",      
                     "b) Values only",
                     "c)  Values and types",         //correct,
                     "d) None of the above  "       
                    ]
        }
    ])

    if (question10.q10 === "c) Values and types"){
        console.log(chalk.blue("Correct Answer..!!"))
        point++
    }
    else{
        console.log(chalk.red("Wrong Answer :( " ));
        
    }


    console.log(`Dear ${chalk.cyanBright(quiz.name)}` , `your score is ${chalk.yellow(point)} out of ${chalk.green("10")}`);


    if (point <= 5 ){
        console.log(`${chalk.redBright.bold (quiz.name)} You Lose :(`);    
    } 
    else if (point > 5) {
        console.log(`${chalk.blueBright.bold(quiz.name)} You Won..!!!`);
        
    }

   
} else {
    console.log("Bye Bye :)");
    
}