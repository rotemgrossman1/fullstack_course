// Create a data structure called UniqueArray


// It should have four methods:

// add(item)
// Stores the item only if it hasn't been added already
// showAll()
// Shows all the added items
// exists(item)
// Returns true if the item has been added, false otherwise
// This should run in O( 1 )
// get(index)
// Returns the item at index index, or -1 if it doesn't exit
// Effectively, this data structure works like a normal array (for the most part), but:
// It only works for primitive types
// It only allows you to add unique items to it

class UniqueArray {
    constructor() {
        this.uniqueStuff = []
        this.uniqueLength = 0
        this.lookup ={}
    }

    exists(item){
        return item in this.lookup;
    }
    add(item) {
        if(typeof item === "object" || typeof item === "function"){
            console.log('cannot add objects')
            return
        }
        if(this.exists(item)){
            console.log("added already")
        }
        else{
            console.log(`adding new ${item} to the array`)
            this.uniqueStuff[this.uniqueLength] = item
            this.uniqueLength++
            this.lookup[item] = true;
        }
    }
    get(index){
        if (index < 0 || index >= this.uniqueLength) {
            return -1;
        }
        return this.uniqueStuff[index]
    }

    showAll(){
        console.log(this.uniqueStuff)
    }



    
}

const uniqueStuff = new UniqueArray()

uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add([1,2,3])
uniqueStuff.add([1,2,'3'])
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
