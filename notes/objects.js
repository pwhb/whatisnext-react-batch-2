this.age = 12;
this.name = "Hello";

const user = {
  username: "pwhb",
  name: "Phone Waiyam Hein",
  age: 25,
  getDescription: function () {
    // this means the object in which the function is
    return `${this.age} years old - ${this.name}`;
  },
  getDescriptionArrow: () => {
    // this means the object in which the object of the function is
    return `${this.age} years old - ${this.name}`;
  },
};

console.log({
  user: user,
  username: user.username,
  getDescription: user.getDescription(),
  getDescriptionArrow: user.getDescriptionArrow(),
});

// const username = user.username;
// const age = user.age;

const { username, age } = user;

const profile = {
  avatarUrl: "https://avatars.githubusercontent.com/u/87113535?v=4",
  githubUrl: "https://github.com/pwhb",
};

// const userWithProfile = {
//   username: user.username,
//   name: user.name,
//   age: user.age,
//   avatarUrl: profile.avatarUrl,
// };

const userWithProfile = {
  ...user,
  ...profile,
};

console.log({
  username: username,
  age,
  userWithProfile,
});

// class Student {
//   name;
//   classes = ["React Batch 2"];
//   joinClass = (className) => console.log(`${this.name} joins ${this.classes}`);
//   constructor(name) {
//     this.name = name;
//   }
// }

function Student(name) {
  this.name = name;
  this.classes = ["React Batch 2"];
  this.joinClass = (className) =>
    console.log(`${this.name} joins ${this.classes}`);
}

const firstStudent = new Student("Aung Kyaw Zall");
const secondStudent = new Student("Thant Zin Htoo");

console.log({
  firstStudent: { ...firstStudent },
});
firstStudent.joinClass(firstStudent.classes[0]);
secondStudent.joinClass(secondStudent.classes[0]);
