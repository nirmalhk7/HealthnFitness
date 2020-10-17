// require the necessary libraries
const faker = require("faker");
const fetch = require("node-fetch");
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
  faker.seed(123);
  // get access to the relevant collections
  const usersCollection = db.collection("users");
  const postsCollection = db.collection("posts");
  // make a bunch of users
  let users = [];
  const type = ["CLIENT", "NUTRITIONIST", "PATHOLOGIST", "FITNESSCOACH"];
  type.map((element,index) => {
    for (let i = 1; i <= 5; i += 1) {
      let temp= i+index*10
      console.log(temp)
      let userTemp = {
        email: temp + "@" + temp+".com",
        username: temp + "",
        name: "user " + temp,
        password: bcrypt.hashSync(temp+"", bcrypt.genSaltSync(8), null),
        gender: "MALE",
        age: 50,
        accountType: element,
      };
      if (element != "CLIENT") {
        userTemp = {
          ...userTemp,
          description: faker.fake("{{lorem.paragraph}}"),
          phonenumber: faker.fake("{{phone.phoneNumber}}"),
          address: faker.fake(
            "{{address.streetAddress}}, {{address.city}}, {{address.state}}, {{address.countryCode}}- {{address.zipCode}}"
          ),
        };
      }
      console.log(userTemp.email);
      users.push(userTemp);
    }
  });
  usersCollection.insertMany(users);
  console.log("Database seeded! :)");
  client.close();
});
