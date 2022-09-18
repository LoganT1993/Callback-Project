/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function(sentence, cipher) {
    let keys = Object.keys(cipher);
    let values = Object.values(cipher);
    let words = sentence.split(' ');
    newSentence = [];

    for(i = 0; i < words.length; i++) { // First, go over each word.
        // Next, see if the endings of the strings match the keys.
        let wasModified = false;
        for(j = 0; j < keys.length; j++) {
            if(words[i].endsWith(keys[j])) {
                let cb = values[j] // The corresponding value is the callback function.
                newSentence.push(cb(words[i]));
                wasModified = true;
            }
        }
        if(wasModified == false) { // If the callback was never invoked, add the original word.
            newSentence.push(words[i]);
        }
    }
    return newSentence.join(' ');
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
