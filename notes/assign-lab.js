hello = "hiiii";
let count = 0;
const user = {
  loginCount: 0,
};
console.log(hello);
const loginCount = count;
const copiedUser = user;
const deepCopiedUser = { ...user };

count++;
user.loginCount++;

console.log({
  count,
  loginCount,
  user,
  copiedUser,
  deepCopiedUser,
});
