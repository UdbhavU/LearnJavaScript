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

//arrays
//creation is same as creating any variable
var myArray = [1, 2, 3, 4];//1D array
var my2DArray = [[1, 2, 3], [1, 4, 6]];//2d array
console.log(myArray[1]);//will return 2nd element
console.log(my2DArray[1][2]);//will return last element of the 2nd row in 2d array
myArray.push(1);//adds element to the end of the array ie it appends
console.log(myArray)
myArray.pop();//removes the last element
console.log(myArray)
myArray.shift();//removes element fron the 1st position
console.log(myArray)
myArray.unshift(1);//will insert elemwnt to the beginning of the array
console.log(myArray)


//functions-> reusable block of codes
// makes use of keyword 'function'
//mad lib game
function wordBank(noun, adj, verb, adv) {
    var res = ""
    res += "The " + adj + " " + noun + " " + verb + " to the store " + adv;
    return res;
}
console.log(wordBank("Dog", "Small", "ran", "quickly"));

/*
    day 2
    concepts covered - OOP  and Few remaining basics
*/
// once you declare a var using respective keywords you cannot declare the same variable again
//NaN is anumber type variable which stands for not a thisNumber. You usually get this when you try to use operation meant for numbers on other variable types
//you can probably add string with other types and the result will be a string but not other operations
//The process of type coersion is when the compiler tries to guess the probable type and type cast to
//objects in js is basically dictionary in python , now it all makes sence ! json i mean
