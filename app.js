
// var table = +prompt("Enter a Number")

// var div = document.querySelector("#table");

// for(var i=1; i<=10; i++){
//    var tablePrint = `${table} * ${i} = ${table * i}`
//    console.log(tablePrint);
    
//     div.innerHTML += `${table} * ${i} = ${table * i} <br/>`

// }


// var output = document.querySelector("#output")
// var input = document.querySelector("#Table_print")
// var tableError = document.querySelector("#tableError")

// function prinTable() {
//     tableError.innerHTML = "";
//     output.innerHTML = "<h1>Your Printed Table Here!</h1>"
//     for (var table = 1; table <= 10; table++) {
//         // console.log("2" + " x " + table + " = " + table * 2)   ///console testing
//         output.innerHTML += `${input.value} x  ${table} =  ${table * +input.value} <br />`
//     }
// }


var input = document.querySelector("#input");
var output = document.querySelector("#output")

function table(){
    tableError.innerHTML = "";
    output.innerHTML = "<h1>Your Printed Table Here!</h1>"
    for(var i=1; i<=10; i++){   
        output.innerHTML += `${input.value} * ${i} = ${input.value * i}<br/>`
    }
}





































// var table1 = document.querySelector("#num");
// // var input = table1.innerHTML;
// for(var i=1; i<=10; i++){
//     console.log(input + " * " + i + " = " + input*i)
//     // console.log(`${input} * ${i} = ${input * i} `)
// }