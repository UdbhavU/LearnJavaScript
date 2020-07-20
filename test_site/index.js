//this is the file i am going to learn JavaScript in
/* Day - 1
   concepts covered - basic
*/

//variables
var thisNumber;//uninitialized variable
var myName = 'Persues';//scope is global
let thisVar = 'hahah';//scope is local
const varVar = 123;//value cant be change
/*note to self:
    js is case sensitive
    it's better to use camelCase naming convention
*/

myName = "Udbhav";//Changes the value of the variable
console.log(myName);//Prints the variable 
//operators
/*
    int + int = int 
    char/str + char/str =concatenated char/str
 */
var a = 10;
var b = 101;
console.log(a + b);
/*
    escape sequences(similar to other languages) for string like:
    \n
    \t
    etc
    \" -> lets quotes be part of the string [mainly used while refrencing url using href]
    
    you can completly avoid those ambiguity by using back tick [`] to definne string.
*/
var stringn = ' This is 1st line.\n' + 'this is second line.';
console.log(stringn)
//Strings
/*
    obj.length -> returns the lenth of the string
    str[index] -> will return the char in the position index of the string
*/
//functions
// makes use of keyword 'function' 
//mad lib game
function wordBank(noun, adj, verb, adv) {
    var res = ""
    res += "The " + adj + " " + noun + " " + verb + " to the store " + adv;
    return res;
}
console.log(wordBank("Dog", "Small", "ran", "quickly"));
