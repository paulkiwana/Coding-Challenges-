/*Create a function that takes a list of numbers or strings and returns a list with the items from the original list stored into sub lists. Items of the same value should be in the same sub list.

Examples
advanced_sort([2, 1, 2, 1]) ➞ [[2, 2], [1, 1]]

advanced_sort([5, 4, 5, 5, 4, 3]) ➞ [[5, 5, 5], [4, 4], [3]]

advanced_sort(["b", "a", "b", "a", "c"]) ➞ [["b", "b"], ["a", "a"], ["c"]]
Notes
The sub lists should be returned in the order of each element's first appearance in the given list.*/

function advancedSort(arr) {
    const result = [];
    const seen = {};

    arr.forEach(item => {
        if (!seen[item]) {
            seen[item] = [];
            result.push(seen[item]);
        }
        seen[item].push(item);
    });

    return result;
}

// Examples
console.log(advancedSort([2, 1, 2, 1]));  // ➞ [[2, 2], [1, 1]]
console.log(advancedSort([5, 4, 5, 5, 4, 3]));  // ➞ [[5, 5, 5], [4, 4], [3]]
console.log(advancedSort(["b", "a", "b", "a", "c"]));  // ➞ [["b", "b"], ["a", "a"], ["c"]]