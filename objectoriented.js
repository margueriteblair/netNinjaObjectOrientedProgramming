//everything in JS is an object
//objects in JS are like objects in real life, it has things it can do, and it has properties
//objects have properties and things they can do (methods)
//you can find methods in the DOM, a whole list of them!!
//arrays are an object that have properties and methods
//window is a global object that shows us allllll the methods an object has
//individual variables are not objects and don't have all the same properties
//individual variables can still sometimes behave like objects

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function() {
        console.log(this.email, "has logged in")
    }
}

let userOne = new User("blair@cic.com", "margie");
let userTwo = new User("chelsea@careerdevs.com", "chelsea")

console.log(userOne)
userTwo.login()


//can access properties either with square brackets or dot notation
//can also change properties
//we can make classes ES6 lets us use classes
//prototypes and classes are pretty similar. Car could be a class with passing in different colors for different cars (diff property vals)
//syntactic sugar

//constructor function is responsible for making a new user based on 
//fires whenever we make a new user object


//the "new" keyword
//"creates a new empty object
//sets the value of this to be the new empty object
//calls the constructor method

