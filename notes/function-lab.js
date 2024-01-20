let count = 0;
let user = {
  loginCount: 0,
};

function getIncreasedCount(c) {
  c = c + 1;
  return c;
}

function increaseCount(count) {
  console.log("hello");
  count = count + 1;
  console.log({ count });
}

function increaseLoginCount(user) {
  user.loginCount = user.loginCount + 1;
}

console.log({
  count,
  user,
});

// count = getIncreasedCount(count);
increaseLoginCount(user);
increaseCount(count);

console.log({
  count,
  user,
});
