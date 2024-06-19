/*Change Every Letter to the Next Letter
Write a function that changes every letter to the next letter:

"a" becomes "b"

"b" becomes "c"

"d" becomes "e"

and so on ...

Examples
move("hello") ➞ "ifmmp"

move("bye") ➞ "czf"

move("welcome") ➞ "xfmdpnf"
Notes
There will be no z's in the tests.*/




const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const adjusted = 'bcdefghijklmnopqrstuvwxyz '

const move = (word) => {
    
    let newWord = ''

    for (let i = 0; i < word.length; i++) {
        const char = word[i].toLowerCase();
        const index = alphabet.indexOf(char)

        if (index !== -1) {
            newWord += adjusted[index]
        } else {
            newWord += char
        }
    }
  console.log(newWord)
}

move('bye') // czf
move('welcome') // xfmdpnf
move('hello') // ifmmp