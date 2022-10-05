const mongoose = require("mongoose");
const User = require("./User.js");
mongoose.connect(
  "mongodb://localhost/testdb",
  () => {
    console.log("Connected to database");
  },
  (err) => {
    console.log("Error connecting to database");
  }
);
run()
async function run() {
    const user = await User.create({
        name: "John",
        age: 20,
        email: "jawad6686@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        bestFriend: "5f9b1b9b9b9b9b9b9b9b9b9b",
        hobbies: ["coding", "reading"],
        address: {
            street: "123 Main St",
            city: "New York",
        }
    }); 

    console.log(user)
}

