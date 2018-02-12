/*
8.4 Power Set
Write a method to return all subsets of a set

Solution:
When we generate a subset, each element is either there or not.

Our minimum time/space complexity will be O(n2^n)

*/

// the js api for sets is very different
// kept it similar to the book to change later
// using arrays here for simplicity of writing

function getSubsets(set, index) {
    let allsubsets = [];

    if(set.size() === index) {
        allsubsets.add([]);
    } else {
        allsubsets = getSubsets(set, index+1);
        let item = set.get(index);
        let moresubsets = [];
        for(subset in allsubsets) {
            let newsubset = [];
            newsubset.addAll(subset);
            newsubset.add(item);
            moresubsets.add(newsubset);
        }
        allsubsets.addAll(moresubsets0;)
    }
    return allsubsets;
}

