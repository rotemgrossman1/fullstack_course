const findDuplicates = function (ages) {
    const uniques = new Set()
    for (let i = 0; i < ages.length; i++) {
        if(uniques.has(ages[i])){
            console.log("duplicate")
            return
        }
        uniques.add(ages[i])
        //note that this *entire* inner loop runs for each iteration of i
    }
}

//run it
findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // should print nothing
findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]) // should print "duplicate"
