function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
     if (newString == string){
            console.log("It's a palindrome");
        }
        else if (newString != string){
            console.log("it's not a palindrome");
        }
    
}

const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);

// function palindrome(pvalue){
//     let a = "";
//     for (let i = pvalue.length - 1; i >= 0; i--){
//         a += pvalue[i];
//     }
//     console.log(a);
// }
// console.log(palindrome("321"));

