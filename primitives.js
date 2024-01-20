// NOTE: a boolean variable name should be [verb-to-be] + [adj] 
// boolean
const isExpired = false

// number
const price = 1000

// string
const username = "pwh"

// undefined မသိတာ
function getUser() { }
const user = getUser()

// null မရှိတာ
function getBalance() { return null }
const balance = getBalance()

console.log({
    isExpired,
    price,
    username,
    user,
    balance
});