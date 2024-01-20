this.age = 12
this.name = "Hello"

const user = {
    username: "pwhb",
    name: "Phone Waiyam Hein",
    age: 25,
    getDescription: function () {
        // this means the object in which the function is
        return `${this.age} years old - ${this.name}`
    },
    getDescriptionArrow: () => {
        // this means the object in which the object of the function is
        return `${this.age} years old - ${this.name}`
    }
}

console.log({
    user: user,
    username: user.username,
    getDescription: user.getDescription(),
    getDescriptionArrow: user.getDescriptionArrow()
});