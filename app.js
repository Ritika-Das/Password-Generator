const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = lowercase.toUpperCase();
const numbers = '0123456789';
const special = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';     // quotation marks and spaces excluded

let pass = [];
let type = lowercase;
function addChars(type)
{
    let add = type.charAt(Math.round(Math.random() * ((type.length - 1) - 0 + 1)));
    if (pass.includes(add) !== true)
    {
        pass = pass.concat(add);
    }
    else return;
}

// adds lowercase characters
while(pass.length < 12)
{
    addChars(type);
}

// adds uppercase characters
type = uppercase;
while(pass.length < 16)
{
    addChars(type);
}

// adds numbers
type = numbers;
while(pass.length < 20)
{
    addChars(type);
}

// adds special characters
type = special;
while(pass.length < 25)
{
    addChars(type);
}

let slice = pass;
slice = slice.sort((a, b) => {return 0.5 - Math.random()});     // shuffling the characters

console.log(slice.toString().split(',').join(''));
