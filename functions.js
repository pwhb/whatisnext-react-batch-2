// NOTE: a function name should be a verb in camelCase

// normal function
function getFullName(firstName, lastName) {
    console.log(firstName);
    console.log(lastName);
    return firstName + lastName
}

// arrow function 
const getAge = (birthday) => new Date().getFullYear() - new Date(birthday).getFullYear()

console.log({
    fullName: getFullName("Harry", "Potter"),
    age: getAge("1980-07-31")
});