'use strict'

exports.sameNecklace = (a, b) => {
    /*
        First checks if a and b are the same, then checks if slicing a at
        every point and adding it to the end is the same as b. If not, returns
        false
    */
    if (a == b) {return true}
    for (let i = 1; i < a.length; i++) {
        if (a.slice(i) + a.slice(0, i) === b) {return true}
    }
    return false;
}

exports.repeats = (givenString) => {
    /*
    Starts iterations at 1, if it hits any times the spliced string is the same
    as before it was sliced, it increases the number of iterations, and returns
    the number of iterations that were matched.
    */
    let iterations = 1
    for (let i = 1; i < givenString.length; i++) {
        if (givenString.slice(i) + givenString.slice(0, i) === givenString) {
            iterations++;
        }
        
    }
    return iterations
}