// NOTE: an array name should be a plural noun in camelCase

const names = ["Harry", "Ron", "Hermione"]

const filteredNames = names.filter(name => name.length > 4)

const letterCounts = names.map(name => name.length)

console.log({
    names,
    letterCounts,
    filteredNames,
});