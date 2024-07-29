function getName(name){
    return name;
}


let a = true;
let b = true;

console.log(a && getName("innocent"));

// template strings

let name1 = "inno";
let name2 = "john";



console.log(name1 + " " + name2, `${name1} ${name2}`);

// ternary operator

let showRecipeOne = false;

function getRecipeOneName(recipeName){

    return recipeName



}

function getRecipeTwoName(recipeName){

    return recipeName



}
if (showRecipeOne){
    console.log(getRecipeOneName('pizza'));
}else {
    console.log(getRecipeTwoName('coke'));
}