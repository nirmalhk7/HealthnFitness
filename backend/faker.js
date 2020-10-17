// require the necessary libraries
const faker = require("faker");
const fetch = require("node-fetch");
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const assert = require("assert");
const _ = require("lodash");
// Connection URL
const url = "mongodb://localhost:19000/";

// Database Name
const dbName = "hackccelerate";

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);

  const db = client.db(dbName);

  // get access to the relevant collections
  const usersCollection = db.collection("users");
  const postsCollection = db.collection("posts");
  // make a bunch of users
  let users = [];
  const type = ["CLIENT", "NUTRITIONIST", "PATHOLOGIST", "FITNESSCOACH"];
  for (let i = 0; i < 2; i += 1) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    let userTemp = {
      email: faker.internet.email(firstName, lastName),
      username: firstName,
      name: firstName + " " + lastName,
      password: "password",
      gender: "MALE",
      age: 50,
      accountType: type[Math.floor(Math.random() * type.length)],
    };

    console.log(userTemp.email,userTemp.password);
    users.push(userTemp);
  }
  usersCollection.insertMany(users);
  console.log("Database seeded! :)");
  client.close();
});
